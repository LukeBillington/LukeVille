<?php

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Resources\RideResource;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Temorarily returning first user
/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return new UserResource($request->user());
});*/
Route::get('/user', function () {
    return new UserResource(\App\User::first());
});

Route::get('/rides', function () {
    return RideResource::collection(App\Ride::all());
});

Route::get('/ride/{id}', function ($id) {
    return new RideResource(App\Ride::findOrFail($id));
});
