<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\User;

class UserController extends Controller
{
    public function register() {
        return view('users.register');
    }

    public function login() {
        return view('users.login');
    }

    public function store(Request $request) {
        // dd($request);

        $formFields = $request->validate([
            'name' => ['required', 'min:3'],
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'password' => 'required|confirmed|min:6'
        ]);

        $formFields['password'] = bcrypt($formFields['password']);

        // Creates user
        // $user = User::create($formFields);

        // Login
        // auth()->login($user);

        // return redirect('/')->with('message', 'User created and logged in.');
        return view('users.register', [
            'listing' => $request->all()
        ]);
    }

    public function authenticate(Request $request) {
        $formFields = $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required'
        ]);

        if (auth()->attempt($formFields)) {
            $request->session()->regenerate();

            return redirect('/')->with('message', 'You are now logged in!');
        }

        return back()->withErrors(['email' => 'Invalid Credentials!'])->onlyInput('email');
    }
}
