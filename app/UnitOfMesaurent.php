<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UnitOfMesaurent extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function products()
    {
        return $this->hasMany('App\Product');
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
