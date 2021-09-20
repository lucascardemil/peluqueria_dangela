<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsumeProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consume_products', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('code_id')->unsigned();
            $table->foreign('code_id')->references('id')->on('codes')->onDelete('cascade');
            $table->integer('sucursal_id')->unsigned();
            $table->foreign('sucursal_id')->references('id')->on('sucursals')->onDelete('cascade');

            $table->bigInteger('price_cost')->default(0);
            $table->bigInteger('price_sale')->default(0);
            $table->bigInteger('utility')->default(0);
            $table->integer('quantity')->default(1);

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
        Schema::dropIfExists('consume_products');
    }
}
