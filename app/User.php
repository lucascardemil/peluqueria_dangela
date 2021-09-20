<?php

namespace App;

use Caffeinated\Shinobi\Traits\ShinobiTrait;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable /*implements JWTSubject*/
{
    use Notifiable, ShinobiTrait;

    /*public function getJWTIdentifier()
    {
      return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
      return [];
    }*/

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at', 'deleted_at'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'pivot', 'deleted_at'
    ];

    public function voucher()
    {
        return $this->belongsTo('App\Voucher');
    }
    public function company()
    {
        return $this->belongsTo('App\Company');
    }
    public function profession()
    {
        return $this->belongsTo('App\Profession');
    }

    public function services()
    {
        return $this->belongsToMany('App\Service')->withTimestamps();
    }

    public function userPersonalServices()
    {
        return $this->hasMany('App\UserPersonalService');
    }

    /**
     * Filter user data based on query
     *
     * @params $query
     * @return Eloquent
     */
    public function scopeBarcode($query)
    {
        $keyword = request('barcode');
        if ($query) {
            $query->where('users.barcode', 'LIKE', $keyword . '%');
        }

        return $query;
    }

    /**
     * Filter user data based on query
     *
     * @params $query
     * @return Eloquent
     */
    public function scopeRut($query)
    {
        $keyword = request('rut');
        if ($query) {
            $query->where('rut', 'LIKE', $keyword . '%');
        }

        return $query;
    }


   public function scopeName($query)
   {
       $keyword = request('name');
       if ($query) {
           $query->where('name', 'LIKE', $keyword . '%');
       }

       return $query;
   }

}
