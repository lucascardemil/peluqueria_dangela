<?php

use Faker\Generator as Faker;

$factory->define(App\Profession::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'date' => $faker->date,
        'percentage' => $faker->numberBetween($min = 10, $max = 50),
    ];
});
