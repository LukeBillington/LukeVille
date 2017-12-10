<?php

use App\Ride;
use Illuminate\Database\Seeder;

class RidesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Ride::create([
          'name' => 'Rotary',
          'location' => 'Spintropolis',
          'type' => 'Spinning Ride',
          'height_requirement' => 44,
          'description' => 'Get spun in every direction with this thrilling adventure.',
          'photo_path' => '/img/rides/1.png',
      ]);

      Ride::create([
          'name' => 'Fire Canyon',
          'location' => 'Coasterland',
          'type' => 'Roller Coaster',
          'height_requirement' => 48,
          'description' => 'Launch from 0 to 60mph in this high-speed coaster.',
          'photo_path' => '/img/rides/2.png',
      ]);

      Ride::create([
          'name' => 'Twister',
          'location' => 'Coasterland',
          'type' => 'Roller Coaster',
          'height_requirement' => 42,
          'description' => 'Enjoy this coaster... with a twist!',
          'photo_path' => '/img/rides/3.png',
      ]);

      Ride::create([
          'name' => 'Steeple Chase',
          'location' => 'Coasterland',
          'type' => 'Roller Coaster',
          'height_requirement' => 36,
          'description' => 'Hop on a horse and race through tight turns!',
          'photo_path' => '/img/rides/4.png',
      ]);

      Ride::create([
          'name' => 'Symphony Swings',
          'location' => 'Luke Central',
          'type' => 'Gentle Ride',
          'description' => 'See the park from a gentle swing ride.',
          'photo_path' => '/img/rides/5.png',
      ]);

      Ride::create([
          'name' => 'The Patriot',
          'location' => 'Coasterland',
          'type' => 'Roller Coaster',
          'height_requirement' => 44,
          'description' => 'Race in these dueling coasters that will pull you in all directions.',
          'photo_path' => '/img/rides/6.png',
      ]);

      Ride::create([
          'name' => 'BlueTube',
          'location' => 'Splash Station',
          'type' => 'Water Ride',
          'description' => 'Get soaked while racing down this exhillerating tube slide.',
          'photo_path' => '/img/rides/7.png',
      ]);

      Ride::create([
          'name' => 'Mouse Track',
          'location' => 'Coasterland',
          'type' => 'Roller Coaster',
          'height_requirement' => 36,
          'description' => 'Spin around on this wild mouse chase!',
          'photo_path' => '/img/rides/8.png',
      ]);

      Ride::create([
          'name' => 'Cyclones',
          'location' => 'Spintropolis',
          'type' => 'Spinning Ride',
          'height_requirement' => 48,
          'description' => 'Get caught in the middle of a twister!',
          'photo_path' => '/img/rides/9.png',
      ]);

      Ride::create([
          'name' => 'H2Flow',
          'location' => 'Splash Station',
          'type' => 'Water Ride',
          'description' => 'Race with friends and family in this water course!',
          'photo_path' => '/img/rides/10.png',
      ]);

      Ride::create([
          'name' => 'The Big Wheel',
          'location' => 'Luke Central',
          'type' => 'Gentle Ride',
          'description' => 'Get a bird\'s eye view of the park atop this giant wheel!',
          'photo_path' => '/img/rides/11.png',
      ]);

      Ride::create([
          'name' => 'Sky Flyer',
          'location' => 'Spintropolis',
          'type' => 'Spinning Ride',
          'description' => 'Get shot up high into the sky and spin your way down in these super swing gliders!',
          'photo_path' => '/img/rides/12.png',
      ]);
    }
}
