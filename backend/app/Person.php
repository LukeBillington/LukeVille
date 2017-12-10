<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $fillable = [
        'user_id', 'name', 'gender', 'photo_path',
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function ride_reservations() {
        return $this->hasMany('App\RideReservation');
    }
}
