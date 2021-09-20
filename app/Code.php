<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Code extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function brand()
    {
        return $this->belongsTo('App\Brand');
    }

    public function laboratory()
    {
        return $this->belongsTo('App\Laboratory');
    }

    public function product()
    {
        return $this->belongsTo('App\Product');
    }

    public function inventories()
    {
        return $this->hasMany('App\Inventory');
    }

    public function scopeNameCode($query)
    {
        $keyword = request('code');
        if ($query) {
            $query->where('name', 'LIKE', '%'. $keyword . '%');
        }

        return $query;
    }

    public function scopeNameProduct($query)
    {
        $keyword = request('product');
        return $query->whereHas('product', function ($query) use ($keyword) {
            $query->where('name', 'LIKE', '%'. $keyword . '%');
        });

        return $query;
    }

    public function scopeNameLaboratory($query)
    {
        $keyword = request('laboratory');
        return $query->whereHas('laboratory', function ($query) use ($keyword) {
            $query->where('name', 'LIKE', '%'. $keyword . '%');
        });

        return $query;
    }

    public function scopeNameBrand($query)
    {
        $keyword = request('brand');
        return $query->whereHas('brand', function ($query) use ($keyword) {
            $query->where('name', 'LIKE', '%'. $keyword . '%');
        });

        return $query;
    }
}
