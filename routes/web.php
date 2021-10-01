<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

//administrador de recursos para los roles
Route::ApiResource('roles', 'Role\RoleController');
Route::get('roles-all', 'Role\RoleController@all');
Route::ApiResource('users.roles', 'User\UserRoleController')->only(['index']);
Route::put('usersRoles/{user}', 'User\UserController@updateRole');

//administrador de recursos para los permisos
Route::ApiResource('permissions', 'Permission\PermissionController')->only('index');

//administrador de recursos para el personal
Route::ApiResource('personals', 'Personal\PersonalController');
Route::get('personals-all', 'Personal\PersonalController@all');

//administrador de recursos para las categorias
Route::ApiResource('categories', 'Category\CategoryController');
Route::get('categories-all', 'Category\CategoryController@all');
Route::get('categories-isSession', 'Category\CategoryController@isSession');
Route::ApiResource('categories.services', 'Category\CategoryServiceController')->only(['index']);

//administrador de recursos para las empresas
Route::ApiResource('companies', 'Company\CompanyController');
Route::get('companies-all', 'Company\CompanyController@all');
Route::ApiResource('companies.users', 'Company\CompanyUserController')->only(['index']);


//administrador de recursos para las profesiones
Route::ApiResource('professions', 'Profession\ProfessionController');
Route::get('professions-all', 'Profession\ProfessionController@all');
Route::ApiResource('professions.users', 'Profession\ProfessionUserController')->only(['index']);

//administrador de recursos para los servicios
Route::ApiResource('services', 'Service\ServiceController');
//ruta para obtener todos los servicios
Route::get('services-all', 'Service\ServiceController@all');
Route::get('services-all-category/{category}', 'Service\ServiceController@SelectServicesVoucher');
//ruta para obtener la cantidad total de servicios
Route::get('services-total', 'Service\ServiceController@total');
//ruta para obtener todos los servicios por mes
Route::get('services-total-month', 'Service\ServiceController@totalByMonth');
Route::ApiResource('services.users', 'Service\ServiceUserController')->only(['index']);

//administrador de recursos para las promociones
Route::ApiResource('promotions', 'Promotion\PromotionController');
Route::get('promotions-all', 'Promotion\PromotionController@all');
Route::ApiResource('servicepromotions', 'Promotion\ServicepromotionController');
Route::delete('promotions-services-edit/{id}', 'Promotion\PromotionController@eliminarProSerEdit');

//administrador de recursos para los usuarios
Route::ApiResource('users', 'User\UserController');
Route::get('users', 'User\UserController@indexUsers');
Route::post('create-user', 'User\UserController@storeUser');
Route::put('update-user/{id}', 'User\UserController@updateUser');
Route::ApiResource('users-all', 'User\UserController@all');
Route::get('users-available-service/{user}', 'User\UserController@listServicePoint');
//ruta para obtener la cantidad total de usuarios
Route::get('users-total', 'User\UserController@total');
Route::get('users-total-services', 'User\UserController@totalByService');
Route::ApiResource('users.services', 'User\UserServiceController')->except(['store']);

Route::ApiResource('users.personals.services', 'UserPersonalServiceController')->only('store');
//ruta para obtener la cantidad total de usuarios inscritos
//Route::get('users-count', 'User\UserController@contadorUsuario');
//administrador de recursos para los servicios de cada usuario
//Route::ApiResource('users.services', 'User\UserServiceController');
//ruta para obtener la cantidad de servicios realizados
//ruta para obtener la cantidad de servicios realizados por un cliente
//Route::get('user-services-total/{id}', 'User\UserServiceController@totalServiceByUser');
//Route::get('users-service-count', 'User\UserServiceController@contadorUsuarioServicio');


//administrador de recursos para las ofertas de cada usuario
//Route::ApiResource('user-offers', 'User\UserOfferController');

/**************** recursos para clientes ***************************/
Route::ApiResource('clients-pos', 'Post\ClientpostController');
Route::get('clients', 'User\UserController@indexClients');
Route::post('create-client', 'User\UserController@storeClient');
Route::put('update-client/{id}', 'User\UserController@updateClient');
Route::post('clients-pos', 'User\UserController@storeUser');

/********************* Sistema POS **************** */
/**************************************************** */
/**************************************************** */

Route::ApiResource('sucursals', 'Post\SucursalController');
Route::get('sucursals-all', 'Post\SucursalController@all');

Route::ApiResource('vouchers', 'Post\VoucherController');

Route::ApiResource('payments', 'Post\PaymentController');
Route::get('payments-all', 'Post\PaymentController@all');

Route::ApiResource('clientposts', 'Post\ClientpostController');
Route::get('clientposts-all', 'User\UserController@all');

Route::ApiResource('serviceposts', 'Post\ServicepostController');
Route::ApiResource('personalposts', 'Post\PersonalpostController');

Route::get('boxz-sucursal/{id}', 'Post\VoucherController@boxZ');

Route::get('ver-voucher/{id}', 'Post\VoucherController@boleta');
Route::get('generar-voucher/{id}', 'Post\VoucherController@pdf');
Route::get('lista-voucher/{id}', 'Post\VoucherController@listaVoucher');
Route::get('vouchers-personal/{idS}/{idP}', 'Post\VoucherController@voucherPersonal');
Route::get('total-vouchers-personal/{id}', 'Post\VoucherController@totalVoucherPersonal');
Route::get('vouchersimpagos/{id}', 'Post\VoucherController@vouchersImpagos');

