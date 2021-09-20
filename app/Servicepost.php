<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servicepost extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function voucher()
    {
        return $this->belongsTo('App\Voucher');
    }

    public function service()
    {
        return $this->belongsTo('App\Service');
    }

    public function personalposts()
    {
        return $this->hasMany('App\Personalpost');
    }
}
