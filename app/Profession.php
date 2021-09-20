<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Profession extends Model
{
    //use SoftDeletes;

    //protected $dates = ['deleted_at'];

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function users()
    {
        return $this->hasMany('App\User');
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
