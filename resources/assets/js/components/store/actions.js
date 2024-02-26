import state from "./state"

export default { //methods
    /******************************* */
    countUser(context) {
        context.commit('countUser')
    },
    countUserService(context) {
        context.commit('countUserService')
    },
    showServicesByMonth(context) {
        context.commit('showServicesByMonth')
    },
    showUsersByServices(context) {
        context.commit('showUsersByServices')
    },
    /*************seccion de categorias***************** */
    getCategories(context, data) {
        context.commit('getCategories', data.page)
    },
    createCategory(context) {
        context.commit('createCategory')
        setTimeout(function () {
            context.commit('getCategories', 1)
        }, 1000)

    },
    editCategory(context, data) {
        context.commit('editCategory', data.categoryLocal)
    },
    updateCategory(context, data) {
        context.commit('updateCategory', data.id)
        setTimeout(function () {
            context.commit('getCategories', 1)
        }, 1000)
    },
    deleteCategory(context, data) {
        context.commit('deleteCategory', data.id)
        setTimeout(function () {
            context.commit('getCategories', 1)
        }, 1000)
    },
    changePageCategory(context, data) {
        context.commit('paginate', data.page)
        context.commit('getCategories', data.page)
    },
    /*************seccion de promociones***************** */
    getPromotions(context, data) {
        context.commit('getPromotions', data.page)
    },
    createPromotion(context) {
        context.commit('createPromotion')
        setTimeout(function () {
            context.commit('getPromotions', 1)
        }, 1000)

    },
    editPromotion(context, data) {
        context.commit('editPromotion', data.promotionLocal)
    },
    updatePromotion(context, data) {
        context.commit('updatePromotion', data.id)
        setTimeout(function () {
            context.commit('getPromotions', 1)
        }, 1000)
    },
    deletePromotion(context, data) {
        context.commit('deletePromotion', data.id)
        setTimeout(function () {
            context.commit('getPromotions', 1)
        }, 1000)
    },
    deletePromotionEdit(context, data) {
        context.commit('deletePromotionEdit', data.id)
        context.commit('editPromotion', data.id_promo)
        setTimeout(function () {
            context.commit('getPromotions', 1)
        }, 1000)
    },
    changePagePromotion(context, data) {
        context.commit('paginate', data.page)
        context.commit('getPromotions', data.page)
    },
    /*************seccion de personales***************** */
    getPersonals(context, data) {
        context.commit('getPersonals', data.page)
    },
    createPersonal(context) {
        context.commit('createPersonal')
        setTimeout(function () {
            context.commit('getPersonals', 1)
        }, 1000)
    },
    editPersonal(context, data) {
        context.commit('editPersonal', data.personalLocal)
    },
    updatePersonal(context, data) {
        context.commit('updatePersonal', data.id)
        setTimeout(function () {
            context.commit('getPersonals', 1)
        }, 1000)
    },
    deletePersonal(context, data) {
        context.commit('deletePersonal', data.id)
        setTimeout(function () {
            context.commit('getPersonals', 1)
        }, 1000)
    },
    changePagePersonal(context, data) {
        context.commit('paginate', data.page)
        context.commit('getPersonals', data.page)
    },
    /******************************** */
    allCategories(context) {
        context.commit('allCategories')
    },
    allIsSession(context) {
        context.commit('allIsSession')
    },
    setCategory(context, data) {
        context.commit('setCategory', data)
    },
    setCategoryPos(context, data) {
        context.commit('setCategoryPos', data)
    },
    allCompanies(context) {
        context.commit('allCompanies')
    },
    setCompany(context, data) {
        context.commit('setCompany', data)
    },
    allProfessions(context) {
        context.commit('allProfessions')
    },
    setProfession(context, data) {
        context.commit('setProfession', data)
    },
    allServices(context) {
        context.commit('allServices')
    },
    setService(context, data) {
        context.commit('setService', data)
    },
    allPromotions(context) {
        context.commit('allPromotions')
    },
    setPromotion(context, data) {
        context.commit('setPromotion', data)
    },
    setPromotionPos(context, data) {
        context.commit('setPromotionPos', data)
    },
    allPersonals(context) {
        context.commit('allPersonals')
    },
    setPersonal(context, data) {
        context.commit('setPersonal', data)
    },
    allProducts(context) {
        context.commit('allProducts')
    },
    setProduct(context, data) {
        context.commit('setProduct', data)
    },
    /************************************* */
    getCompanies(context, data) {
        context.commit('getCompanies', data.page)
    },
    createCompany(context) {
        context.commit('createCompany')
        setTimeout(function () {
            context.commit('getCompanies', 1)
        }, 1000)
    },
    editCompany(context, data) {
        context.commit('editCompany', data.companyLocal)
    },
    updateCompany(context, data) {
        context.commit('updateCompany', data.id)
        setTimeout(function () {
            context.commit('getCompanies', 1)
        }, 1000)
    },
    deleteCompany(context, data) {
        context.commit('deleteCompany', data.id)
        setTimeout(function () {
            context.commit('getCompanies', 1)
        }, 1000)
    },
    changePageCompany(context, data) {
        context.commit('paginate', data.page)
        context.commit('getCompanies', data.page)
    },

    /************************************* */
    getProfessions(context, data) {
        context.commit('getProfessions', data.page)
    },
    createProfession(context) {
        context.commit('createProfession')
        setTimeout(function () {
            context.commit('getProfessions', 1)
        }, 1000)
    },
    editProfession(context, data) {
        context.commit('editProfession', data.professionLocal)
    },
    updateProfession(context, data) {
        context.commit('updateProfession', data.id)
        setTimeout(function () {
            context.commit('getProfessions', 1)
        }, 1000)
    },
    deleteProfession(context, data) {
        context.commit('deleteProfession', data.id)
        setTimeout(function () {
            context.commit('getProfessions', 1)
        }, 1000)
    },
    changePageProfession(context, data) {
        context.commit('paginate', data.page)
        context.commit('getProfessions', data.page)
    },
    /******************************************** */
    getClients(context, data) {
        context.commit('getClients', data.page)
    },
    showClient(context, data) {
        context.commit('showClient', data.id)
    },
    createClient(context) {
        context.commit('createClient')
        setTimeout(function () {
            context.commit('getClients', 1)
        }, 1000)
    },
    editClient(context, data) {
        context.commit('editClient', data.clientLocal)
    },
    updateClient(context, data) {
        context.commit('updateClient', data.id)
        setTimeout(function () {
            context.commit('getClients', 1)
        }, 1000)
    },
    deleteClient(context, data) {
        context.commit('deleteClient', data.id)
        setTimeout(function () {
            context.commit('getClients', 1)
        }, 1000)
    },


    getUsers(context, data) {
        context.commit('getUsers', data.page)
    },
    getSearchUsers(context) {
        context.commit('getSearchUsers')
    },
    showUser(context, data) {
        context.commit('showUser', data.id)
    },
    createUser(context) {
        context.commit('createUser')
        setTimeout(function () {
            context.commit('getUsers', 1)
        }, 1000)
    },
    editUser(context, data) {
        context.commit('editUser', data.userLocal)
    },
    updateUser(context, data) {
        context.commit('updateUser', data.id)
        setTimeout(function () {
            context.commit('getUsers', 1)
        }, 1000)
    },
    updateScoreExchange(context) {
        context.commit('updateScoreExchange')
    },
    updateScoreAccumulated(context, data) {
        context.commit('createUserService')
        context.commit('updateScoreAccumulated')
        setTimeout(function () {
            context.commit('getUserServices', data.id)
        }, 1000)
    },
    deleteUser(context, data) {
        context.commit('deleteUser', data.id)
        setTimeout(function () {
            context.commit('getUsers', 1)
        }, 1000)
    },
    changePageUser(context, data) {
        context.commit('paginate', data.page)
        context.commit('getUsers', data.page)
    },
    /***************************************** */
    getServices(context, data) {
        context.commit('getServices', data.page)
    },
    showService(context, data) {
        context.commit('showService', data.id)
    },
    createService(context) {
        context.commit('createService')
        setTimeout(function () {
            context.commit('getServices', 1)
        }, 1000)
    },
    editService(context, data) {
        context.commit('editService', data.serviceLocal)
    },
    updateService(context, data) {
        context.commit('updateService', data.id)
        setTimeout(function () {
            context.commit('getServices', 1)
        }, 1000)
    },
    deleteService(context, data) {
        context.commit('deleteService', data.id)
        setTimeout(function () {
            context.commit('getServices', 1)
        }, 1000)
    },
    changePageService(context, data) {
        context.commit('paginate', data.page)
        context.commit('getServices', data.page)
    },
    /********************************************* */
    getUserServices(context, data) {
        context.commit('getUserServices', data.id)
        context.commit('getUsersAvaibleServices', data.id)
    },
    /**************seccion de asignación de roles a usuarios */
    getRoles(context, data) {
        context.commit('getRoles', data.page)
    },
    createRole(context) {
        context.commit('createRole')
        context.commit('getRoles', 1)
    },
    editRole(context, data) {
        context.commit('editRole', data.roleLocal)
        context.commit('getAllPermissions')
    },
    updateRole(context, data) {
        context.commit('updateRole', data.id)
        context.commit('getRoles', 1)
    },
    deleteRole(context, data) {
        context.commit('deleteRole', data.id)
        context.commit('getRoles', 1)
    },
    getAllRoles(context) {
        context.commit('getAllRoles')
    },
    getAllPermissions(context) {
        context.commit('getAllPermissions')
    },
    getUserRoles(context, data) {
        context.commit('getUserRoles', data.id)
    },
    editUserRoles(context, data) {
        context.commit('editUserRoles', data.userLocal)
    },
    updateUserRoles(context, data) {
        context.commit('updateUserRoles', data.id)
    },
    /**************************************** */
    /**************************************** */
    /*********** sección post ************** */
    /*************************************** */
    /*************************************** */

    /***********sección select *************/
    /**************************************/
    /**************************************/

    /********* seccion de paneles *****/
    showSucursalPanel(context) {
        context.commit('showSucursalPanel')
    },
    showClientPanel(context) {
        context.commit('showClientPanel')
    },
    showTypeServicePanel(context) {
        context.commit('showTypeServicePanel')
    },
    showPromotionPanel(context) {
        context.commit('showPromotionPanel')
    },
    showServicePanel(context) {
        context.commit('showServicePanel')
    },
    showFinalPanel(context) {
        context.commit('showFinalPanel')
    },
    /********************************** */
    addSucursal(context, data) {
        context.commit('addSucursal', data.sucursal)
        context.commit('showClientPanel')
    },
    allSucursals(context) {
        context.commit('allSucursals')
    },
    setSucursal(context, data) {
        context.commit('setSucursal', data)
    },
    allPayments(context) {
        context.commit('allPayments')
    },
    setPayment(context, data) {
        context.commit('setPayment', data)
    },
    allClients(context) {
        context.commit('allClients')
    },
    setClient(context, data) {
        context.commit('setClient', data)
    },
    allServiceposts(context) {
        context.commit('allServiceposts')
    },
    setServicepost(context, data) {
        context.commit('setServicepost', data)
    },
    setServicepromotion(context, data) {
        context.commit('setServicepromotion', data)
    },
    allPersonalposts(context) {
        context.commit('allPersonalposts')
    },
    setPersonalpost(context, data) {
        context.commit('setPersonalpost', data)
    },
    addService(context) {
        context.commit('addService')
        context.commit('totalServicePost')
    },
    deleteServicepost(context) {
        context.commit('deleteServicepost')
    },
    totalServicePost(context) {
        context.commit('totalServicePost')
    },
    addServicePromotion(context) {
        context.commit('addServicePromotion')
        context.commit('totalServicePromotion')
    },
    addServicePersonalPromotion(context, service) {
        context.commit('addServicePersonalPromotion', service)
        context.commit('totalServicePost')
    },
    deleteServicePromotion(context) {
        context.commit('deleteServicePromotion')
    },
    totalServicePromotion(context) {
        context.commit('totalServicePromotion')
    },


    addServiceCreatePromotion(context) {
        context.commit('addServiceCreatePromotion')
        context.commit('totalServiceCreatePromotion')
    },
    deleteServiceCreatePromotion(context) {
        context.commit('deleteServiceCreatePromotion')
    },
    totalServiceCreatePromotion(context) {
        context.commit('totalServiceCreatePromotion')
    },
    /************************** */
    showModalConfirm(context) {
        context.commit('showModalConfirm')
    },
    resetVoucher(context) {
        context.commit('resetVoucher')
    },
    /*************************************** */
    getVouchers(context, data) {
        context.commit('getVouchers', data.page)
    },
    createVoucherService(context) {
        context.commit('createVoucherService')
    },
    createVoucherPromotion(context) {
        context.commit('createVoucherPromotion')
    },
    showModalDeleteVoucher(context, data) {
        context.commit('showModalDeleteVoucher', data.id)
    },
    deleteVoucher(context) {
        context.commit('deleteVoucher')
        setTimeout(function () {
            context.commit('getVouchers', 1)
        }, 1000)
    },
    showVoucherButton(context) {
        context.commit('showVoucherButton')
    },
    boleta(context, data) {
        context.commit('boleta', data.id)
    },
    boletaPdf(context, data) {
        context.commit('boletaPdf', data.id)
    },
    cajaZ(context, data) {
        context.commit('cajaZ', data.id)
        context.commit('totalVoucherPersonal', data.id)
    },
    listaVoucher(context, data) {
        context.commit('listaVoucher', data.id)
    },
    totalVoucherPersonal(context) {
        context.commit('totalVoucherPersonal')
    },
    detailPersonalVoucher(context, data) {
        context.commit('detailPersonalVoucher', data)
    },
    editVoucher(context, data) {
        context.commit('editVoucher', data.voucherLocal)
    },
    updateVoucher(context, data) {
        context.commit('updateVoucher', data.id)
        setTimeout(function () {
            context.commit('getVouchersImpagos', data)
        }, 1000)
    },
    getVouchersImpagos(context, data) {
        context.commit('getVouchersImpagos', data)
    },
    /***********************************************/
    selectedDate(context, data) {
        context.commit('selectedDate', data)
    },
    createVoucherSession(context, data) {
        // context.commit('addService')
        context.commit('createVoucherSession', data)
    },

    addToCart(context, data) {
        context.commit('addToCart', data)
    },
    removeFromCart(context, data) {
        context.commit('removeFromCart', data)
    },
    removeFromPost(context, data) {
        context.commit('removeFromPost', data)
    },
    createMail(context) {
        context.commit('createMail')
    },
    canSendMail(context, data) {
        context.commit('canSendMail', data)
        setTimeout(function () {
            context.commit('getUsers', 1)
        }, 1000)
    },
    /*************seccion de productos***************** */
    getProducts(context, data) {
        context.commit('getProducts', data.page)
    },
    createProduct(context) {
        context.commit('createProduct')
        setTimeout(function () {
            context.commit('getProducts', 1)
        }, 1000)
    },
    editProduct(context, data) {
        context.commit('editProduct', data)
    },
    editInventory(context, data) {
        context.commit('editInventory', data)
    },
    updateProduct(context, data) {
        context.commit('updateProduct')
        setTimeout(function () {
            context.commit('getProducts', data.page)
        }, 1000)
    },
    modalDeleteProduct(context, data) {
        context.commit('modalDeleteProduct', data.id)
    },
    deleteProduct(context, data) {
        context.commit('deleteProduct', data.id)
    },
    changePageProduct(context, data) {
        context.commit('paginate', data.page)
        context.commit('getProducts', data.page)
    },
    /*************seccion de inventarios***************** */
    getInventories(context, data) {
        context.commit('getInventories', data.page)
    },
    createInventory(context) {
        context.commit('createInventory')
    },
    deleteInventory(context, data) {
        context.commit('deleteInventory', data.id)
    },
    changePageInventory(context, data) {
        context.commit('paginate', data.page)
        context.commit('getInventories', data.page)
    },
    async uploadInvoice(context) {
        await context.commit('uploadInvoice')
    },
    /***************************** */
    fileChange(context, data) {
        context.commit('fileChange', data.evt)
    },
    uploadPhoto(context) {
        context.commit('uploadPhoto')
        setTimeout(function () {
            //context.commit('getPhotos', null )
        }, 5000)
    },
    generateKey(context, data) {
        context.commit('generateKey', data.id)
    },
    resetIp(context, data) {
        context.commit('resetIp', data.id)
    },
    canBlockIp(context, data) {
        context.commit('canBlockIp', data)
        setTimeout(function () {
            context.commit('getUsers', 1)
        }, 1000)
    },
    setSelectedImage(context, value) {
        context.commit('setSelectedImage', value)
    },
    deleteImage(context, data) {
        context.commit('deleteImage', data)
        setTimeout(function () {
            context.commit('getClients', 1)
        }, 1000)
    },

    createSupplier(context) {
        context.commit('createSupplier')
        setTimeout(function () {
            context.commit('getSuppliers', 1)
        }, 1000)
    },
    getSuppliers(context, data) {
        context.commit('getSuppliers', data.page)
    },
    changePageSupplier(context, data) {
        context.commit('paginate', data.page)
        context.commit('getSuppliers', data.page)
    },

    createUtility(context) {
        context.commit('createUtility')
        setTimeout(function () {
            context.commit('getProducts', 1)
        }, 1000)
    },
    getUtilities(context, data) {
        context.commit('getUtilities', data)
    },

    createFlete(context) {
        context.commit('createFlete')
        setTimeout(function () {
            context.commit('getProducts', 1)
        }, 1000)
    },
    getFletes(context, data) {
        context.commit('getFletes', data)
    },

    createPaymentMethods(context) {
        context.commit('createPaymentMethods')
    },
    updatePaymentMethods(context, data) {
        context.commit('updatePaymentMethods')
        setTimeout(function () {
            context.commit('getPayments', data.page)
        }, 1000)
    },
    editPayment(context, data) {
        context.commit('editPayment', data)
    },
    getPayments(context, data) {
        context.commit('getPayments', data.page)
    },
    changePagePayment(context, data) {
        context.commit('paginate', data.page)
        context.commit('getPayments', data.page)
    },

    createDiscounts(context) {
        context.commit('createDiscounts')
    },

    //Sales
    sumQuantity(context) {
        context.commit('sumQuantity')
    },
    addCart(context){
        context.commit('addCart')
    },
    removeCart(context, data) {
        context.commit('removeCart', data)
    },
    createSale(context, data) {
        context.commit('createSale', data)
    },
    allSales(context, data) {
        context.commit('allSales', data)
    },
    changePageSales(context, data) {
        context.commit('paginate', data.page)
        context.commit('allSales', data.page)
    },
    generateReceipt(context, data) {
        context.commit('generateReceipt', data.id)
    },
    modalDeleteSale(context, data) {
        context.commit('modalDeleteSale', data.id)
    },

    deleteSale(context, data) {
        context.commit('deleteSale', data.id)
    },
    boxClosureZ(context) {
        context.commit('boxClosureZ')
    },
}
