<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    <title>Register</title>
</head>
<body>
    <form method="POST" action="/users" class="form">
        @csrf
        <div class="input_field">
            <label for="name">
                Name
            </label>
            <input
                type="text"
                name="name"
                value="{{old('name')}}"
            />

            @error('name')
                <p>{{$message}}</p>
            @enderror
        </div>

        <div class="input_field">
            <label for="email"    
            >
            Email
            </label>
            <input
                type="email"
                name="email"
                value="{{old('email')}}"
            />

            @error('email')
                <p>{{$message}}</p>
            @enderror
        </div>

        <div class="input_field">
            <label
                for="password"
            >
                Password
            </label>
            <input
                type="password"
                name="password"
                value="{{old('password')}}"
            />

            @error('password')
                <p>{{$message}}</p>
            @enderror
        </div>

        <div class="input_field">
            <label
                for="password2"
            >
                Confirm Password
            </label>
            <input
                type="password"
                name="password_confirmation"
                value="{{old('password_confirmation')}}"
            />

            @error('password_confirmation')
                <p>{{$message}}</p>
            @enderror
        </div>

        <div class="input_field">
            <button
                type="submit"
            >
                Sign Up
            </button>
        </div>

        <div class="input_field">
            <p>
                Already have an account?
                <a href="/login"
                >
                    Login
                </a>
            </p>
        </div>
    </form>

    @foreach($listing ?? '' as $list)
        <a href="#">$list</a>
    @endforeach
</body>
</html>