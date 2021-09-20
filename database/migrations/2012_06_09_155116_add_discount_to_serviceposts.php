<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDiscountToServicePosts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::table('serviceposts', function (Blueprint $table) {

        //     $table->integer('descuento')->unsigned()->after('service_id');
            
        // });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::table('serviceposts', function (Blueprint $table) {
        //     $table->dropColumn('descuento');
        // });
    }
}
