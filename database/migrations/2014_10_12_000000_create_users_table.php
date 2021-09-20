<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('profession_id')->unsigned();
            $table->foreign('profession_id')->references('id')->on('professions')->onDelete('cascade');
            $table->string('rut', 25)->unique();
            $table->text('name');
            $table->string('email')->unique();
            $table->text('address');
            $table->string('phone', 25)->nullable();
            $table->date('birthdate');
            $table->unsignedTinyInteger('sex');
            $table->unsignedTinyInteger('civil');
            $table->unsignedTinyInteger('children');
            $table->string('barcode');
            $table->unsignedInteger('score')->default(0);
            $table->string('password');
            $table->boolean('is_activate')->default(true);
            $table->boolean('is_sendmail')->default(true);
            $table->boolean('is_convenio')->default(false);
            $table->rememberToken();
            $table->timestamps();
           //$table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
