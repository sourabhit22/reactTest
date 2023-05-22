<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsersApiController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\ExampleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('registration',[UsersApiController::class,'create']);
Route::post('registration_get',[UsersApiController::class,'index']);
Route::post('login',[UsersApiController::class,'login']);
Route::post('user_detail',[UsersApiController::class,'userDetail']);

// --

Route::post('show_question',[ApiController::class,'show']);
Route::post('question_submit',[ApiController::class,'testSubmit']);

Route::post('react_user',[ExampleController::class,'testReact']);