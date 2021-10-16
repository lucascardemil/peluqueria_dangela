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
    searchUser: { email: '', name: '' },
    /********************************* */
    /************************************ */
    /*** sección componentes de clientes */
    clients: [],
    client: { company_id: '', company: { name: '' },profession_id: '', profession: { name: '' }, rut: '', name : '', email: '', address: '',
             phone: '', birthdate: '', sex: '', civil: '', children: 0, barcode: '', score: 0, password: '',
            is_convenio: 0 },
    newClient : { company_id: '',profession_id: '', rut: '', name : '', email: '', address: '',
                phone: '', birthdate: '', sex: '', civil: '', children: 0, barcode: '', score: 0, password: '',
                is_convenio: 0 },
    fillClient: { id: '', company_id: '', profession_id: '', rut: '', name : '', email: '', address: '',
                phone: '', birthdate: '', sex: '', civil: '', children: 0, barcode: '', score: '', password: '',
                is_convenio: 0 },
    searchClient: { barcode: '', rut: '', name: '' },
    is_convenio: 0,
    /********************************** */
    /****sección de componentes de servicios */
    servicespromotions: [],
    services:[],
    service: { name: '', score_exchange: '', score_accumulated: '' },
    newService : { category_id: '', name : '', score_exchange: '', score_accumulated: '', price: '' },
    fillService: { id: '', category_id: '', name : '', score_exchange: '', score_accumulated: '', price: '' },
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

    /*** sección componentes de marcas */
    brands: [],
    newBrand: { name : '' },
    fillBrand: { id: '', name: '' },
    searchBrand: {  name: '' },

    /*** sección componentes de laboratorios */
    laboratories: [],
    newLaboratory: { name : '' },
    fillLaboratory: { id: '', name: '' },
    searchLaboratory: {  name: '' },

    /*** sección componentes de unidades de medida */
    units: [],
    newUnit: { name : '' },
    fillUnit: { id: '', name: '' },
    searchUnit: {  name: '' },

    /*** sección componentes de productos */
    products: [],
    newProduct: { unit_of_measurent_id: 0, name : '', detail: '' },
    fillProduct: { id: '', brand_id: 0, laboratory_id: 0, name : '', detail: '' },
    searchProduct: {  name: '' },

    /*** sección componentes de codigos */
    codes: [],
    codesEdit: [],
    newCode: { brand_id: 0, laboratory_id: 0, product_id: 0, name : '', detail: '', price_cost: 0, price_sale: 0 },
    fillCode: { id: '', product_id: 0, name : '', detail: '' },
    searchCode: {  name: '' },

    /*** sección componentes de plantilla de inventarios */
    templates: [],
    codesTemplate: [],
    newTemplate: { sucursal_id: 0, name : '' },
    fillTemplate: { id: '', sucursal_id: 0, name : '', codes: [] },
    searchTemplate: { sucursal: '', name: '' },

    /*** sección componentes de inventarios */
    inventories: [],
    newInventory: { code_id: 0, price_cost : 0, price_sale : 0, utility : 0, iva: 19, quantity: 1 },
    fillInventory: { id: '', code_id: 0, price_cost : 0, price_sale : 0, utility : 0, quantity: 1 },
    detailInventory: null,
    idSucursal: null,

    /*** sección componentes de reducción de inventario */
    tipoConsumo: { value: 0 },
    consumeProducts: [],
    reductions: [],
    newReduction: { code_id: 1, sucursal_id: 1, quantity: 10 },
    searchReduction: { code: '', product: '', laboratory: '', brand: '' },

    //Sección de filtros
    sucursalsSelect: [],
    newVoucherSession: { quantity: 1, price: 0},
    selectedSucursal: { name: '' },
    vouchersFilter: [],
    serviciosPersonal: [],
    filtroVoucher: { total: 0, totalNeto: 0, iva: 0 },
    fecha: { diaSeleccionado: null, mesSeleccionado: null, anioSeleccionado: null, formato: 'yyyy' },
    newMail: { subject: '', message: '' },
    /****seccion de fotos */
    attachment: [],
    documents: [],
    images: [],
    index: null,
    form: new FormData,
}
