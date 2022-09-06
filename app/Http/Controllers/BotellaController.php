<?php

namespace App\Http\Controllers;

use App\Models\Botella;
use Illuminate\Http\Request;

class BotellaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request  $request)
    {
        $per_year = $request->per_year;
        $per_mes = $request->per_mes;
        $per_page = $request->per_page;
        $botellas = Botella::whereMonth('fecha', now()->month($per_mes))->whereYear('fecha', now()->year($per_year))->orderBy('fecha', 'desc')->paginate($per_page);
        return response()->json($botellas);
        return view('botella');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $botella = new Botella();
        $botella->id = $request->id;
        $botella->bts_diarias = $request->bts_diarias;
        $botella->sum_botellas = $request->sum_botellas;
        $botella->precio = $request->precio;
        $botella->fecha = $request->fecha;

        $botella->save();
        $idBts = Botella::latest('id')->first();
        return $idBts;
        return response()->json(["message"=>"Registro Exitoso"]); 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Botella  $botella
     * @return \Illuminate\Http\Response
     */
    public function show(Botella $botella)
    {
        return response()->json($botella);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Botella  $botella
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Botella $botella)
    {
        $botella->fill($request->post())->save();
        return response()->json([
            'botella'=>$botella
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Botella  $botella
     * @return \Illuminate\Http\Response
     */
    public function destroy(Botella $botella)
    {
        //
    }
}
