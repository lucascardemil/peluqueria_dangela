<?php

use App\Service;
use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PersonalSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(ProfessionSeeder::class);
        $this->call(PermissionSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(ServiceSeeder::class);

        $cantidadServicios= 5;

        /*factory(Service::class, $cantidadServicios)->create()->each(
            function($servicio){
                $usuarios = User::all()->random()->id;
                $servicio->users()->attach($usuarios);
            }
        );*/

        //$this->call(UserServiceSeeder::class);

    }
}
