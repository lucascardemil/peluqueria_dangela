<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductSale extends Model
{
    protected $table = 'product_sale';
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function sale() {
        return $this->belongsTo('App\Sale');
    }

    public function product() {
        return $this->belongsTo('App\Product');
    }

    
}

