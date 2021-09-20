<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Personal extends Model
{
    //use SoftDeletes;

    // $dates = ['deleted_at'];

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function services()
    {
        return $this->hasMany('App\Service');
    }

    public function userPersonalServices()
    {
        return $this->hasMany('App\UserPersonalService');
    }

    public function personalposts()
    {
        return $this->hasMany('App\Personalpost');
    }

    /**
     * Filter user data based on query
     *
     * @params $query
     * @return Eloquent
     */
    public function scopeName($query)
    {
        $keyword = request('name');
        if ($query) {
            $query->where('name', 'LIKE', '%'. $keyword . '%');
        }

        return $query;
    }
}
