<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBotellasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('botellas', function (Blueprint $table) {
            $table->id();
            $table->integer('bts_diarias');
            $table->integer('precio');
            $table->integer('sum_botellas');
            $table->date('fecha')->unique('fecha_UNIQUE');
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
        Schema::dropIfExists('botellas');
    }
}