/********************* Inventario **************** */
/**************************************************** */
/**************************************************** */
Route::ApiResource('brands', 'BrandController');
Route::get('brands-all', 'BrandController@all');

Route::ApiResource('laboratories', 'LaboratoryController');
Route::get('laboratories-all', 'LaboratoryController@all');

Route::ApiResource('units', 'UnitOfMesaurentController');
Route::get('units-all', 'UnitOfMesaurentController@all');

Route::ApiResource('products', 'ProductController');
Route::get('products-all', 'ProductController@all');

Route::ApiResource('codes', 'CodeController');
Route::get('codes-all', 'CodeController@all');

Route::ApiResource('inventories-template', 'InventorytemplateController');
Route::get('inventories-template-all', 'InventorytemplateController@all');

Route::ApiResource('inventories', 'InventoryController');
Route::get('totalInventory/{idSucursal}', 'InventoryController@totalInventory');
Route::post('consumeProduct', 'InventoryController@consumeProduct');

Route::get('/', 'HomeController@index')->name('home');

//Seccion de correo
Route::post('enviar-correo-masivo', 'MailController@masiveMail');

Route::get('filtro-voucher', 'Post\VoucherController@filtroVoucher');

Route::ApiResource('imagenes-mail', 'ImagenmailController');

Route::middleware(['auth'])->group( function(){

    Route::get('categorias', function () {
        return view('admin.category');
        })->name('categorias')
        ->middleware('permission:categories');

    Route::get('personales', function () {
        return view('admin.personal');
        })->name('personales')
        ->middleware('permission:personals');

    //Empresas
    Route::get('empresas', function () {
        return view('admin.company');
        })->name('empresas')
        ->middleware('permission:empresas');

    //Profesiones
    Route::get('profesiones', function () {
        return view('admin.profession');
        })->name('profesiones')
        ->middleware('permission:profesiones');

    //Usuarios
    Route::get('usuarios', function () {
            return view('admin.user');
        })->name('usuarios')
        ->middleware('permission:usuarios');

    //Clientes
    Route::get('clientes', function () {
        return view('admin.client');
    })->name('clientes')
    ->middleware('permission:clientes');

    //Servicios
    Route::get('servicios', function () {
            return view('admin.service');
        })->name('servicios')
        ->middleware('permission:servicios');

    //Promociones
    Route::get('promociones', function () {
        return view('admin.promotion');
    })->name('promociones')
    ->middleware('permission:promociones');

    //Administración puntaje usuarios
    Route::get('administrar-puntaje-usuario', function () {
            return view('admin.detail-user');
        })->name('detalleUsuario')
        ->middleware('permission:score.admin');


    /******************** SISTEMA POS **********************/
    /****************************************************** */

    Route::get('sistema-post', function () {
        return view('post.principal');
    })->name('sistema-post')->middleware('permission:sistema-post');

    Route::get('buscar-voucher', function () {
        return view('admin.voucher');
    })->name('buscar-voucher')->middleware('permission:buscar-voucher');

    Route::get('admin-vouchers', function () {
        return view('admin.admin-voucher');
    })->name('admin-vouchers')->middleware('permission:admin-vouchers');

    Route::get('filter-vouchers', function () {
        return view('admin.filter-voucher');
    })->name('filter-vouchers')->middleware('permission:buscar-voucher');

    Route::get('session-voucher', function () {
        return view('admin.session-voucher');
    })->name('session-voucher')->middleware('permission:buscar-voucher');

    Route::get('correoMasivo', function () {
        return view('admin.send-masive-email');
    })->name('correoMasivo')->middleware('permission:admin-vouchers');

    /******************** INVENTARIO **********************/
    /****************************************************** */
    Route::get('marcas', function () {
        return view('inventory.admin-brand');
    })->name('marcas');

    Route::get('laboratorios', function () {
        return view('inventory.admin-laboratory');
    })->name('laboratorios');

    Route::get('unidades-de-medida', function () {
        return view('inventory.admin-unit');
    })->name('unidades');

    Route::get('productos', function () {
        return view('inventory.admin-product');
    })->name('productos');

    Route::get('codigos', function () {
        return view('inventory.admin-code');
    })->name('codigos');

    Route::get('plantillas-inventario', function () {
        return view('inventory.admin-inventory-template');
    })->name('plantillas-inventario');

    Route::get('inventarios', function () {
        return view('inventory.admin-inventory');
    })->name('inventarios');

    Route::get('consumo-inventario', function () {
        return view('inventory.admin-reduction');
    })->name('consumo-inventario');

    /****************************************************** */
    /***************************************************** */


    Route::get('role', function () {
        return view('role.roles');
    })->name('role');

    Route::get('usuarios-roles', function () {
        return view('role.users');
    })->name('usuarios-roles');

    //Servicios
    Route::get('/servicios-canje', function () {
        return view('admin.all-service-user');
    })->name('servicios-canje');

    //ruta para generar códigos de barra
    Route::get('/generar-codigos-de-barra', 'User\UserController@saveBarcode');

    //ruta para poder enviar correos automatizados a los clientes que pertenezcan a una profesión
    Route::get('/enviar-correo-profesion', 'MailController@sendProfession')->name('send-mail-profession');


});


Route::get('storage-link', function(){
    if(file_exists(public_path('storage'))){
        return 'El directorio"public/storage" ya existe.';
    }

    app('files')->link(
        storage_path('app/public'), public_path('storage')
    );

    return 'El directorio "public/storage" ha sido vinculado';
});


