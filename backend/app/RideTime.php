<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class RideTime extends Model
{
    protected $fillable = [
        'ride_id', 'start_time', 'end_time',
    ];

    protected $dates = [
        'start_time', 'end_time', 'created_at', 'updated_at',
    ];

    public function ride() {
        return $this->belongsTo('App\Ride');
    }

    public function ride_reservations() {
        return $this->hasMany('App\RideReservation');
    }

    public function scopeAvailable($query) {
        $now = Carbon::now();
        return $query->where('start_time', '>', $now);
    }

    public function scopeActive($query) {
        $now = Carbon::now();
        return $query->where('start_time', '<=', $now)
            ->where('end_time', '>=', $now);
    }
}
