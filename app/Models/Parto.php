<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parto extends Model
{
    use HasFactory;
    protected $fillable = [
        'idBecerro',
        'imgBecerro',
        'fecha',
        'razaBecerro',
        'generoBecerro',
        'idVaca',
        'imgVaca',
        'razaVaca',
    ];
}
