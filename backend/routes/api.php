<?php

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Resources\RideResource;
use App\Http\Resources\PersonResource;

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

Route::get('/person/{id}', function ($id) {
    return new PersonResource(App\Person::findOrFail($id));
});

Route::get('/person/{id}/toggle', 'PersonController@togglePerson');

Route::get('/reserveRide/{user_id}/{ride_time_id}', 'RideController@bookReservation');
