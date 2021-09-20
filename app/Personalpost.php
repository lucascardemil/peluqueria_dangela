<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Personalpost extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function servicepost()
    {
        return $this->belongsTo('App\Servicepost');
    }

    public function personal()
    {
        return $this->belongsTo('App\Personal');
    }
}
