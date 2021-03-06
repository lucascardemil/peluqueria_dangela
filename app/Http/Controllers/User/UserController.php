<?php

namespace App\Http\Controllers\User;

use App\User;
use App\Service;
use App\Personal;
use Caffeinated\Shinobi\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Freshwork\ChileanBundle\Rut;
use CodeItNow\BarcodeBundle\Utils\BarcodeGenerator;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:users.index')->only('index');
        $this->middleware('permission:users.store')->only('store');
        $this->middleware('permission:users.update')->only('update');
        $this->middleware('permission:users.destroy')->only('destroy');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexUsers()
    {
        
        $users = User::with('profession', 'roles')
                        ->whereHas('roles', function ($query) {
                            $query->where('roles.name', '<>' ,'cliente');
                        })
                        ->name()
                        ->orderBy('id', 'DESC')
                        ->paginate(10);
        

        return [
            'pagination' => [
                'total'         => $users->total(),
                'current_page'  => $users->currentPage(),
                'per_page'      => $users->perPage(),
                'last_page'     => $users->lastPage(),
                'from'          => $users->firstItem(),
                'to'            => $users->lastItem(),
            ],
            'users' => $users
        ];
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexClients()
    {
        
        $clients = User::with('profession', 'roles')
                        ->whereHas('roles', function ($query) {
                            $query->where('roles.name','=','Cliente');
                        })
                        ->barcode()
                        ->rut()
                        ->name()
                        ->orderBy('id', 'DESC')
                        ->paginate(10);
        

        return [
            'pagination' => [
                'total'         => $clients->total(),
                'current_page'  => $clients->currentPage(),
                'per_page'      => $clients->perPage(),
                'last_page'     => $clients->lastPage(),
                'from'          => $clients->firstItem(),
                'to'            => $clients->lastItem(),
            ],
            'clients' => $clients
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeClient(Request $request)
    {
        $this->validate($request, [
            'company_id' => 'required',
            'profession_id' => 'required',
            'rut' => 'required|unique:users|cl_rut|min:7',
            'name' => 'required|min:6|max:190',
            'email' => 'required|email|unique:users,email|min:6|max:150',
            'address' => 'required|min:6|max:300',
            'phone' => 'min:8',
            'birthdate' => 'required',
            'sex' => 'required',
            'civil' => 'required',
            'children' => 'required',
            // 'barcode' => 'required|min:4',
        ], [
            'company_id.required' => 'El campo empresa es obligatorio',
            'profession_id.required' => 'El campo profesion es obligatorio',
            'rut.cl_rut' => 'El campo rut no tiene el formato correcto',
            'rut.required' => 'El campo rut es obligatorio',
            'rut.unique' => 'El rut ya existe',
            'name.required' => 'El campo nombre es obligatorio',
            'name.min' => 'El campo nombre debe tener al menos 6 caracteres',
            'name.max' => 'El campo nombre debe tener a lo m??s 190 caracteres',
            'email.required' => 'El campo correo electr??nico es obligatorio',
            'email.unique' => 'El correo electr??nico ya existe',
            'email.min' => 'El campo de correo electr??nico debe tener al menos 6 caracteres',
            'email.max' => 'El campo de correo electr??nico debe tener a lo m??s 150 caracteres',
            'adress.required' => 'El campo direcci??n es obligatorio',
            'adress.min' => 'El campo direcci??n debe tener al menos 6 caracteres',
            'adress.max' => 'El campo direcci??n debe tener a lo m??s 300 caracteres',
            'phone.min' => 'El campo tel??fono debe tener 8 d??gitos',
            'birthdate.required' => 'El campo fecha de nacimiento es requerido',
            'sex.required' => 'El campo sexo requerido',
            'civil.required' => 'El campo estado civil es requerido',
            'children.required' => 'El campo hijos es requerido',
            'children.barcode' => 'El campo c??digo de barra de nacimiento es requerido',
            'children.min' => 'El campo c??digo de barra debe tener al menos 4 caracteres',
        ]);

        $data = $request->all();

        $data['rut'] = Rut::parse($data['rut'])->format();

        $data['password'] = bcrypt(Rut::parse($data['rut'])->format(Rut::FORMAT_ESCAPED));

        $data['name'] = strtoupper($data['name']);
        $data['email'] = strtolower($data['email']);
        $data['address'] = ucwords($data['address']);

        $user = User::create($data);
        $user->assignRole('cliente');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeUser(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:6|max:190',
            'email' => 'required|email|unique:users,email|min:6|max:150',
            'password' => 'required|min:6|max:190'
        ], [
            'name.required' => 'El campo nombre es obligatorio',
            'name.min' => 'El campo nombre debe tener al menos 6 caracteres',
            'name.max' => 'El campo nombre debe tener a lo m??s 190 caracteres',
            'email.required' => 'El campo correo electr??nico es obligatorio',
            'email.unique' => 'El correo electr??nico ya existe',
            'email.min' => 'El campo de correo electr??nico debe tener al menos 6 caracteres',
            'email.max' => 'El campo de correo electr??nico debe tener a lo m??s 150 caracteres',
            'password.required' => 'El campo constrase??a es obligatorio',
            'password.min' => 'El campo constrase??a debe tener al menos 6 caracteres',
            'password.max' => 'El campo constrase??a debe tener a lo m??s 190 caracteres',
        ]);

        $data = $request->all();

        $data['profession_id'] = 1;
        $data['address'] = 0;
        $data['phone'] = 0;
        $data['birthdate'] = 0;
        $data['sex'] = 0;
        $data['civil'] = 0;
        $data['children'] = 0;
        $data['barcode'] = 0;
        $data['remember_token'] = str_random(10);

        

        $data['rut'] = Rut::parse($data['rut'])->format();
        $data['name'] = strtoupper($data['name']);
        $data['email'] = strtolower($data['email']);
        $data['password'] = bcrypt($data['password']);
        

        $user = User::create($data);
        $user->assignRole('admin');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $user = $user;
        $company = $user->company;
        $profession = $user->profession;
        
        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateClient(Request $request, $id)
    {
        $this->validate($request, [
            'company_id' => 'required',
            'profession_id' => 'required',
            'rut' => ['required', 'min:7',
                        \Illuminate\Validation\Rule::unique('users')->ignore(User::find($id)), 'cl_rut'],
            'name' => 'required|min:6|max:190',
            'email' => ['required', 'email', 'min:6', 'max:150',
                        \Illuminate\Validation\Rule::unique('users')->ignore(User::find($id))],
            'address' => 'required|min:6|max:300',
            'phone' => 'min:8',
            //'birthdate' => 'required',
            //'sex' => 'required',
            //'civil' => 'required',
            //'children' => 'required',
            // 'barcode' => 'required',
        ], [
            'rut.cl_rut' => 'El campo rut no tiene el formato correcto',
            'rut.required' => 'El campo rut es obligatorio',
            'name.required' => 'El campo nombre es obligatorio',
            'name.min' => 'El campo nombre debe tener al menos 6 caracteres',
            'name.max' => 'El campo nombre debe tener a lo m??s 190 caracteres',
            'email.required' => 'El campo correo electr??nico es obligatorio',
            'email.min' => 'El campo de correo electr??nico debe tener al menos 6 caracteres',
            'email.max' => 'El campo de correo electr??nico debe tener a lo m??s 150 caracteres',
            'adress.required' => 'El campo direcci??n es obligatorio',
            'adress.min' => 'El campo direcci??n debe tener al menos 6 caracteres',
            'adress.max' => 'El campo direcci??n debe tener a lo m??s 300 caracteres',
            'phone.digits' => 'El campo tel??fono debe tener 8 d??gitos',
            'birthdate.required' => 'El campo fecha de nacimiento es requerido',
            'sex.required' => 'El campo sexo requerido',
            'civil.required' => 'El campo estado civil es requerido',
            'children.required' => 'El campo hijos es requerido',
            'children.barcode' => 'El campo c??digo de barra de nacimiento es requerido',
            'children.min' => 'El campo c??digo de barra debe tener al menos 4 caracteres',
        ]);

        $data = $request->all();

        $data['rut'] = Rut::parse($data['rut'])->format();
        $data['name'] = strtoupper($data['name']);
        $data['email'] = strtolower($data['email']);
        $data['address'] = ucwords($data['address']);
        
        
        User::find($id)->update($data);

        $user = User::find($id);

        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateUser(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|min:6|max:190',
            'email' => ['required', 'email', 'min:6', 'max:150',
                        \Illuminate\Validation\Rule::unique('users')->ignore(User::find($id))],
            'password' => 'required|min:6|max:190'
        ], [
            'name.required' => 'El campo nombre es obligatorio',
            'name.min' => 'El campo nombre debe tener al menos 6 caracteres',
            'name.max' => 'El campo nombre debe tener a lo m??s 190 caracteres',
            'email.required' => 'El campo correo electr??nico es obligatorio',
            'email.min' => 'El campo de correo electr??nico debe tener al menos 6 caracteres',
            'email.max' => 'El campo de correo electr??nico debe tener a lo m??s 150 caracteres',
            'password.required' => 'El campo constrase??a es obligatorio',
            'password.min' => 'El campo constrase??a debe tener al menos 6 caracteres',
            'password.max' => 'El campo constrase??a debe tener a lo m??s 190 caracteres'
        ]);

        

        $data = $request->all();

        $data['name'] = strtoupper($data['name']);
        $data['email'] = strtolower($data['email']);
        $data['password'] = bcrypt($data['password']);        
        
        User::find($id)->update($data);

        $user = User::find($id);

        return $user;
    }

    public function updateRole(Request $request, User $user)
    {
        //$user->update($reque);
        //actualizar roles
        $user->roles()->sync($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return;
    }

    public function all()
    {
        $users = User::whereHas('roles', function ($query) {
            $query->where('roles.name', 'cliente');
        })->get();

        return $users;
    }

    public function listServicePoint(User $user)
    {
        $services = Service::where('score_exchange', '<=' , $user->score)->get();

        return $services;
    }

    public function total()
    {
        $user = User::count();

        return [ 'total' => $user ];
    }

    public function totalByService()
    {   
        $users = User::select(DB::raw('users.name,users.rut,users.email, count(*) as services_count'))
            ->join('clientposts', 'users.id', '=', 'clientposts.user_id')
            ->join('serviceposts', 'serviceposts.voucher_id', '=', 'clientposts.voucher_id')
            ->groupBy('users.name')
            ->take(5)
            ->orderBy('services_count','DESC')
            ->get();
        
        return  $users;
    }
    /* IGUAL QUE ARRIBA PERO MUESTRA LOS TRABAJADORES QUE HAN ATENDIDO MAS SERVICIOS
    public function totalByService()
    {
        personals = Personal::select(DB::raw('personals.name, count(*) as services_count'))
        ->join('personalposts', 'personals.id', '=', 'personalposts.personal_id')
        ->join('serviceposts', 'serviceposts.id', '=', 'personalposts.servicepost_id')
        ->groupBy('personals.name')
        ->take(5)
        ->orderBy('services_count','DESC')
        ->get();
    }
*/
    public function saveBarcode()
    {
        /*Mailgun::send(['text' => 'emails.textmail'], null, function ($message) {
            $message->to('thevilos@gmail.com', 'Edgard Vilo')->subject('Welcome!');
        });*/

        for ($i = 1; $i <= 1 ; $i ++) {
            //$texto = "DANGELA1000" . $i;
            $texto = "15-002-0005";
            $barcode = new BarcodeGenerator();
            $barcode->setText($texto);
            $barcode->setType(BarcodeGenerator::Code39Extended);
            $barcode->setScale(2);
            $barcode->setThickness(25);
            $barcode->setFontSize(10);
            $code = $barcode->generate();

            echo '<img src="data:image/png;base64,'.$code.'" />';

            $data = base64_decode($code);
            file_put_contents(public_path().'/img/barcodes/'. $texto .'.png', $data);
        }

        return "C??digos de barra generados con ??xito";
    }



    public function detailClients($id)
    {
        $users = User::with('profession', 'roles')->where('id', '=' , $id);

        return $users;
    }
}
