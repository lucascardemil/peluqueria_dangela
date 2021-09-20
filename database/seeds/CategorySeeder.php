<?php

use App\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //factory(Category::class, 50)->create();
        Category::create([
            'name' => 'DEPILACIÓN CERA',
        ]);

        Category::create([
            'name' => 'FOTODEPILACIÓN (I.P.L)',
        ]);

        Category::create([
            'name' => 'DEPILACIÓN ROLL-ON',
        ]);

        Category::create([
            'name' => 'MANICURE & PEDICURE',
        ]);

        Category::create([
            'name' => 'COSMETOLOGÍA',
        ]);

        Category::create([
            'name' => 'PELUQUERÍA',
        ]);

        Category::create([
            'name' => 'ESTÉTICA INTEGRAL',
        ]);

        Category::create([
            'name' => 'KINESIOLOGÍA Y REHABILITACIÓN',
        ]);

        Category::create([
            'name' => 'NUTRICIÓN (NUEVO SERVICIO)',
        ]);
    }
}
