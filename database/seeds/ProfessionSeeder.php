<?php

use Illuminate\Database\Seeder;
use App\Profession;

class ProfessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Profession::create([
            'name' => 'Test',
            'date' => date('2015/08/09'),
            'percentage' => 10,
        ]);

        Profession::create([
            'name' => 'Brigadista Forestal',
            'date' => date('2015/02/15'),
            'percentage' => 10,
        ]);

        Profession::create([
            'name' => 'Papelero(a)',
            'date' => date('2015/03/12'),
            'percentage' => 10,
        ]);

        Profession::create([
            'name' => 'Obrero(a) Constructor(a)',
            'date' => date('2015/03/19'),
            'percentage' => 10,
        ]);

        Profession::create([
            'name' => 'Locutor(a)',
            'date' => date('2015/04/14'),
            'percentage' => 10,
        ]);

        Profession::create([
            'name' => 'Cocinero(a)',
            'date' => date('2015/04/15'),
            'percentage' => 10,
        ]);

        Profession::create([
            'name' => 'Emprendedor(a)',
            'date' => date('2015/04/29'),
            'percentage' => 10,
        ]);

        Profession::create([
            'name' => 'Dentista',
            'date' => date('2015/05/06'),
            'percentage' => 10,
        ]);

        Profession::create([
            'name' => 'Teatro',
            'date' => date('2015/05/11'),
            'percentage' => 10,
        ]);

        Profession::create([
            'name' => 'Ingeniería',
            'date' => date('2015/05/15'),
            'percentage' => 10,
        ]);

        Profession::create([
            'name' => 'Profesor(a)',
            'date' => date('2015/10/16'),
            'percentage' => 10,
        ]);

        //factory(Profession::class, 50)->create();
    }
}
