<?php

namespace App\Models;

use Illuminate\Support\Arr;

class Post
{
    public static function all()
    {
        return [
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
            ]
        ];
    }

    public static function find($sluq): array
    {

        // return Arr::first(static::all(), function ($post) use ($sluq) {
        //     return $post['sluq'] == $sluq;
        // });

        $post = Arr::first(static::all(), fn($post) => $post['sluq'] == $sluq) ?? abort(404);
        // if (!$post) {
        //     abort(404);
        // }
        return $post;
    }
}
