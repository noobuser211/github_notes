<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Image;

class HomeController extends Controller
{
    public function index(Request $req) {
        $query = "select posts.*, categories.category from posts join categories on posts.category_id = categories.id";
        $img = new Image();
        
        $rows = DB::select($query);

        foreach ($rows as $key => $row) {
            $rows[$key]->image = $img->get_thumb_profile('uploads/' . $row->image);
            // echo $row->image;
        }

        $query = "SELECT * FROM categories ORDER BY id DESC";
        $categories = DB::SELECT($query);

        $data['rows'] = $rows;
        $data['categories'] = $categories;
        $data['page_title'] = 'Home';

        return view('index', $data);
    }
}
