<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCodeInventorytemplateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('code_inventorytemplate', function (Blueprint $table) {

            $table->integer('code_id')->unsigned();
            $table->foreign('code_id')->references('id')->on('codes')->onDelete('cascade');

            $table->integer('inventorytemplate_id')->unsigned();
            $table->foreign('inventorytemplate_id')->references('id')->on('inventorytemplates')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('code_inventorytemplate');
    }
}
