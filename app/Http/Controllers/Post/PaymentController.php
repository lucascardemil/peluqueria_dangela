<?php

namespace App\Http\Controllers\Post;

use App\Payment;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;

class PaymentController extends Controller
{
    protected $payment;
    protected $rule;

    public function __construct(Rule $rule, Payment $payment)
    {
        $this->rule = $rule;
        $this->payment = $payment;
    }

    public function index()
    {
        $payments = $this->payment::orderBy('id', 'ASC')->paginate(10);

        return [
            'pagination' => [
                'total'         => $payments->total(),
                'current_page'  => $payments->currentPage(),
                'per_page'      => $payments->perPage(),
                'last_page'     => $payments->lastPage(),
                'from'          => $payments->firstItem(),
                'to'            => $payments->lastItem(),
            ],
            'payments' => $payments
        ];
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:payments|min:4',
            'utility' => 'required'
        ], [
            'name.unique' => 'El campo forma de pago ya ha sido tomado',
            'name.required' => 'El campo forma de pago es obligatorio',
            'utility.required' => 'El campo utilidad es obligatorio',
        ]);

        $payment = $this->payment::create($request->all());

        return $payment;
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => ['required', 'min:4', 'max:190', $this->rule->unique('products')->ignore($this->payment->find($id))],
            'utility' => ['required', 'min:1', 'max:100'],
        ], [
            'name.required' => 'El campo nombre es obligatorio',
            'name.unique' => 'El nombre del producto ya existe',
            'name.min' => 'El campo nombre debe tener al menos 4 caracteres',
            'utility.required' => 'El campo utilidad es obligatorio',
            'utility.min' => 'El campo utilidad debe tener al menos 1%',
            'utility.max' => 'El campo utilidad debe tener a lo más 100%',
        ]);

        $payment = $this->payment->find($id);
        $updated = $payment->update($request->all());


        if ($updated) {
            return $payment;
        }
    }

    public function all()
    {
        $payments = $this->payment::orderBy('id', 'ASC')->get();

        return $payments;
    }
}
