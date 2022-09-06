<?php

namespace App\Http\Controllers;

use App\Models\Becerro;
use App\Models\Raza;
use App\Models\Genero;
use Illuminate\Http\Request;

class BecerroController extends Controller
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
    public function index(Request  $request)
    {
        $per_page = $request->per_page;
        $becerros = Becerro::join('razas AS ra','ra.id','becerros.id_raza')
                            ->join('generos AS ge', 'ge.id', '=', 'becerros.idgenero')
                            ->join('tipos AS ti', 'ti.id','becerros.idtipo')
                            ->select('ra.raza','ra.id AS id_raza','becerros.id','becerros.nombre','ge.genero','ge.id AS idgenero','ti.tipo','ti.id AS idtipo','becerros.fecha_nacimiento','becerros.imagen','becerros.crecimiento','becerros.fallecida','becerros.vendido')
                            ->whereColumn([
                                ['crecimiento', '=', 'fallecida'],
                                ['vendido', '=', 'fallecida'],
                            ])->paginate($per_page);
        return response()->json($becerros);
        return view('Becerro');
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
            'imagen' => 'required'
        ]);

        $becerro = new Becerro();

        $becerro->id = $request->id;
        $becerro->id_raza = $request->id_raza;
        $becerro->nombre = ucfirst($request->nombre);
        $becerro->fecha_nacimiento = $request->fecha_nacimiento;
        $becerro->idgenero = $request->idgenero;
        $becerro->idtipo = $request->idtipo;
        $becerro->valor_Vendido = $request->valor_Vendido;
        //$vaca->imagen = $request->imagen;
        
        if ($imagen = $request->file('imagen')) {
            $rutaGuardarImg = 'imagen/';
            $imagenProducto = date('YmdHis'). "." . $imagen->getClientOriginalExtension();
            $imagen->move($rutaGuardarImg, $imagenProducto);
            $becerro['imagen'] = "$imagenProducto";
        }
        
        $becerro->save();
        return response()->json(["message"=>"Registro Exitoso"]); 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Becerro  $becerro
     * @return \Illuminate\Http\Response
     */
    public function show(Becerro $becerro)
    {
        return response()->json($becerro);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Becerro  $becerro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Becerro $becerro)
    {
        $bece = $request->all();
        
        if ($imagen = $request->file('imagen')) {
            $rutaGuardarImg = 'imagen/';
            $imagenProducto = date('Y-m-d-H-i-s'). "." . $imagen->getClientOriginalExtension();
            $imagen->move($rutaGuardarImg, $imagenProducto);
            $bece['imagen'] = "$imagenProducto";
        }else{
            unset($bece['imagen']); //eliminamos la variable
        }

        $becerro->update($bece);
        return response()->json(["message"=>"Registro Exitoso"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Becerro  $becerro
     * @return \Illuminate\Http\Response
     */
    public function destroy(Becerro $becerro)
    {
        $becerro->delete();
    }
}
