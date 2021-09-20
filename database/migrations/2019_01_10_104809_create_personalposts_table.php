<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonalpostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personalposts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('servicepost_id')->unsigned();
            $table->foreign('servicepost_id')->references('id')->on('serviceposts')->onDelete('cascade');

            $table->integer('personal_id')->unsigned();
            $table->foreign('personal_id')->references('id')->on('personals')->onDelete('cascade');
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
        Schema::dropIfExists('personalposts');
    }
}
