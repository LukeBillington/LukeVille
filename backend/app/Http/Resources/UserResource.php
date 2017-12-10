<?php

namespace App\Http\Resources;

use App\Http\Resources\UserPersonResource;
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
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'gender' => $this->gender,
            'photo_path' => $this->photo_path,
            'people' => UserPersonResource::collection($this->people),
        ];
    }
}
