<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function product()
    {
        return $this->hasMany('App\Product');
    }
}
