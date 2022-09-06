<?php

namespace App\Http\Controllers;

use App\Models\Novilla;
use Illuminate\Http\Request;

class NovillaController extends Controller
{
   /*  public function __construct()
    {
        $this->middleware('auth');
    } */
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_page = $request->per_page;
        $novillas = Novilla::join('razas AS ra','ra.id','novillas.id_raza')
                        ->join('generos AS ge','ge.id','novillas.idgenero')
                        ->join('tipos AS ti','ti.id','novillas.idtipo')
                        ->select('ra.raza','ra.id AS id_raza','ge.genero','ge.id AS idgenero','ti.tipo','ti.id AS idtipo','novillas.id','novillas.nombre','novillas.imagen','novillas.crecimiento','novillas.fallecida')
                        ->whereColumn([
                            ['crecimiento','fallecida'],
                            ['vendido','fallecida'],
                        ])->paginate($per_page);
        return response()->json($novillas);                
        return view('Novilla');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'imagen'=>'required'
        ]);

        $novilla = new Novilla();

        $novilla->id = $request->id;
        $novilla->nombre = $request->nombre;
        $novilla->id_raza = $request->id_raza;
        $novilla->idtipo = $request->idtipo;
        $novilla->idgenero = $request->idgenero;
        $novilla->valor_Vendido = $request->valor_Vendido;

        if ($imagen = $request->file('imagen')) {
            $rutaGuardarImg = 'imagen/';
            $imagenProducto = date('YmdHis'). "." . $imagen->getClientOriginalExtension();
            $imagen->move($rutaGuardarImg, $imagenProducto);
            $novilla['imagen'] = "$imagenProducto";
        }
        
        $novilla->save();
        return response()->json(["message"=>"Registro Exitoso"]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Novilla  $novilla
     * @return \Illuminate\Http\Response
     */
    public function show(Novilla $novilla)
    {
        return response()->json($novilla);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Novilla  $novilla
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Novilla $novilla)
    {
        $novi = $request->all();
        
        if ($imagen = $request->file('imagen')) {
            $rutaGuardarImg = 'imagen/';
            $imagenProducto = date('Y-m-d-H-i-s'). "." . $imagen->getClientOriginalExtension();
            $imagen->move($rutaGuardarImg, $imagenProducto);
            $novi['imagen'] = "$imagenProducto";
        }else{
            unset($novi['imagen']); //eliminamos la variable
        }

        $novilla->update($novi);
        return response()->json(["message"=>"Registro Exitoso"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Novilla  $novilla
     * @return \Illuminate\Http\Response
     */
    public function destroy(Novilla $novilla)
    {
        //
    }
}
