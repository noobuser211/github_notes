<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/css/register.css" rel="stylesheet">

    <title>{{ $page_title }}</title>
</head>
<body>
    <h1>List of Players</h1>
    <table class="table table-striped table-hover">
        <thead>
            <tr><th>ID</th><th>Player Name</th><th>Team</th><th>Amount</th><th>Created</th><th>Updated</th></tr>
        </thead>
        <tbody>
        
            @if($rows)
                @foreach($rows as $row)
                    <tr>
                        <td>{{$row->id}}</td>
                        <td>{{$row->playerName}}</td>
                        <td>{{$row->team}}</td>
                        <td>{{$row->amount}}</td>
                        <td>{{$row->created_at}}</td>
                        <td>{{$row->updated_at}}</td>
                    </tr>

                @endforeach
            @endif
        
        </tbody>
    </table>
    <br>
    <br>
    <br>
</body>
</html>