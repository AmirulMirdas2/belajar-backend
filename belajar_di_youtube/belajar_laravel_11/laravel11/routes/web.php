<?php

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view("home", ['title' => 'Home Page']);
});

Route::get('/about', function () {
    return view('about', ['nama' => 'Amirul Mirdas'], ['title' => 'About Page']);
});

Route::get('/posts', function () {
    return view('posts', ['title' => 'Blog Page', 'posts' => [
        [
            'id' => 1,
            'sluq' => 'judul-artikel-1',
            'title' => 'Judul Artikel 1',
            'author' => 'Amirul Mirdas',
            'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, adipisci? Dolorum consequuntur saepe tenetur eaque sequi repellat voluptate hic, nisi amet est rem a facere tempora debitis repudiandae tempore voluptatem?'
        ],
        [
            'id' => 2,
            'sluq' => 'judul-artikel-2',
            'title' => 'Judul Artikel 2',
            'author' => 'Amirul Mirdas',
            'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, porro quam magnam consequatur exercitationem repellat nostrum! Aperiam inventore itaque distinctio iusto accusantium doloribus labore, dolorem, exercitationem quia minima, enim nihil.'
        ],
    ]]);
});

ROute::get('/posts/{sluq}', function ($sluq) {
    $posts = [
        [
            'id' => 1,
            'sluq' => 'judul-artikel-1',
            'title' => 'Judul Artikel 1',
            'author' => 'Amirul Mirdas',
            'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, adipisci? Dolorum consequuntur saepe tenetur eaque sequi repellat voluptate hic, nisi amet est rem a facere tempora debitis repudiandae tempore voluptatem?'
        ],
        [
            'id' => 2,
            'sluq' => 'judul-artikel-2',
            'title' => 'Judul Artikel 2',
            'author' => 'Amirul Mirdas',
            'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, porro quam magnam consequatur exercitationem repellat nostrum! Aperiam inventore itaque distinctio iusto accusantium doloribus labore, dolorem, exercitationem quia minima, enim nihil.'
        ],

    ];

    $post = Arr::first($posts, function ($post) use ($sluq) {
        return $post['sluq'] == $sluq;
    });
    return view('post', ['title' => 'Single Post', 'post' => $post]);
});

Route::get('/contact', function () { // buat di dalam folder views dengan nama file contact.blade.php 
    return view('contact', ['title' => 'Contact Page']);
});
