<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class PermissionRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = Role::findByName('admin');
        $role->givePermissionTo('inicio');
        $role->givePermissionTo('categorias');
        $role->givePermissionTo('servicios');
        $role->givePermissionTo('promociones');
        $role->givePermissionTo('session-voucher');
        $role->givePermissionTo('personales');
        $role->givePermissionTo('empresas');
        $role->givePermissionTo('profesiones');
        $role->givePermissionTo('clientes');
        $role->givePermissionTo('usuarios');
        $role->givePermissionTo('role');
        $role->givePermissionTo('usuarios-roles');
        $role->givePermissionTo('detail-user');
        $role->givePermissionTo('sistema-post');
        $role->givePermissionTo('buscar-voucher');


        $role = Role::findByName('client');
        $role->givePermissionTo('mis-puntos');
        $role->givePermissionTo('canje-puntos');
    }
}
