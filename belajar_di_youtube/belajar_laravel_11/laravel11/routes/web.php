<?php

use App\Models\Post;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view("home", ['title' => 'Home Page']);
});

Route::get('/about', function () {
    return view('about', ['nama' => 'Amirul Mirdas'], ['title' => 'About Page']);
});

Route::get('/posts', function () {
    return view('posts', ['title' => 'Blog Page', 'posts' => Post::all()]);
});

ROute::get('/posts/{sluq}', function ($sluq) {
    $post = Post::find($sluq);
    return view('post', ['title' => 'Single Post', 'post' => $post]);
});

Route::get('/contact', function () { // buat di dalam folder views dengan nama file contact.blade.php 
    return view('contact', ['title' => 'Contact Page']);
});
