<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //admin
        Permission::create(['name' => 'inicio']);
        Permission::create(['name' => 'categorias']);
        Permission::create(['name' => 'servicios']);
        Permission::create(['name' => 'promociones']);
        Permission::create(['name' => 'session-voucher']);
        Permission::create(['name' => 'personales']);
        Permission::create(['name' => 'empresas']);
        Permission::create(['name' => 'profesiones']);
        Permission::create(['name' => 'clientes']);
        Permission::create(['name' => 'usuarios']);
        Permission::create(['name' => 'role']);
        Permission::create(['name' => 'usuarios-roles']);
        Permission::create(['name' => 'detail-user']);
        Permission::create(['name' => 'sistema-post']);
        Permission::create(['name' => 'buscar-voucher']);

        //client
        Permission::create(['name' => 'mis-puntos']);
        Permission::create(['name' => 'canje-puntos']);
    }
}
