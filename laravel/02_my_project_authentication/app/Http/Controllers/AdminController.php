<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Post;
use App\Models\Category;
use App\Models\User;
use App\Models\Image;

class AdminController extends Controller
{
    public function index(Request $req) {
        return view('admin.admin', ['page_title' => 'Dashboard']);
    }
}
