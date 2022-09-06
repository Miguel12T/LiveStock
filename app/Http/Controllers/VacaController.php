<?php

namespace App\Http\Controllers;

use App\Models\Vaca;
use App\Models\Raza;
use App\Models\Genero;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;

class VacaController extends Controller
{
    /* public function __construct()
    {
        $this->middleware('auth');
    } */
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request  $request)
    {
       
        $per_page = $request->per_page;
        $vacas = Vaca::join('razas AS ra', 'ra.id', 'vacas.id_raza')
                    ->join('generos AS ge', 'ge.id', '=', 'vacas.idgenero')
                    ->join('tipos AS ti','ti.id','=','vacas.idtipo')
                    ->select('ra.raza', 'ra.id AS id_raza','ge.genero','ge.id AS idgenero','ti.tipo','ti.id AS idtipo', 'vacas.id', 'vacas.nombre','vacas.imagen','vacas.fallecida')
                    ->whereColumn([
                        ['vendido', '=', 'fallecida'],
                    ])->paginate($per_page);
        return response()->json($vacas);
        return view('Vaca');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //return $request->file('imagen');
        $request->validate([
            'imagen' => 'required'
        ]);

        $vaca = new Vaca;

        $vaca->id = $request->id;
        $vaca->id_raza = $request->id_raza;
        $vaca->nombre = ucfirst($request->nombre);
        $vaca->idgenero = $request->idgenero;
        $vaca->idtipo = $request->idtipo;
        $vaca->valor_Vendido = $request->valor_Vendido;
        //$vaca->imagen = $request->imagen;
        
        if ($imagen = $request->file('imagen')) {
            $rutaGuardarImg = 'imagen/';
            $imagenProducto = date('YmdHis'). "." . $imagen->getClientOriginalExtension();
            $imagen->move($rutaGuardarImg, $imagenProducto);
            $vaca['imagen'] = "$imagenProducto";
        }
        
        $vaca->save();
        return response()->json(["message"=>"Registro Exitoso"]); 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vaca  $vaca
     * @return \Illuminate\Http\Response
     */
    public function show(Vaca $vaca)
    {
        return response()->json($vaca);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vaca  $vaca
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vaca $vaca)
    {
        $res = $request->all();
        
        if ($imagen = $request->file('imagen')) {
            $rutaGuardarImg = 'imagen/';
            $imagenProducto = date('Y-m-d-H-i-s'). "." . $imagen->getClientOriginalExtension();
            $imagen->move($rutaGuardarImg, $imagenProducto);
            $res['imagen'] = "$imagenProducto";
        }else{
            unset($res['imagen']); //eliminamos la variable
        }

        $vaca->update($res);
        print_r($vaca);
        return response()->json(["message"=>"Registro Exitoso"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vaca  $vaca
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vaca $vaca)
    {
        $vaca->delete();
    }
}
