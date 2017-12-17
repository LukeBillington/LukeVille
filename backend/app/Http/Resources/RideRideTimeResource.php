<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class RideRideTimeResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $start_time = $this->start_time->format('h:i A');
        $end_time = $this->end_time->format('h:i A');
        $reservation_time = $start_time . ' - ' . $end_time;
        return [
            'id' => $this->id,
            'start_time' => $start_time,
            'end_time' => $end_time,
            'reservation_time' => $reservation_time,
        ];
    }
}
