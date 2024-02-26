<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function inventories() {
        return $this->hasMany('App\Inventory');
    }

    public function productSales() {
        return $this->hasMany('App\ProductSale');
    }

    public function scopeName($query)
    {
        $keyword = request('name');
        if ($query) {
            $query->where('name', 'LIKE', '%' . $keyword . '%');
        }

        return $query;
    }
}
