<?php

namespace App\Http\Controllers\Bill;

use App\Supplier;
use App\Inventory;
use App\Product;
use App\TipoPago;
use App\Flete;
use DateTime;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BillController extends Controller
{
    protected $product;
    protected $inventory;
    protected $supplier;

    public function __construct(Product $product, Inventory $inventory, Supplier $supplier)
    {
        $this->product = $product;
        $this->inventory = $inventory;
        $this->supplier = $supplier;
    }


    public function store(Request $request)
    {
        try {
            $path = $request->file('file');
            $xml = simplexml_load_file($path);
            $utilityDefect = $request->utility;
            $fleteDefect = $request->flete;

            $this->supplier->updateOrCreate(
                [
                    'rut' => $xml->DTE->Documento->Encabezado->Emisor[0]->RUTEmisor,
                    'name' => $xml->DTE->Documento->Encabezado->Emisor[0]->RznSoc,
                    'address' => $xml->DTE->Documento->Encabezado->Emisor[0]->DirOrigen,
                    'commercial_business' => $xml->DTE->Documento->Encabezado->Emisor[0]->GiroEmis,
                ]
            );

            foreach ($xml->DTE->Documento->Detalle as $invoice) {
                $name_product = preg_replace(array('/\s{2,}/', '/[\t\n]/'), ' ', $invoice->NmbItem);

                if (!empty($invoice->CdgItem->TpoCodigo)) {
                    $count = $this->product->where('code', $invoice->CdgItem->TpoCodigo . '-' . $invoice->CdgItem->VlrCodigo)->count();

                    if (empty($count)) {
                        $product = $this->addProduct($name_product, $invoice, $xml, $utilityDefect, $fleteDefect);
                        $this->addInventory($product, $invoice, $xml);
                    } else {
                        $products = $this->product->where('code', $invoice->CdgItem->TpoCodigo . '-' . $invoice->CdgItem->VlrCodigo)->get();
                        foreach ($products as $product) {

                            if ($product->attribute > 0) {
                                $this->updateInventoryForAttribute($product, $invoice);
                            } else {
                                $this->addInventory($product, $invoice, $xml);
                            }
                        }
                    }
                } else {
                    $count = $this->product->where('name', $name_product)->count();

                    if (empty($count)) {
                        $product = $this->addProduct($name_product, $invoice, $xml, $utilityDefect, $fleteDefect);
                        $this->addInventory($product, $invoice, $xml);
                    } else {
                        $products = $this->product->where('name', $invoice->NmbItem)->get();
                        foreach ($products as $product) {

                            if ($product->attribute > 0) {
                                $this->updateInventoryForAttribute($product, $invoice);
                            } else {
                                $this->addInventory($product, $invoice, $xml);
                            }
                        }
                    }
                }
            }

            return response()->json(['message' => 'Factura ingresada correctamente'], 200);
        } catch (\Exception $e) {
            // En caso de error, devolver una respuesta de error con un mensaje apropiado.
            return response()->json(['error' => 'Ocurrió un error al procesar la factura: ' . $e->getMessage()], 500);
        }
    }


    public function addProduct($name, $invoice, $xml, $utility, $flete)
    {
        $code = isset($invoice->CdgItem->TpoCodigo) ? $invoice->CdgItem->TpoCodigo . '-' . $invoice->CdgItem->VlrCodigo : 'Sin codigo';

        $product = $this->product->firstOrCreate(
            [
                'name' => $name,
                'code' => $code,
                'supplier' => $xml->DTE->Documento->Encabezado->Emisor[0]->RznSoc,
                'invoice' => $xml->DTE->Documento->Encabezado->IdDoc[0]->Folio,
                'utility' => $utility,
                'flete' => $flete
            ]
        );

        return $product;
    }


    public function addInventory($product, $invoice, $xml)
    {
        $this->inventory->firstOrCreate(
            [
                'product_id' => $product->id,
                'price' => round($invoice->MontoItem / $invoice->QtyItem),
                'quantity' => $invoice->QtyItem,
                'fecha_fact' => $xml->DTE->Documento->Encabezado->IdDoc[0]->FchEmis
            ]
        );
    }


    public function updateInventoryForAttribute($product, $invoice)
    {
        $quantity = $invoice->QtyItem * $product->attribute;
        $total = $invoice->PrcItem * $invoice->QtyItem;

        $this->inventory->where('product_id', '=', $product->id)->update(
            [
                'price' => $total / $quantity,
                'quantity' => $quantity
            ]
        );
    }
}
