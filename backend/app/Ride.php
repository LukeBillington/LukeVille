<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ride extends Model
{
    protected $fillable = [
        'name', 'location', 'type', 'height_requirement', 'description', 'photo_path', 'header_path',
    ];

    public function ride_times() {
        return $this->hasMany('App\RideTime');
    }
}
