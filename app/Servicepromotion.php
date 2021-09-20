<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servicepromotion extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function promotion()
    {
        return $this->belongsTo('App\Promotion');
    }

    public function service()
    {
        return $this->belongsTo('App\Service');
    }

}
