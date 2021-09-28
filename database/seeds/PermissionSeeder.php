<?php

use Illuminate\Database\Seeder;
use Caffeinated\Shinobi\Models\Permission;
use Caffeinated\Shinobi\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Permisos profesiones
        Permission::create([
            'name'          => 'Visualizar profesiones',
            'slug'          => 'profesiones',
            'description'   => 'Permiso para acceder a la lista de profesiones',
        ]);

        Permission::create([
            'name'          => 'Visualizar profesiones',
            'slug'          => 'professions.index',
            'description'   => 'Permiso para acceder a la lista de profesiones',
        ]);

        Permission::create([
            'name'          => 'Crear Profesiones',
            'slug'          => 'professions.store',
            'description'   => 'Permiso para acceder a la creación de profesiones',
        ]);

        Permission::create([
            'name'          => 'Editar Profesiones',
            'slug'          => 'professions.update',
            'description'   => 'Permiso para acceder a la actualización de una profesión',
        ]);

        Permission::create([
            'name'          => 'Eliminar Profesiones',
            'slug'          => 'professions.destroy',
            'description'   => 'Permiso para acceder a la eliminación de una profesión',
        ]);

        //Permisos Usuarios
        Permission::create([
            'name'          => 'Visualizar Usuarios',
            'slug'          => 'usuarios',
            'description'   => 'Permiso para acceder a la lista de usuarios',
        ]);

        Permission::create([
            'name'          => 'Visualizar Usuarios',
            'slug'          => 'users.index',
            'description'   => 'Permiso para acceder a la lista de usuarios',
        ]);

        Permission::create([
            'name'          => 'Crear Usuarios',
            'slug'          => 'users.store',
            'description'   => 'Permiso para acceder a la creación de usuarios',
        ]);

        Permission::create([
            'name'          => 'Editar Usuarios',
            'slug'          => 'users.update',
            'description'   => 'Permiso para acceder a la actualización de un usuario',
        ]);

        Permission::create([
            'name'          => 'Eliminar Usuarios',
            'slug'          => 'users.destroy',
            'description'   => 'Permiso para acceder a la eliminación de un usuario',
        ]);

        //Permisos Clientes
        Permission::create([
            'name'          => 'Visualizar Clientes',
            'slug'          => 'clientes',
            'description'   => 'Permiso para acceder a la lista de clientes',
        ]);

        Permission::create([
            'name'          => 'Visualizar Clientes',
            'slug'          => 'clients.index',
            'description'   => 'Permiso para acceder a la lista de clientes',
        ]);

        Permission::create([
            'name'          => 'Crear Clientes',
            'slug'          => 'clients.store',
            'description'   => 'Permiso para acceder a la creación de clientes',
        ]);

        Permission::create([
            'name'          => 'Editar Clientes',
            'slug'          => 'clients.update',
            'description'   => 'Permiso para acceder a la actualización de un cliente',
        ]);

        Permission::create([
            'name'          => 'Eliminar Clientes',
            'slug'          => 'clients.destroy',
            'description'   => 'Permiso para acceder a la eliminación de un cliente',
        ]);

        //Permisos Servicios
        Permission::create([
            'name'          => 'Visualizar Servicios',
            'slug'          => 'servicios',
            'description'   => 'Permiso para acceder a la lista de servicios',
        ]);

        Permission::create([
            'name'          => 'Visualizar Servicios',
            'slug'          => 'services.index',
            'description'   => 'Permiso para acceder a la lista de servicios',
        ]);

        Permission::create([
            'name'          => 'Crear Servicios',
            'slug'          => 'services.store',
            'description'   => 'Permiso para acceder a la creación de un servicio',
        ]);

        Permission::create([
            'name'          => 'Editar Servicios',
            'slug'          => 'services.update',
            'description'   => 'Permiso para acceder a la actualización de un servicio',
        ]);

        Permission::create([
            'name'          => 'Eliminar Servicios',
            'slug'          => 'services.destroy',
            'description'   => 'Permiso para acceder a la eliminación de un servicio',
        ]);

        //Permisos detalle usuario
        Permission::create([
            'name'          => 'Administras puntaje de servicios a los usuarios',
            'slug'          => 'score.admin',
            'description'   => 'Permiso para acceder a la administración de usuarios y puntaje',
        ]);

        //Permisos Clientes Pos
        Permission::create([
            'name'          => 'Visualizar Clientes POS',
            'slug'          => 'clientposts.index',
            'description'   => 'Permiso para acceder a la lista de clientes POS',
        ]);

        Permission::create([
            'name'          => 'Crear Clientes POS',
            'slug'          => 'clientposts.store',
            'description'   => 'Permiso para acceder a la creación de un  cliente POS',
        ]);

        Permission::create([
            'name'          => 'Editar Clientes POS',
            'slug'          => 'clientposts.update',
            'description'   => 'Permiso para acceder a la actualización de un  cliente POS',
        ]);

        Permission::create([
            'name'          => 'Eliminar Clientes POS',
            'slug'          => 'clientposts.destroy',
            'description'   => 'Permiso para acceder a la eliminación de un cliente POS',
        ]);

        //Permisos Métodos de Pago
        Permission::create([
            'name'          => 'Visualizar Métodos de Pago',
            'slug'          => 'payments.index',
            'description'   => 'Permiso para acceder a la lista de Métodos de Pago',
        ]);

        Permission::create([
            'name'          => 'Crear Métodos de Pago',
            'slug'          => 'payments.store',
            'description'   => 'Permiso para acceder a la creación de un Método de Pago',
        ]);

        Permission::create([
            'name'          => 'Editar Métodos de Pago',
            'slug'          => 'payments.update',
            'description'   => 'Permiso para acceder a la actualización de un Método de Pago',
        ]);

        Permission::create([
            'name'          => 'Eliminar Métodos de Pago',
            'slug'          => 'payments.destroy',
            'description'   => 'Permiso para acceder a la eliminación de un Método de Pago',
        ]);

        //Permisos de Personales POS
        Permission::create([
            'name'          => 'Visualizar Personales POS',
            'slug'          => 'personalposts.index',
            'description'   => 'Permiso para acceder a la lista de Personales POS',
        ]);

        Permission::create([
            'name'          => 'Crear Personales POS',
            'slug'          => 'personalposts.store',
            'description'   => 'Permiso para acceder a la creación de un Personal POS',
        ]);

        Permission::create([
            'name'          => 'Editar Personales POS',
            'slug'          => 'personalposts.update',
            'description'   => 'Permiso para acceder a la actualización de un Personal POS',
        ]);

        Permission::create([
            'name'          => 'Eliminar Personales POS',
            'slug'          => 'personalposts.destroy',
            'description'   => 'Permiso para acceder a la eliminación de un Personal POS',
        ]);

        //Permisos de Servicios POS
        Permission::create([
            'name'          => 'Visualizar Servicios POS',
            'slug'          => 'serviceposts.index',
            'description'   => 'Permiso para acceder a la lista de Servicio POS',
        ]);

        Permission::create([
            'name'          => 'Crear Servicios POS',
            'slug'          => 'serviceposts.store',
            'description'   => 'Permiso para acceder a la creación de un Servicio POS',
        ]);

        Permission::create([
            'name'          => 'Editar Servicios POS',
            'slug'          => 'serviceposts.update',
            'description'   => 'Permiso para acceder a la actualización de un Servicio POS',
        ]);

        Permission::create([
            'name'          => 'Eliminar Servicios POS',
            'slug'          => 'serviceposts.destroy',
            'description'   => 'Permiso para acceder a la eliminación de un Servicio POS',
        ]);

        //Permisos de Sucursales
        Permission::create([
            'name'          => 'Visualizar Sucursales',
            'slug'          => 'sucursals.index',
            'description'   => 'Permiso para acceder a la lista de Sucursales',
        ]);

        Permission::create([
            'name'          => 'Crear Sucursales',
            'slug'          => 'sucursals.store',
            'description'   => 'Permiso para acceder a la creación de una Sucursal',
        ]);

        Permission::create([
            'name'          => 'Editar Sucursales',
            'slug'          => 'sucursals.update',
            'description'   => 'Permiso para acceder a la actualización de una Sucursal',
        ]);

        Permission::create([
            'name'          => 'Eliminar Sucursales',
            'slug'          => 'sucursals.destroy',
            'description'   => 'Permiso para acceder a la eliminación de una Sucursal',
        ]);

        //Permisos Vouchers
        Permission::create([
            'name'          => 'Visualizar Página Vouchers',
            'slug'          => 'admin-vouchers',
            'description'   => 'Permiso para acceder a la página de lista de vouchers',
        ]);

        Permission::create([
            'name'          => 'Visualizar Vouchers',
            'slug'          => 'vouchers.index',
            'description'   => 'Permiso para acceder a la lista de vouchers',
        ]);

        Permission::create([
            'name'          => 'Crear Vouchers',
            'slug'          => 'vouchers.store',
            'description'   => 'Permiso para acceder a la creación de vouchers',
        ]);

        Permission::create([
            'name'          => 'Editar Vouchers',
            'slug'          => 'vouchers.update',
            'description'   => 'Permiso para acceder a la actualización de un voucher',
        ]);

        Permission::create([
            'name'          => 'Eliminar Vouchers',
            'slug'          => 'vouchers.destroy',
            'description'   => 'Permiso para acceder a la eliminación de un voucher',
        ]);


         //Permisos pagina de sistema post
         Permission::create([
            'name'          => 'Acceder a la página del sistema POS',
            'slug'          => 'sistema-post',
            'description'   => 'Permiso para acceder a la página del sistema POS',
        ]);

         //Permisos pagina de buscar voucher
         Permission::create([
            'name'          => 'Acceder a la página de buscar voucher',
            'slug'          => 'buscar-voucher',
            'description'   => 'Permiso para acceder a la página de buscar voucher',
        ]);

        Role::create([
            'name'          => 'Admin',
            'slug'          => 'admin',
            'special'   => 'all-access',
        ]);


    }
}
