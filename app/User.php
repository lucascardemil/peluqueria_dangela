<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;


class User extends Authenticatable
{
    use Notifiable, HasRoles;
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
            $query->where('barcode', 'LIKE', $keyword . '%');
        }

        return $query;
    }

    public function scopeRut($query, $keyword = null)
    {
        if ($keyword) {
            $query->where('rut', '=', $keyword);
        }

        return $query;
    }

    public function scopeName($query, $keyword = null)
    {
        if ($keyword) {
            $query->where('name', 'LIKE', $keyword . '%');
        }

        return $query;
    }

    public function scopeEmail($query, $keyword = null)
    {
        if ($keyword) {
            $query->where('email', 'LIKE', $keyword . '%');
        }

        return $query;
    }

    public function isSucursal()
    {
        return $this->roles->contains('name', 'sucursal');
    }

}
