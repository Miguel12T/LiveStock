<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Novedad extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'foto',
        'raza',
        'genero',
        'tipo',
        'novedad'
    ];
}
