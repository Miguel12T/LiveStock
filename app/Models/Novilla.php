<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Novilla extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_raza',
        'nombre',
        'imagen',
        'idgenero',
        'idtipo',
        'valor_Vendido',
        'vendido',
        'crecimiento',
        'fallecida',
    ];
}
