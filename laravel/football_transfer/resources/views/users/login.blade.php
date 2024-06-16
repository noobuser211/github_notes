<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    <title>Login</title>
</head>
<body>
    <form method="POST" action="/users/authenticate" class="form">
        @csrf
        <div class="input_field">
            <label for="email"
                >Email</label
            >
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
                value='{{old("password")}}'
            />

            @error('password')
                <p>{{$message}}</p>
            @enderror
        </div>

        <div>
            @error('password_confirmation')
                <p>{{$message}}</p>
            @enderror
        </div>

        <div class="input_field">
            <button
                type="submit"
            >
                Sign In
            </button>
        </div>

        <div>
            <p>
                Don't have an account?
                <a href="/register" class="input_field"
                    >Register</a
                >
            </p>
        </div>
    </form>
</body>
</html>