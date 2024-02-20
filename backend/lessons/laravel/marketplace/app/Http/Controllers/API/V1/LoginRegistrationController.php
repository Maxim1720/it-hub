<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Responses\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginRegistrationController extends Controller
{
    use ApiResponse;

    public function login(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            "email" => "required|email",
            "password" => "required|min:8"
        ]);

        if ($validator->fails()) {
            return $this->errorResponse("validation failed", $validator->errors()->toArray());
        }
        $user = User::query()->where("email", $request->get("email"))->first();
        $errorResponse = $this->errorResponse("Incorrect password or email");


        try {
            if (!$user || !Hash::check($request->get("password"), $user->getAttribute("password"))) {
                return $errorResponse;
            }
        } catch (\RuntimeException $e) {
            return $errorResponse;
        }


        return $this->successResponse("User logged", ["token" => $user->createToken(
            $request->get("email"), ["*"],
            now()->addWeek())->plainTextToken, "user" => $user]);
    }

    public function register(Request $request): JsonResponse
    {
        $validator = Validator::make($request->only(["name", "email", "password"]), [
            "email" => "required|email|string|unique:users",
            "password" => "required|min:8|string",
            "name" => "required|string"
        ]);

        if ($validator->fails()) {
            return $this->errorResponse("Validation error", $validator->errors()->toArray());
        }

        User::query()->create([
            "email" => $request->get("email"),
            "password" => $request->get("password"),
            "name" => $request->get("name")
        ]);
        return $this->successResponse();
    }

    public function logout()
    {
        dd("test logout get");
    }
}
