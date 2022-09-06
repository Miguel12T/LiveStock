<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vaca extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_raza',
        'nombre',
        'idgenero',
        'imagen',
        'fallecida',
        'vendido',
        'valor_Vendido',
        'idtipo'
    ];
}
