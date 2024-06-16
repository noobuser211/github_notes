<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Models\Players;

class PlayerController extends Controller
{
    public function list_players() {
        $query = "SELECT * FROM players";
        $rows = DB::select($query);

        return view('players.list_players', [
            'page_title' => 'List of Players',
            'rows' => $rows,
        ]);
    }

    public function add_player() {
        return view('players.add_player');
    }

    public function post_players(Request $request) {
        // dd($request);

        $formFields = $request->validate([
            'playerName' => ['required'],
            'team' => ['required'],
            'amount' => 'required'
        ]);

        // print_r($request->all());

        $player = Players::create($formFields);

        return view('players.add_player');
    }
}
