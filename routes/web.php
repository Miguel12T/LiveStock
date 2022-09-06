<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/raza', [App\Http\Controllers\HomeController::class, 'index'])->name('raza');
Route::get('/vaca', [App\Http\Controllers\HomeController::class, 'index'])->name('vaca');
Route::get('/becerro', [App\Http\Controllers\HomeController::class, 'index'])->name('becerro');
Route::get('/tipo', [App\Http\Controllers\HomeController::class, 'index'])->name('tipo');
Route::get('/novilla', [App\Http\Controllers\HomeController::class, 'index'])->name('novilla');
Route::get('/parto', [App\Http\Controllers\HomeController::class, 'index'])->name('parto');
Route::get('/botella', [App\Http\Controllers\HomeController::class, 'index'])->name('botella');
Route::get('/fallecida', [App\Http\Controllers\HomeController::class, 'index'])->name('fallecida');
Route::get('/novedad', [App\Http\Controllers\HomeController::class, 'index'])->name('novedad');


/* Route::middleware(['auth:sanctum','verified'])->get('/app', function (){
    return view('app');
})->name('app'); */