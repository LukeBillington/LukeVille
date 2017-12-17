<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRidesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rides', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->enum('location', [
                'Luke Central',
                'Coasterland',
                'Spintropolis',
                'Splash Station',
            ]);
            $table->integer('wait_time')->default(0);
            $table->enum('type', [
                'Spinning Ride',
                'Water Ride',
                'Roller Coaster',
                'Gentle Ride',
            ]);
            $table->integer('height_requirement')->nullable();
            $table->text('description');
            $table->string('photo_path')->nullable();
            $table->string('header_path')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rides');
    }
}
