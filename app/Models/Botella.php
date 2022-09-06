<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Botella extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'bts_diarias',
        'precio',
        'sum_botellas',
        'fecha'
    ];
}
