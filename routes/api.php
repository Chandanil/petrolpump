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


Route::get('customers',[App\Http\Controllers\Api\CustomerController::class,'index']);
Route::get('piechartData',[App\Http\Controllers\Api\CustomerController::class,'piechartData']);
Route::get('infoData',[App\Http\Controllers\Api\CustomerController::class,'infoData']);