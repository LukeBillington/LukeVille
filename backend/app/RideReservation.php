<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RideReservation extends Model
{
    protected $fillable = [
        'person_id', 'ride_time_id',
    ];

    public function rideTime() {
        return $this->belongsTo('App\RideTime');
    }

    public function person() {
        return $this->belongsTo('App\Person');
    }
}
