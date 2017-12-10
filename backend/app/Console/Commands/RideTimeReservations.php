<?php

namespace App\Console\Commands;

use App\Ride;
use App\RideTime;
use Carbon\Carbon;
use Illuminate\Console\Command;

class RideTimeReservations extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ridetime:reservations';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates reservation times for today until park closing';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        // Set park closing to 10pm today
        $closing = Carbon::parse('today')->hour(22);

        // Iterate over each ride
        foreach(Ride::all() as $ride) {

            // Show ride title
            $this->info($ride->name . ' ------------------------------');

            // Calculate reservation start time
            $nextStart = Carbon::parse('next hour')->minute(0)->second(0);

            // Calculate reservation end time (1 hour after)
            $nextEnd = Carbon::parse('next hour')->minute(0)->second(0)->addHour();

            // Iterate until end time reaches park closing
            while($nextEnd->lte($closing)) {

                // Show times
                $this->info($nextStart . ' - ' . $nextEnd);

                // Store time
                RideTime::create([
                    'ride_id' => $ride->id,
                    'start_time' => $nextStart,
                    'end_time' => $nextEnd,
                ]);

                // Make each reservation 15 minutes apart
                $nextStart->addMinutes(15);
                $nextEnd->addMinutes(15);
            }
        }
    }
}
