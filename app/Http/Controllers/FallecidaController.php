<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Becerro;
use App\Models\Novilla;
use App\Models\Vaca;

class FallecidaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request  $request)
    {
        $per_page = $request->per_page;

        $becerros = Becerro::join('razas AS ra','ra.id','becerros.id_raza')
            ->join('generos AS gen', 'gen.id', '=', 'becerros.idgenero')
            ->join('tipos AS ti', 'ti.id','becerros.idtipo')
            ->select('ra.raza','ra.id AS id_raza','becerros.id','becerros.nombre','gen.genero','gen.id AS idgenero','ti.tipo','ti.id AS idtipo','becerros.fecha_nacimiento','becerros.imagen','becerros.crecimiento','becerros.fallecida','becerros.vendido')
            ->where('becerros.fallecida', '2')->paginate($per_page);

        $novillas = Novilla::join('razas AS ra','ra.id','novillas.id_raza')
            ->join('generos AS ge','ge.id','novillas.idgenero')
            ->join('tipos AS ti','ti.id','novillas.idtipo')
            ->select('ra.raza','ra.id AS id_raza','ge.genero','ge.id AS idgenero','ti.tipo','ti.id AS idtipo','novillas.id','novillas.nombre','novillas.imagen','novillas.crecimiento','novillas.fallecida')
            ->where('novillas.fallecida','2')->paginate($per_page); 

        $vacas = Vaca::join('razas AS ra', 'ra.id', 'vacas.id_raza')
            ->join('generos AS ge', 'ge.id', '=', 'vacas.idgenero')
            ->join('tipos AS ti','ti.id','=','vacas.idtipo')
            ->select('ra.raza', 'ra.id AS id_raza','ge.genero','ge.id AS idgenero','ti.tipo','ti.id AS idtipo', 'vacas.id', 'vacas.nombre','vacas.imagen','vacas.fallecida')
            ->where('fallecida','2')->paginate($per_page);
            
        return response()->json([$becerros,$novillas,$vacas]);
        return view('Fallecida');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
