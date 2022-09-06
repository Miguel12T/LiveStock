<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Becerro extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_raza',
        'nombre',
        'idgenero',
        'fecha_nacimiento',
        'imagen',
        'fallecida',
        'vendido',
        'crecimiento',
        'idtipo',
        'valor_Vendido',
    ];
}
