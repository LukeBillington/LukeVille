<?php

namespace App\Http\Resources;

use App\Http\Resources\RideRideTimeResource;
use Illuminate\Http\Resources\Json\Resource;

class RideResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // Get available ride times
        $ride_times = \App\RideTime::where('ride_id', $this->id)->available()->get();

        return [
            'id' => $this->id,
            'name' => $this->name,
            'location' => $this->location,
            'wait_time' => $this->wait_time,
            'type' => $this->type,
            'height_requirement' => $this->height_requirement,
            'description' => $this->description,
            'photo_path' => $this->photo_path,
            'header_path' => $this->header_path,
            'ride_times' => RideRideTimeResource::collection($ride_times),
        ];
    }
}
