<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partos', function (Blueprint $table) {
            $table->engine='innoDB';
            $table->id();
            $table->bigInteger('idBecerro')->unsigned()->unique('idBecerro_UNIQUE');
            $table->bigInteger('imgBecerro')->unsigned();
            $table->bigInteger('fecha')->unsigned();
            $table->bigInteger('razaBecerro')->unsigned();
            $table->bigInteger('generoBecerro')->unsigned();
            $table->bigInteger('idVaca')->unsigned();
            $table->bigInteger('imgVaca')->unsigned();
            $table->bigInteger('razaVaca')->unsigned();
            $table->timestamps();

            $table->foreign('idBecerro')->references('id')->on('becerros')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('imgBecerro')->references('id')->on('becerros')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('fecha')->references('id')->on('becerros')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idVaca')->references('id')->on('vacas')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('razaBecerro')->references('id')->on('becerros')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('generoBecerro')->references('id')->on('becerros')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('imgVaca')->references('id')->on('vacas')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('razaVaca')->references('id')->on('vacas')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('partos');
    }
}
