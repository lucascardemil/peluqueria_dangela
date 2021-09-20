<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inventorytemplate extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function sucursal()
    {
        return $this->belongsTo('App\Sucursal');
    }

    public function codes()
    {
        return $this->belongsToMany('App\Code');
    }

    public function scopeName($query)
    {
        $keyword = request('name');
        if ($query) {
            $query->where('name', 'LIKE', '%'. $keyword . '%');
        }

        return $query;
    }
}
