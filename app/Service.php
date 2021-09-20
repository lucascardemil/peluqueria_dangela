<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    //use SoftDeletes;

    //protected $dates = ['deleted_at'];

    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $hidden = [
        'pivot', 'deleted_at'
    ];

    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    public function personal()
    {
        return $this->belongsTo('App\Personal');
    }

    public function users()
    {
        return $this->belongsToMany('App\User')->withTimestamps();
    }

    public function userPersonalServices()
    {
        return $this->hasMany('App\UserPersonalService');
    }

    public function serviceposts()
    {
        return $this->hasMany('App\Servicepost');
    }

    public function servicepromotions()
    {
        return $this->hasMany('App\Servicepromotion');
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
            $query->where('name', 'LIKE', $keyword . '%');
        }

        return $query;
    }
}
