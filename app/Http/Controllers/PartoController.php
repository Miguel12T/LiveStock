<?php

namespace App\Http\Controllers;

use App\Models\Parto;
use App\Models\Becerro;
use App\Models\Vaca;
use App\Models\Raza;
use Illuminate\Http\Request;

class PartoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request  $request)
    {
        $per_page = $request->per_page;
        $parto = Parto::join('becerros AS be','be.id','partos.idBecerro')
                    ->join('vacas AS va','va.id','partos.idVaca')
                    ->join('vacas As vac','vac.id','partos.imgVaca')
                    ->join('becerros AS bec','bec.id','partos.imgBecerro')
                    ->join('becerros AS bece','bece.id','partos.fecha')
                    ->join('becerros AS gbc','gbc.id','partos.generoBecerro')
                    ->join('generos AS ge','ge.id','gbc.idgenero')
                    ->join('becerros AS bcr','bcr.id','partos.razaBecerro')
                    ->join('razas AS rabc','rabc.id','bcr.id_raza')
                    ->join('vacas AS vcr','vcr.id','partos.razaVaca')
                    ->join('razas AS ravc','ravc.id','vcr.id_raza')
                    ->select('be.nombre AS becerro_id','be.id AS idBecerro','va.nombre AS vaca_id','va.id AS idVaca','vac.imagen AS vaca_img','vac.id AS imgVaca',
                             'bec.imagen AS becerro_img','bec.id AS imgBecerro','bece.fecha_nacimiento','bece.id AS fecha',
                             'rabc.raza AS raBecerro','rabc.id AS razaBecerro','ravc.raza AS raVaca','ravc.id AS razaVaca',
                             'ge.genero AS becerro_genero','ge.id AS generoBecerro','partos.id')
                    ->paginate($per_page);
        return response()->json($parto);
        return view('Parto');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $parto = new Parto();

        $parto->id = $request->id;
        $parto->idBecerro = $request->idBecerro;
        $parto->idVaca = $request->idVaca;
        $parto->imgBecerro = $request->imgBecerro;
        $parto->imgVaca = $request->imgVaca;
        $parto->razaBecerro = $request->razaBecerro;
        $parto->razaVaca = $request->razaVaca;
        $parto->fecha = $request->fecha;
        $parto->generoBecerro = $request->generoBecerro;

        $parto->save();
        return response()->json(["message"=>"Registro Exitoso"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Parto  $parto
     * @return \Illuminate\Http\Response
     */
    public function show(Parto $parto)
    {
        return response()->json($parto);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Parto  $parto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Parto $parto)
    {
        $parto->fill($request->post())->save();
        return response()->json([
            'parto'=>$parto
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Parto  $parto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Parto $parto)
    {
        //
    }
}
