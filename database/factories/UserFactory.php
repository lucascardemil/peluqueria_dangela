<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'profession_id' => App\Profession::all()->random()->id,
        'rut' => $faker->unique()->numberBetween($min = 10000, $max = 9999999),
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'address' => $faker->address,
        'phone' => $faker->e164PhoneNumber,
        'birthdate' => $faker->date,
        'sex' => $faker->numberBetween($min = 0, $max = 1),
        'civil' => $faker->numberBetween($min = 0, $max = 3),
        'children' => $faker->numberBetween($min = 0, $max = 3),
        'barcode' => $faker->isbn13,
        'score' => $faker->numberBetween($min = 0, $max = 10000),
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
    ];
});
