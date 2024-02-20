<?php

use App\Http\Controllers\API\V1\CategoryController;
use App\Http\Controllers\API\V1\LoginRegistrationController;
use App\Http\Controllers\API\V1\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource("products", ProductController::class)->only(["index", "show"]);
Route::resource("categories", CategoryController::class)->only(["index", "show"]);


Route::get("login", [LoginRegistrationController::class, "login"]);
Route::post("login", [LoginRegistrationController::class, "login"]);
//Route::get("registration", [LoginRegistrationController::class, "register"]);
Route::post("register", [LoginRegistrationController::class, "register"]);
Route::get("logout", [LoginRegistrationController::class, "logout"]);
Route::post("logout", [LoginRegistrationController::class, "logoutPost"]);


Route::get("test", function (Request $request) {
    dd(auth()->user());
    return response()->json(["status" => "ok"], 200);
})->middleware("auth:sanctum");
