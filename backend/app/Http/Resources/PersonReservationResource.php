<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\Resource;

class PersonReservationResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $start_time = Carbon::parse($this->start_time)->format('h:i A');
        $end_time = Carbon::parse($this->end_time)->format('h:i A');
        $reservation_time = $start_time . ' - ' . $end_time;

        return [
            'start_time' => $start_time,
            'end_time' => $end_time,
            'reservation_time' => $reservation_time,
            'header_path' => $this->header_path,
        ];
    }
}
