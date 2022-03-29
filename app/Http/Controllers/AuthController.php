<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Testing\Fluent\Concerns\Has;
use App\Models\User;
use Hash;


class AuthController extends Controller
{

    public function list()
    {

        $user = User::all();
        return response()->json($user, 200);
    }
    public function Register(Request $request)
    {

        $data= $request->validate(
            [
                'name' =>'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required',

            ]
        );

 /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function Login(Request $request)
    {
        $handel = $request->validate([
            'email' => 'required|email||exists:users,email',
            'password' =>'required',
            'remember' =>'boolean'

        ]);
        $remember = $handel['remember']?? false;
        unset($handel['remember']);
        if( !Auth::attempt($handel,$remember))
        {
            return response([
                'error' => 'The email or password dose not exist',
            ],403);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);


    }

    public function logout(){
        $user = Auth::user();
        $user->currentAccessToken()->delete();
        return response('Success');
    }

    public function delete($id)
    {
        $user = User::findOrfail($id);
        $user->delete();
        return response()->json($user, 200);
    }
}
