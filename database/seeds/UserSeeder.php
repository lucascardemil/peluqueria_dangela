<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Payment;
use App\Sucursal;
use Caffeinated\Shinobi\Models\Role;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $edgar = User::create([
            'profession_id' => 1,
            'rut' => '17.722.517-7',
            'name' => 'Edgard Vilo',
            'email' => 'thevilos@gmail.com',
            'address' => 0,
            'phone' => 0,
            'birthdate' => 0,
            'sex' => 0,
            'civil' => 0,
            'children' => 0,
            'barcode' => 'DANGELA000',
            'score' => 0,
            'password' => bcrypt('dangelaapp2018'), // secret
            'remember_token' => str_random(10),
        ]);

        $edgar->assignRole('admin');

        //factory(User::class, 50)->create();

        Sucursal::create([
            'name' => 'El LLano'
        ]);

        Sucursal::create([
            'name' => 'La Cantera'
        ]);

        Payment::create([
            'name' => 'Efectivo',
        ]);

        Payment::create([
            'name' => 'Débito',
        ]);

        Payment::create([
            'name' => 'Crédito',
        ]);
    }
}
