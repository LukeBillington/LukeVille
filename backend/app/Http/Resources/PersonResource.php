<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\PersonReservationResource;
use Illuminate\Http\Resources\Json\Resource;

class PersonResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        $now = Carbon::now();

        $current_reservations = DB::table('ride_reservations')
            ->join('ride_times', 'ride_reservations.ride_time_id', '=', 'ride_times.id')
            ->join('rides', 'ride_times.ride_id', '=', 'rides.id')
            ->select('ride_times.start_time', 'ride_times.end_time', 'rides.header_path')
            ->where('ride_reservations.person_id', $this->id)
            ->where('start_time', '<=', $now)
            ->where('end_time', '>=', $now)
            ->get();

        $future_reservations = DB::table('ride_reservations')
            ->join('ride_times', 'ride_reservations.ride_time_id', '=', 'ride_times.id')
            ->join('rides', 'ride_times.ride_id', '=', 'rides.id')
            ->select('ride_times.start_time', 'ride_times.end_time', 'rides.header_path')
            ->where('ride_reservations.person_id', $this->id)
            ->where('start_time', '>', $now)
            ->get();

        return [
            'id' => $this->id,
            'name' => $this->name,
            'gender' => $this->gender,
            'photo_path' => $this->photo_path,
            'checked' => $this->checked,
            'reservation_count' => $current_reservations->count() + $future_reservations->count(),
            'current_reservations' => PersonReservationResource::collection($current_reservations),
            'future_reservations' => PersonReservationResource::collection($future_reservations),
        ];
    }
}
