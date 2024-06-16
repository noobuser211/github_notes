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
    <form method="POST" action="/players" class="form">
        @csrf
        <div class="input_field">
            <label for="name">
                Player Name
            </label>
            <input
                type="text"
                name="playerName"
                value="{{old('playerName')}}"
            />

            @error('name')
                <p>{{$message}}</p>
            @enderror
        </div>

        <div class="input_field">
            <label for="email"    
            >
            Team
            </label>
            <input
                type="text"
                name="team"
                value="{{old('team')}}"
            />

            @error('email')
                <p>{{$message}}</p>
            @enderror
        </div>

        <div class="input_field">
            <label
                for="password"
            >
                Amount
            </label>
            <input
                type="text"
                name="amount"
                value="{{old('amount')}}"
            />

            @error('password')
                <p>{{$message}}</p>
            @enderror
        </div>

        <div class="input_field">
            <button
                type="submit"
            >
                Add Player
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
</body>
</html>