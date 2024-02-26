export default { //data
    data: [],
    options: [] , //arreglo para ser utilizado en el componente v-select para volcar los objetos
    optionsProfession: [],
    optionsCategory: [] ,
    optionsIsSession: [] ,
    optionsPromotion: [] ,
    optionsPersonal: [] ,
    optionsBrand: [] ,
    optionsLaboratory: [] ,
    optionsUnit: [] ,
    optionsProduct: [] ,
    optionsCode: [] ,
    optionsTemplate: [] ,
    optionsService: [],
    optionsProduct: [],
    selectedCategory: null,
    selectedIsSession: null,
    selectedPromotion: null,
    selectedItem: null, //captura el elemento seleccionado
    selectedProfession: null, //captura el segundo  elemento seleccionado SE CREO POR CUANDO SE SELECCIONA PROFESION Y EMPRESA EN CREATE USER
    selectedBrand: null,
    selectedLaboratory: null,
    selectedUnit: null,
    selectedProduct: null,
    selectedCode: null,
    selectedTemplate: null,
    selectedProduct: null,
    /*** sección componentes de categorias */
    categories: [],
    newCategory : { name : '', isSession: '' },
    fillCategory: { id: '', name: '', isSession: '' },
    searchCategory: {  name: '' },
    /*** sección componentes de promociones */
    idPromotion: 0,
    promotions: [],
    promotion: { id: '', name: '', total: 0 },
    newPromotion : { name : '', total: 0 },
    fillPromotion: { id: '', name: '', total: 0 },
    searchPromotion: { name: '' },
    /*** sección componentes de personales */
    personals: [],
    personal: { id: '', name: '' },
    newPersonal : { name : '' },
    fillPersonal: { id: '', name: '' },
    searchPersonal: {  name: '' },
    idPersonal: null,
    /*** sección componentes de empresas */
    companies: [],
    newCompany : { name : '', discount: '' },
    fillCompany: { id: '', name: '', discount: '' },
    searchCompany: {  name: '' },
    /*** sección componentes de profesiones */
    professions: [],
    newProfession : { name : '', date: '', percentage: '' },
    fillProfession: { id: '', name: '', date: '', percentage: '' },
    searchProfession: {  name: '' },
    /********************************** */
    /***** seccion index con estadisticas */
    countIndex: { user: { total: null } , service: { total: null } },
    serviceMonth: [],
    userServices: [],
    /********************************* */
    /************************************ */
    /*** sección componentes de usuarios */
    users: [],
    user: { name : '', email: '',password: ''},
    newUser : { name : '', rut: '', email: '',password: ''},
    fillUser: { id: '', name : '', email: '',password: ''},
    searchUser: { email: '', name: '', rut: '' },
    /********************************* */
    /************************************ */
    /*** sección componentes de clientes */
    clients: [],
    client: { company_id: '', company: { name: '' },profession_id: '', profession: { name: '' }, rut: '', name : '', email: '', city: '',
             phone: '', birthdate: '', sex: '', score: 0, password: '', is_convenio: 0, other_sex: '', image: ''},
    newClient : { company_id: '',profession_id: '', rut: '', name : '', email: '', city: '',
                phone: '', birthdate: '', sex: '', score: 0, password: '', is_convenio: 0, other_sex: '', image: ''},
    fillClient: { id: '', company_id: '', profession_id: '', rut: '', name : '', email: '', city: '',
                phone: '', birthdate: '', sex: '', score: '', password: '', is_convenio: 0, other_sex: '', image: '' },
    searchClient: { barcode: '', rut: '', name: '' },
    is_convenio: 0,
    /********************************** */
    /****sección de componentes de servicios */
    servicespromotions: [],
    services:[],
    service: { name: '', score_exchange: '', score_accumulated: '' },
    newService : { category_id: '', name : '', score_exchange: '', score_accumulated: '', price: '', redeemable_service: 0 },
    fillService: { id: '', category_id: '', name : '', score_exchange: '', score_accumulated: '', price: '', redeemable_service: 0 },
    searchService: {  name: '' },
    /************************************* */
    /*****sección de usuarios y servicios asociados */
    userServices: [],
    /********************************** */
    /*****sección de servicios disponibles con el puntaje de un usuario */
    userScoreServices: [],
    pagination: {
        'total': 0,
        'current_page': 0,
        'per_page': 0,
        'last_page': 0,
        'from': 0,
        'to': 0,
    },
    errorsLaravel: [],
    offset: 2,
    /*** sección componentes de roles */
    roles: [],
    newRole: { name: '', description: '', slug: '' },
    fillRole : { id: '', name: '', description: '', slug: '', special: '', permissions: [] },
    userRoles : [],
    fillUserRoles: { name: null },
    checkedRoles: [],
    permissions: [],
    checkedSpecialRole: '',
    checkedPermissions: [],
    /**************************************** */
    /**************************************** */
    /*********** sección pos ************** */
    /*************************************** */
    /*************************************** */

    /*** sección componentes de clientes */
    selectedClient: null, //captura el elemento seleccionado


    /*** sección componentes de sucursales */
    sucursals: [],
    selectedSucursal: { id: null, name: null },
    /*** sección componentes de pagos */
    payments: [],
    selectedPayment: null,
    /****sección de componentes de servicios */
    serviceposts: [],
    clientposts: [],
    selectedServiceposts: { label: '', value: '', precio: ''}, //captura el elemento seleccionado
    listServiceposts: [],
    listPersonalposts: [],
    total_promotion:[],
    personalposts: [],
    selectedPersonalposts: null, //captura el elemento seleccionado
    servicepromotions: [],
    selectedServicepromotions: [],
    listServicepromotions: [],
    listServiceCreatepromotions: [],

    selectedTypeService: {id: null, name: null},

    /*****seccion de mostrar/ocultar paneles */
    sucursalShow: true,
    clientShow: false,
    typeServiceShow: false,
    promotionShow: false,
    serviceShow: false,
    personalShow: false,
    finalShow: false,

    totalPost: 0,
    descuento: 0,
    totalPromotion: 0,
    totalCreatePromotion: 0,

    /********sección de lista de vouchers ******/
    idVoucher: 0,
    codeVoucher: false,
    vouchers: [],
    searchVoucher: { id: '' },
    dataVoucher: null,
    voucher: null,
    voucherClient: null,
    voucherServices: null,
    searchVoucher: { id: null },
    cajaZData: [],
    cajaServices: [],
    totalCajaZ: 0,
    fillVoucher : { id: '', personal: '', name: '', total: '', is_paid: 0 },
    cart:[],
    cartTotal: 0,
    total_normal: 0,
    index: 0,

    detailPersonalServices: [],
    sucursalId: 0,
    totalPersonalServices: [],
    totalPriceService: 0,
    personalId: 0,
    personalName: '',
    detailPersonalName: '',
    /******************* */

    /**************************************** */
    /**************************************** */
    /*********** sección inventario ************** */
    /*************************************** */
    /*************************************** */

    //Productos
    newProduct:{ name: '', code: '', supplier: '', detail: '', attribute: 0, utility: 0, flete: 0, invoice: 0 },
    fillProduct:{ id: 0, name: '', code: '', supplier: '', detail: '', attribute: 0, utility: 0, flete: 0, invoice: 0 },
    products:[],
    deleteProductId: 0,
    searchProduct: { name: ''}, 

    //Proveedor
    newSupplier:{ name: '', rut: '', phone: '', address: '', commercial_business: ''},
    suppliers: [],

    //Sección de filtros
    sucursalsSelect: [],
    newVoucherSession: { quantity: 1, price: 0},
    selectedSucursal: { name: '' },
    vouchersFilter: [],
    serviciosPersonal: [],
    filtroVoucher: { total: 0, totalNeto: 0, iva: 0 },
    fecha: { diaSeleccionado: null, mesSeleccionado: null, anioSeleccionado: null, formato: 'yyyy' },
    newMail: { subject: '', message: '' },

    //seccion de fotos
    attachment: [],
    documents: [],
    images: [],
    index: null,
    form: new FormData,
    inputOther: false,
    selectedImage: '',
    userSucursal: false,
    selectCompany: false,

    //Utilidad
    newUtility: { utility: 0 },
    utilityDefect: 0,

    //Utilidad
    newFlete: { flete: 0 },
    fleteDefect: 0,
    current_page: 0,

    //Inventory
    newInventory: {product_id: 0, quantity: 1, price: 0, discount: 0},
    inventories: [],
    fileInvoice: null,
    searchInventory: { name: ''},

    //Sale
    newSale: {
        id: 0, 
        product:'', 
        code: '', 
        quantity: 1, 
        price: 0, 
        price_sale: 0, 
        utility: 0, 
        flete: 0, 
        priceMax: 0, 
        average_price: 0, 
        totalSumPrice: 0,
        totalSumQuantity: 0,
        totalNeto: 0
    },
    cart: [],
    cartNeto: 0,
    cartTotal: 0,
    calendar: { search: ''},
    sales: [],
    sale_id: 0,

    //PaymentMethods
    newPaymentMethod: { name: '', utility: 1},
    fillPaymentMethod: { id: 0, name: '', utility: 1},

    //Discount
    newDiscount: { discount: ''}
}
