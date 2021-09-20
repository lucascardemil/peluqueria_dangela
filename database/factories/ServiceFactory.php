<?php

use Faker\Generator as Faker;

$factory->define(App\Service::class, function (Faker $faker) {
    return [
        'category_id' => App\Category::all()->random()->id,
        'name' => $faker->name,
        'score_exchange' => $faker->numberBetween($min = 150, $max = 1500),
        'score_accumulated' => $faker->numberBetween($min = 15, $max = 80),
        'price' => $faker->numberBetween($min = 10000, $max = 100000),
    ];
});
