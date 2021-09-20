<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function unitOfMesaurent()
    {
        return $this->belongsTo('App\UnitOfMesaurent');
    }

    public function codes()
    {
        return $this->hasMany('App\Code');
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
