<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];


    public function servicepromotions()
    {
        return $this->hasMany('App\Servicepromotion');
    }
    /**
     * Filter promotion data based on query
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

