<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Voucher extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];


    public function sucursal()
    {
        return $this->belongsTo('App\Sucursal');
    }

    public function users()
    {
        return $this->hasMany('App\User');
    }

    public function clientposts()
    {
        return $this->hasMany('App\Clientpost');
    }

    public function serviceposts()
    {
        return $this->hasMany('App\Servicepost');
    }

    public function scopeId($query)
    {
        $keyword = request('id');
        if ($query) {
            $query->where('id', 'LIKE', '%'.$keyword.'%');
        }

        return $query;
    }

    public function scopeDay(Builder $query, $date): Builder
    {
        $dateArray = explode('-', $date);
        $day = $dateArray[2];
        $month = $dateArray[1];
        $year = $dateArray[0];

        //return $query->where('created_at', '<=', Carbon::parse($date));
        return $query->whereDay('created_at', '=', $day )
                    ->whereMonth( 'created_at', '=', $month )
                    ->whereYear('created_at', '=', $year );
    }

    public function scopeMonth(Builder $query, $date): Builder
    {
        $dateArray = explode('-', $date);
        $day = $dateArray[2];
        $month = $dateArray[1];
        $year = $dateArray[0];

        return $query->whereMonth('created_at', '=', $month)
                    ->whereYear('created_at', '=', $year );
    }

    public function scopeYear(Builder $query, $date): Builder
    {
        $dateArray = explode('-', $date);
        $year = $dateArray[0];

        return $query->whereYear('created_at', '=', $year );
    }

}
