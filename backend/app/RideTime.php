<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RideTime extends Model
{
    protected $fillable = [
        'ride_id', 'start_time', 'end_time',
    ];

    public function ride() {
        return $this->belongsTo('App\Ride');
    }

    public function rideReservations() {
        return $this->hasMany('App\RideReservation');
    }
}
