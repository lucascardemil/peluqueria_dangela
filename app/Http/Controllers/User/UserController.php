<?php

namespace App\Http\Controllers\User;

use App\User;
use App\Service;
use App\Personal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Freshwork\ChileanBundle\Rut;
use CodeItNow\BarcodeBundle\Utils\BarcodeGenerator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexUsers(Request $request)
    {
        $search_rut = $request->input('rut');
        $search_name = $request->input('name');
        $search_email = $request->input('email');

        if($search_name !== null || $search_rut !== null || $search_email !== null){
            $users = User::with('profession', 'roles')->name($search_name)->rut($search_rut)->email($search_email)->orderBy('id', 'DESC')->paginate(10);
        } else {
           $users = User::with('profession', 'roles')->orderBy('id', 'DESC')->paginate(10);
        }
    
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
                            $query->where('roles.name','=','clientes');
                        })
                        ->rut()
                        ->name()
                        ->orderBy('id', 'DESC')
                        ->paginate(10);
                        
        $user_sucursal = auth()->user()->isSucursal();

        return [
            'pagination' => [
                'total'         => $clients->total(),
                'current_page'  => $clients->currentPage(),
                'per_page'      => $clients->perPage(),
                'last_page'     => $clients->lastPage(),
                'from'          => $clients->firstItem(),
                'to'            => $clients->lastItem(),
            ],
            'clients' => $clients,
            'user_sucursal' => $user_sucursal
        ];
    }

    public function searchUser(Request $request)
    {
        $search_rut = $request->input('rut');
        $search_name = $request->input('name');
        $search_email = $request->input('email');

        if($search_name !== null || $search_rut !== null || $search_email !== null){
            $users = User::with('profession', 'roles')
                ->name($search_name)
                ->rut($search_rut)
                ->email($search_email)
                ->first();
        } else{
            $users = [];
        }

        return $users;
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
            'name.required' => 'El campo nombre es requerido',
            'name.min' => 'El campo nombre debe tener al menos 6 caracteres',
            'name.max' => 'El campo nombre debe tener a lo más 190 caracteres',
            'email.required' => 'El campo correo electrónico es requerido',
            'email.unique' => 'El correo electrónico ya existe',
            'email.min' => 'El campo de correo electrónico debe tener al menos 6 caracteres',
            'email.max' => 'El campo de correo electrónico debe tener a lo más 150 caracteres',
            'password.required' => 'El campo constraseña es requerido',
            'password.min' => 'El campo constraseña debe tener al menos 6 caracteres',
            'password.max' => 'El campo constraseña debe tener a lo más 190 caracteres',
        ]);

        $data = $request->all();

        $data['profession_id'] = 1;
        $data['city'] = 0;
        $data['phone'] = 0;
        $data['birthdate'] = 0;
        $data['sex'] = 0;
        $data['remember_token'] = str_random(10);
        
        $data['rut'] = Rut::parse($data['rut'])->format();
        $data['name'] = strtoupper($data['name']);
        $data['email'] = strtolower($data['email']);
        $data['password'] = bcrypt($data['password']);
        $data['key'] = md5($data['password']);
        

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
    public function updateUser(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|min:6|max:190',
            'email' => ['required', 'email', 'min:6', 'max:150',
                        \Illuminate\Validation\Rule::unique('users')->ignore(User::find($id))],
            'password' => 'required|min:6|max:190'
        ], [
            'name.required' => 'El campo nombre es requerido',
            'name.min' => 'El campo nombre debe tener al menos 6 caracteres',
            'name.max' => 'El campo nombre debe tener a lo más 190 caracteres',
            'email.required' => 'El campo correo electrónico es requerido',
            'email.min' => 'El campo de correo electrónico debe tener al menos 6 caracteres',
            'email.max' => 'El campo de correo electrónico debe tener a lo más 150 caracteres',
            'password.required' => 'El campo constraseña es requerido',
            'password.min' => 'El campo constraseña debe tener al menos 6 caracteres',
            'password.max' => 'El campo constraseña debe tener a lo más 190 caracteres'
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
            $query->where('roles.name', 'clientes');
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

        return "Códigos de barra generados con éxito";
    }



    public function detailClients($id)
    {
        $users = User::with('profession', 'roles')->where('id', '=' , $id);

        return $users;
    }

    public function generateKey(Request $request, $id)
    {
        $data = $request->all();
        $data['key'] = md5(random_bytes(16));

        User::find($id)->update(['key' => $data['key']]);
        $request->session(['key' => $data['key']]);


        return response()->json(['status'=> 'success', 'message' => 'Clave generada y actualizada con éxito'], 200);
    }

    public function resetIp(Request $request, $id)
    {
        User::find($id)->update(['ip_city' => null]);
        return response()->json(['status'=> 'success', 'message' => 'La IP a sido reseteada con éxito'], 200);
    }

    public function blockIp(Request $request, $id)
    {
        $data = $request->all();
        User::find($id)->update(['is_blockip' => $data['check']]);
        return response()->json(['status'=> 'success', 'message' => 'Se desactivo el bloqueo de IP'], 200);
    }
}
