<?php

use App\Personal;
use Illuminate\Database\Seeder;

class PersonalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Personal::create([
            'name' => 'Juan Perez',
        ]);
        factory(Personal::class, 25)->create();
    }
}
