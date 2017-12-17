<?php

namespace App\Console\Commands;

use App\Ride;
use Illuminate\Console\Command;

class RideTimeWaits extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ridetime:waits';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates dummy wait times for all rides';

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

        // Get all rides
        $rides = Ride::all();
        foreach($rides as $ride) {
          $weight = rand(1, 10);
          if($weight <= 3) {
            $ride->wait_time = $ride->wait_time - 5;
          } elseif($weight >= 8 ) {
            $ride->wait_time = $ride->wait_time + 5;
          }
          if($ride->wait_time > 120) {
            $ride->wait_time = 120;
          }
          if($ride->wait_time < 5) {
            $ride->wait_time = 5;
          }
          $ride->save();
        }
    }
}
