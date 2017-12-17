<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Person;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'gender' => 'required',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        // Get dummy main user based off of gender
        $dummy_user = json_decode(file_get_contents('https://randomuser.me/api/?nat=gb,us&gender=' . strtolower($data['gender'])))->results[0];

        // Get 4 random other dummy users
        $dummy_users = json_decode(file_get_contents('https://randomuser.me/api/?nat=gb,us&results=4'))->results;

        // Create a user with dummy photo
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'gender' => $data['gender'],
            'photo_path' => $dummy_user->picture->large,
            'password' => bcrypt($data['password']),
        ]);

        // Create a primary person based off the user
        $person = Person::create([
            'user_id' => $user->id,
            'name' => $user->name,
            'gender' => $user->gender,
            'photo_path' => $user->photo_path,
        ]);

        // Create 4 alternate dummy users
        for ($i=0; $i < 4; $i++) {
            $dummy_user = $dummy_users[$i];
            $person = Person::create([
                'user_id' => $user->id,
                'name' => ucfirst($dummy_user->name->first),
                'gender' => $dummy_user->gender,
                'photo_path' => $dummy_user->picture->large,
            ]);
        }

        // Return created user
        return $user;
    }
}
