<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function payment() {
        return $this->belongsTo('App\Payment');
    }

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function productSales() {
        return $this->hasMany('App\ProductSale');
    }
}
