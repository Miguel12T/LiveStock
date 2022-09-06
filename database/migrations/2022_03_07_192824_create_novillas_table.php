<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNovillasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('novillas', function (Blueprint $table) {
            $table->engine='InnoDB';
            $table->id();
            $table->bigInteger('id_raza')->unsigned();
            $table->integer('nombre')->unique('Nnombre_UNIQUE');
            $table->bigInteger('idgenero')->unsigned();
            $table->string('imagen');
            $table->bigInteger('idtipo')->unsigned();
            $table->integer('valor_Vendido');
            $table->enum('crecimiento',['1','2'])->default('1');
            $table->enum('vendido',['1','2'])->default('1');
            $table->enum('fallecida',['1','2'])->default('1');
            $table->timestamps();

            $table->foreign('id_raza')->references('id')->on('razas')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idgenero')->references('id')->on('generos')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idtipo')->references('id')->on('tipos')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('novillas');
    }
}
