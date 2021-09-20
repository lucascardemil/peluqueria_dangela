<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clientpost extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function voucher()
    {
        return $this->belongsTo('App\Voucher');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
