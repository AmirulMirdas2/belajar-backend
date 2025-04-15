<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view("home");
});

Route::get('/about', function () {
    return view('about', ['nama' => 'Amirul Mirdas']);
});

Route::get('/blog', function () {
    return view('blog');
});

Route::get('/contact', function () { // buat di dalam folder views dengan nama file contact.blade.php 
    return view('contact');
});
