<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RideReservation extends Model
{
    protected $fillable = [
        'person_id', 'ride_time_id',
    ];

    public function ride_time() {
        return $this->belongsTo('App\RideTime');
    }

    public function person() {
        return $this->belongsTo('App\Person');
    }
}
