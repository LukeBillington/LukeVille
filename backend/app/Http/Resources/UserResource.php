<?php

namespace App\Http\Resources;

use App\Http\Resources\PersonResource;
use Illuminate\Http\Resources\Json\Resource;

class UserResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $checked_people = \App\Person::where('user_id', $this->id)->checked()->get();

        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'gender' => $this->gender,
            'photo_path' => $this->photo_path,
            'people' => PersonResource::collection($this->people),
            'checked_people' => PersonResource::collection($checked_people),
        ];
    }
}
