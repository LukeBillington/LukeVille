<?php

namespace App\Http\Controllers;

use App\Ride;
use App\User;
use App\Person;
use App\RideTime;
use App\RideReservation;
use Illuminate\Http\Request;

class RideController extends Controller
{
    public function bookReservation($user_id, $ride_time_id) {
      $user = User::findOrFail($user_id);
      $ride_time = RideTime::findOrFail($ride_time_id);
      $checked_people = Person::where('user_id', $user->id)->checked()->get();
      foreach ($checked_people as $person) {
        RideReservation::create([
          'person_id' => $person->id,
          'ride_time_id' => $ride_time->id,
        ]);
      }
    }
}
