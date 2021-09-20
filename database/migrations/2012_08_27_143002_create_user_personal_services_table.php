<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserPersonalServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_personal_services', function (Blueprint $table) {
            $table->increments('id');
            // $table->integer('user_id')->unsigned();
            // $table->integer('personal_id')->unsigned();
            // $table->integer('service_id')->unsigned();
            $table->text('personal')->nullable();
            $table->integer('type')->boolean()->default('0');

            // $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            // $table->foreign('personal_id')->references('id')->on('personals')->onDelete('cascade');
            // $table->foreign('service_id')->references('id')->on('services')->onDelete('cascade');

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
        Schema::dropIfExists('user_personal_services');
    }
}
