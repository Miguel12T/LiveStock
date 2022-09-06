<?php

namespace App\Http\Controllers;

use App\Models\Novedad;
use App\Models\Vaca;
use App\Models\Becerro;
use App\Models\Novilla;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;

class NovedadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $novedads = Novedad::select('novedads.id','novedads.nombre','novedads.foto','novedads.raza','novedads.genero','novedads.tipo','novedads.novedad')->get();
        return response()->json($novedads);       
        return view('Novedad');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $novedad = new Novedad();

        $novedad->id = $request->id;
        $novedad->nombre = $request->nombre;
        $novedad->foto = $request->foto;
        $novedad->raza = $request->raza;
        $novedad->genero = $request->genero;
        $novedad->tipo = $request->tipo;
        $novedad->novedad = $request->novedad;

        $novedad->save();
        return response()->json(["message"=>"Registro Exitoso"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Novedad  $novedad
     * @return \Illuminate\Http\Response
     */
    public function show(Novedad $novedad, Vaca $vaca, Novilla $novilla, Becerro $becerro) 
    {
        return response()->json($vaca);
        return response()->json($novilla);
        return response()->json($becerro);
        return response()->json($novedad);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Novedad  $novedad
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Novedad $novedad, $id)
    {
        $novedad = Novedad::find($id);
        
        $novedad->nombre = $request->nombre;
        $novedad->foto = $request->foto;
        $novedad->raza = $request->raza;
        $novedad->genero = $request->genero;
        $novedad->tipo = $request->tipo;
        $novedad->novedad = $request->novedad;
        $novedad->save();

        return $novedad;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Novedad  $novedad
     * @return \Illuminate\Http\Response
     */
    public function destroy(Novedad $novedad)
    {
        //
    }
}
