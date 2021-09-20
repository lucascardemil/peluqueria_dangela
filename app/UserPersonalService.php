<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserPersonalService extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function personal()
    {
        return $this->belongsTo('App\Personal');
    }

    public function service()
    {
        return $this->belongsTo('App\Service');
    }
}
