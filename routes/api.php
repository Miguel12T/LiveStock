<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource('razas', \App\Http\Controllers\RazaController::class);
Route::apiResource('vacas', \App\Http\Controllers\VacaController::class);
Route::apiResource('becerros', \App\Http\Controllers\BecerroController::class);
Route::apiResource('generos', \App\Http\Controllers\GeneroController::class);
Route::apiResource('tipos', \App\Http\Controllers\TipoController::class);
Route::apiResource('novillas', \App\Http\Controllers\NovillaController::class);
Route::apiResource('partos', \App\Http\Controllers\PartoController::class);
Route::apiResource('botellas', \App\Http\Controllers\BotellaController::class);
Route::apiResource('fallecidas', \App\Http\Controllers\FallecidaController::class);
Route::apiResource('novedades', \App\Http\Controllers\NovedadController::class);
