<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sucursal extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function sucursals()
    {
        return $this->hasMany('App\Sucursal');
    }
}
