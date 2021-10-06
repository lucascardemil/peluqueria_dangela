import state from "./state"

export default { //methods
    /******************************* */
    countUser(context){
        context.commit('countUser')
    },
    countUserService(context){
        context.commit('countUserService')
    },
    showServicesByMonth(context){
        context.commit('showServicesByMonth')
    },
    showUsersByServices(context){
        context.commit('showUsersByServices')
    },
    /*************seccion de categorias***************** */
    getCategories(context, data){
        context.commit('getCategories', data.page)
    },
    createCategory(context){
        context.commit('createCategory')
        setTimeout(function(){
            context.commit('getCategories', 1)
        }, 1000)

    },
    editCategory(context, data){
        context.commit('editCategory', data.categoryLocal)
    },
    updateCategory(context, data){
        context.commit('updateCategory', data.id)
        setTimeout(function(){
            context.commit('getCategories', 1)
        }, 1000)
    },
    deleteCategory(context, data){
        context.commit('deleteCategory', data.id)
        setTimeout(function(){
            context.commit('getCategories', 1)
        }, 1000)
    },
    changePageCategory(context, data){
        context.commit('paginate', data.page)
        context.commit('getCategories', data.page)
    },
    /*************seccion de promociones***************** */
    getPromotions(context, data){
        context.commit('getPromotions', data.page)
    },
    createPromotion(context){
        context.commit('createPromotion')
        setTimeout(function(){
            context.commit('getPromotions', 1)
        }, 1000)

    },
    editPromotion(context, data){
        context.commit('editPromotion', data.id)
    },
    updatePromotion(context, data){
        context.commit('updatePromotion', data.id)
        setTimeout(function(){
            context.commit('getPromotions', 1)
        }, 1000)
    },
    deletePromotion(context, data){
        context.commit('deletePromotion', data.id)
        setTimeout(function(){
            context.commit('getPromotions', 1)
        }, 1000)
    },
    deletePromotionEdit(context, data){
        context.commit('deletePromotionEdit', data.id)
        context.commit('editPromotion', data.id_promo)
        setTimeout(function(){
            context.commit('getPromotions', 1)
        }, 1000)
    },
    changePagePromotion(context, data){
        context.commit('paginate', data.page)
        context.commit('getPromotions', data.page)
    },
    /*************seccion de personales***************** */
    getPersonals(context, data){
        context.commit('getPersonals', data.page)
    },
    createPersonal(context){
        context.commit('createPersonal')
        setTimeout(function(){
            context.commit('getPersonals', 1)
        }, 1000)
    },
    editPersonal(context, data){
        context.commit('editPersonal', data.personalLocal)
    },
    updatePersonal(context, data){
        context.commit('updatePersonal', data.id)
        setTimeout(function(){
            context.commit('getPersonals', 1)
        }, 1000)
    },
    deletePersonal(context, data){
        context.commit('deletePersonal', data.id)
        setTimeout(function(){
            context.commit('getPersonals', 1)
        }, 1000)
    },
    changePagePersonal(context, data){
        context.commit('paginate', data.page)
        context.commit('getPersonals', data.page)
    },
    /******************************** */
    allCategories(context){
        context.commit('allCategories')
    },
    allIsSession(context){
        context.commit('allIsSession')
    },
    setCategory(context, data){
        context.commit('setCategory', data)
    },
    setCategoryPos(context, data){
        context.commit('setCategoryPos', data)
    },
    allCompanies(context){
        context.commit('allCompanies')
    },
    setCompany(context, data){
        context.commit('setCompany', data)
    },
    allProfessions(context){
        context.commit('allProfessions')
    },
    setProfession(context, data){
        context.commit('setProfession', data)
    },
    allServices(context){
        context.commit('allServices')
    },
    setService(context, data){
        context.commit('setService', data)
    },
    allPromotions(context){
        context.commit('allPromotions')
    },
    setPromotion(context, data){
        context.commit('setPromotion', data)
    },
    setPromotionPos(context, data){
        context.commit('setPromotionPos', data)
    },
    allServicesPromotion(context){
        context.commit('allServicesPromotion')
    },
    allPersonals(context){
        context.commit('allPersonals')
    },
    setPersonal(context, data){
        context.commit('setPersonal', data)
    },
    allBrands(context){
        context.commit('allBrands')
    },
    setBrand(context, data){
        context.commit('setBrand', data)
    },
    allLaboratories(context){
        context.commit('allLaboratories')
    },
    setLaboratory(context, data){
        context.commit('setLaboratory', data)
    },
    allUnits(context){
        context.commit('allUnits')
    },
    setUnit(context, data){
        context.commit('setUnit', data)
    },
    allProducts(context){
        context.commit('allProducts')
    },
    setProduct(context, data){
        context.commit('setProduct', data)
    },
    allCodes(context){
        context.commit('allCodes')
    },
    setCode(context, data){
        context.commit('setCode', data)
    },
    allTemplates(context){
        context.commit('allTemplates')
    },
    setTemplate(context, data){
        context.commit('setTemplate', data)
    },
    /************************************* */
    getCompanies(context, data){
        context.commit('getCompanies', data.page)
    },
    createCompany(context){
        context.commit('createCompany')
        setTimeout(function(){
            context.commit('getCompanies', 1)
        }, 1000)
    },
    editCompany(context, data){
        context.commit('editCompany', data.companyLocal)
    },
    updateCompany(context, data){
        context.commit('updateCompany', data.id)
        setTimeout(function(){
            context.commit('getCompanies', 1)
        }, 1000)
    },
    deleteCompany(context, data){
        context.commit('deleteCompany', data.id)
        setTimeout(function(){
            context.commit('getCompanies', 1)
        }, 1000)
    },
    changePageCompany(context, data){
        context.commit('paginate', data.page)
        context.commit('getCompanies', data.page)
    },
    
    /************************************* */
    getProfessions(context, data){
        context.commit('getProfessions', data.page)
    },
    createProfession(context){
        context.commit('createProfession')
        setTimeout(function(){
            context.commit('getProfessions', 1)
        }, 1000)
    },
    editProfession(context, data){
        context.commit('editProfession', data.professionLocal)
    },
    updateProfession(context, data){
        context.commit('updateProfession', data.id)
        setTimeout(function(){
            context.commit('getProfessions', 1)
        }, 1000)
    },
    deleteProfession(context, data){
        context.commit('deleteProfession', data.id)
        setTimeout(function(){
            context.commit('getProfessions', 1)
        }, 1000)
    },
    changePageProfession(context, data){
        context.commit('paginate', data.page)
        context.commit('getProfessions', data.page)
    },
    /******************************************** */
    getClients(context, data){
        context.commit('getClients', data.page)
    },
    showClient(context, data){
        context.commit('showClient', data.id)
    },
    createClient(context){
        context.commit('createClient')
        setTimeout(function(){
            context.commit('getClients', 1)
        }, 1000)
    },
    editClient(context, data){
        context.commit('editClient', data.clientLocal)
    },
    updateClient(context, data){
        context.commit('updateClient', data.id)
        setTimeout(function(){
            context.commit('getClients', 1)
        }, 1000)
    },
    deleteClient(context, data){
        context.commit('deleteClient', data.id)
        setTimeout(function(){
            context.commit('getClients', 1)
        }, 1000)
    },
    
    
    getUsers(context, data){
        context.commit('getUsers', data.page)
    },
    showUser(context, data){
        context.commit('showUser', data.id)
    },
    createUser(context){
        context.commit('createUser')
        setTimeout(function(){
            context.commit('getUsers', 1)
        }, 1000)
    },
    editUser(context, data){
        context.commit('editUser', data.userLocal)
    },
    updateUser(context, data){
        context.commit('updateUser', data.id)
        setTimeout(function(){
            context.commit('getUsers', 1)
        }, 1000)
    },
    updateScoreExchange(context){
        context.commit('updateScoreExchange')
    },
    updateScoreAccumulated(context, data){
        context.commit('createUserService')
        context.commit('updateScoreAccumulated')
        setTimeout(function(){
            context.commit('getUserServices', data.id)
        }, 1000)
    },
    deleteUser(context, data){
        context.commit('deleteUser', data.id)
        setTimeout(function(){
            context.commit('getUsers', 1)
        }, 1000)
    },
    changePageUser(context, data){
        context.commit('paginate', data.page)
        context.commit('getUsers', data.page)
    },
    /***************************************** */
    getServices(context, data){
        context.commit('getServices', data.page)
    },
    showService(context, data){
        context.commit('showService', data.id)
    },
    createService(context){
        context.commit('createService')
        setTimeout(function(){
            context.commit('getServices', 1)
        }, 1000)
    },
    editService(context, data){
        context.commit('editService', data.serviceLocal)
    },
    updateService(context, data){
        context.commit('updateService', data.id)
        setTimeout(function(){
            context.commit('getServices', 1)
        }, 1000)
    },
    deleteService(context, data){
        context.commit('deleteService', data.id)
        setTimeout(function(){
            context.commit('getServices', 1)
        }, 1000)
    },
    changePageService(context, data){
        context.commit('paginate', data.page)
        context.commit('getServices', data.page)
    },
    /********************************************* */
    getUserServices(context, data){
        context.commit('getUserServices', data.id)
        context.commit('getUsersAvaibleServices', data.id)
    },
    /**************seccion de asignación de roles a usuarios */
    getRoles(context, data){
        context.commit('getRoles', data.page)
    },
    createRole(context){
        context.commit('createRole')
        context.commit('getRoles', 1)
    },
    editRole(context, data){
        context.commit('editRole', data.roleLocal)
        context.commit('getAllPermissions')
    },
    updateRole(context, data){
        context.commit('updateRole', data.id)
        context.commit('getRoles', 1)
    },
    deleteRole(context, data){
        context.commit('deleteRole', data.id)
        context.commit('getRoles', 1)
    },
    getAllRoles(context){
        context.commit('getAllRoles')
    },
    getAllPermissions(context){
        context.commit('getAllPermissions')
    },
    getUserRoles(context, data){
        context.commit('getUserRoles', data.id)
    },
    editUserRoles(context, data){
        context.commit('editUserRoles', data.userLocal)
    },
    updateUserRoles(context, data){
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
    showSucursalPanel(context){
        context.commit('showSucursalPanel')
    },
    showClientPanel(context){
        context.commit('showClientPanel')
    },
    showTypeServicePanel(context){
        context.commit('showTypeServicePanel')
    },
    showPromotionPanel(context){
        context.commit('showPromotionPanel')
    },
    showServicePanel(context){
        context.commit('showServicePanel')
    },
    showFinalPanel(context){
        context.commit('showFinalPanel')
    },
    /********************************** */
    addSucursal(context, data){
        context.commit('addSucursal', data.sucursal)
        context.commit('showClientPanel')
    },
    allSucursals(context){
        context.commit('allSucursals')
    },
    setSucursal(context, data){
        context.commit('setSucursal', data)
    },
    allPayments(context){
        context.commit('allPayments')
    },
    setPayment(context, data){
        context.commit('setPayment', data)
    },
    allClients(context){
        context.commit('allClients')
    },
    setClient(context, data){
        context.commit('setClient', data)
    },
    allServiceposts(context){
        context.commit('allServiceposts')
    },
    setServicepost(context, data){
        context.commit('setServicepost', data)
    },
    setServicepromotion(context, data){
        context.commit('setServicepromotion', data)
    },
    allPersonalposts(context){
        context.commit('allPersonalposts')
    },
    setPersonalpost(context, data){
        context.commit('setPersonalpost', data)
    },
    addService(context){
        context.commit('addService')
        context.commit('totalServicePost')
    },
    deleteServicepost(context){
        context.commit('deleteServicepost')
    },
    totalServicePost(context){
        context.commit('totalServicePost')
    },
    addServicePromotion(context){
        context.commit('addServicePromotion')
        context.commit('totalServicePromotion')
    },
    addServicePersonalPromotion(context,data,service){
        context.commit('addServicePersonalPromotion',data,service)
        context.commit('totalServicePost')
    },
    deleteServicePromotion(context){
        context.commit('deleteServicePromotion')
    },
    totalServicePromotion(context){
        context.commit('totalServicePromotion')
    },
    /************************** */
    showModalConfirm(context){
        context.commit('showModalConfirm')
    },
    resetVoucher(context){
        context.commit('resetVoucher')
    },
    /*************************************** */
    getVouchers(context, data){
        context.commit('getVouchers', data.page)
    },
    createVoucher(context){
        context.commit('createVoucher')
    },
    showModalDeleteVoucher(context, data){
        context.commit('showModalDeleteVoucher', data.id)
    },
    deleteVoucher(context){
        context.commit('deleteVoucher')
        setTimeout(function(){
            context.commit('getVouchers', 1)
        }, 1000)
    },
    showVoucherButton(context){
        context.commit('showVoucherButton')
    },
    boleta(context, data){
        context.commit('boleta', data.id)
    },
    boletaPdf(context, data){
        context.commit('boletaPdf', data.id)
    },
    cajaZ(context, data){
        context.commit('cajaZ', data.id)
        context.commit('totalVoucherPersonal', data.id)
    },
    listaVoucher(context, data){
        context.commit('listaVoucher', data.id)
    },
    totalVoucherPersonal(context){
        context.commit('totalVoucherPersonal')
    },
    detailPersonalVoucher(context, data){
        context.commit('detailPersonalVoucher', data)
    },
    editVoucher(context, data){
        context.commit('editVoucher', data.voucherLocal)
    },
    updateVoucher(context, data){
        context.commit('updateVoucher', data.id)
        setTimeout(function(){
            context.commit('getVouchersImpagos',data)
        }, 1000)
    },
    getVouchersImpagos(context,data){
        context.commit('getVouchersImpagos',data)
    },
    /***********************************************/
    selectedDate(context, data){
        context.commit('selectedDate', data)
    },
    createVoucherSession(context, data){
        // context.commit('addService')
        context.commit('createVoucherSession', data)
    },

    addToCart(context, data) {
        context.commit('addToCart', data)
    },
    removeFromCart(context, data) {
        context.commit('removeFromCart', data)
    },
    createMail(context){
        context.commit('createMail')
    },
    canSendMail(context, data){
        context.commit('canSendMail', data)
        setTimeout(function(){
            context.commit('getUsers', 1)
        }, 1000)
    },
    /*************seccion de marcas***************** */
    getBrands(context, data){
        context.commit('getBrands', data.page)
    },
    createBrand(context){
        context.commit('createBrand')
        setTimeout(function(){
            context.commit('getBrands', 1)
            context.commit('allBrands')
        }, 1000)
    },
    editBrand(context, data){
        context.commit('editBrand', data.brandLocal)
    },
    updateBrand(context, data){
        context.commit('updateBrand', data.id)
        setTimeout(function(){
            context.commit('getBrands', 1)
        }, 1000)
    },
    deleteBrand(context, data){
        context.commit('deleteBrand', data.id)
        setTimeout(function(){
            context.commit('getBrands', 1)
        }, 1000)
    },
    changePageBrand(context, data){
        context.commit('paginate', data.page)
        context.commit('getBrands', data.page)
    },
    /*************seccion de laboratorios***************** */
    getLaboratories(context, data){
        context.commit('getLaboratories', data.page)
    },
    createLaboratory(context){
        context.commit('createLaboratory')
        setTimeout(function(){
            context.commit('getLaboratories', 1)
            context.commit('allLaboratories')
        }, 1000)
    },
    editLaboratory(context, data){
        context.commit('editLaboratory', data.laboratoryLocal)
    },
    updateLaboratory(context, data){
        context.commit('updateLaboratory', data.id)
        setTimeout(function(){
            context.commit('getLaboratories', 1)
        }, 1000)
    },
    deleteLaboratory(context, data){
        context.commit('deleteLaboratory', data.id)
        setTimeout(function(){
            context.commit('getLaboratories', 1)
        }, 1000)
    },
    changePageLaboratory(context, data){
        context.commit('paginate', data.page)
        context.commit('getLaboratories', data.page)
    },
    /*************seccion de unidad de medida***************** */
    getUnits(context, data){
        context.commit('getUnits', data.page)
    },
    createUnit(context){
        context.commit('createUnit')
        setTimeout(function(){
            context.commit('getUnits', 1)
            context.commit('allUnits')
        }, 1000)
    },
    editUnit(context, data){
        context.commit('editUnit', data.unitLocal)
    },
    updateUnit(context, data){
        context.commit('updateUnit', data.id)
        setTimeout(function(){
            context.commit('getUnits', 1)
        }, 1000)
    },
    deleteUnit(context, data){
        context.commit('deleteUnit', data.id)
        setTimeout(function(){
            context.commit('getUnits', 1)
        }, 1000)
    },
    changePageUnit(context, data){
        context.commit('paginate', data.page)
        context.commit('getUnits', data.page)
    },
    /*************seccion de productos***************** */
    getProducts(context, data){
        context.commit('getProducts', data.page)
    },
    createProduct(context){
        context.commit('createProduct')
        setTimeout(function(){
            context.commit('getProducts', 1)
            context.commit('allProducts')
        }, 1000)
    },
    editProduct(context, data){
        context.commit('editProduct', data.productLocal)
    },
    updateProduct(context, data){
        context.commit('updateProduct', data.id)
        setTimeout(function(){
            context.commit('getProducts', 1)
        }, 1000)
    },
    deleteProduct(context, data){
        context.commit('deleteProduct', data.id)
        setTimeout(function(){
            context.commit('getProducts', 1)
        }, 1000)
    },
    changePageProduct(context, data){
        context.commit('paginate', data.page)
        context.commit('getProducts', data.page)
    },
    /*************seccion de codigos***************** */
    getCodes(context, data){
        context.commit('getCodes', data.page)
    },
    getAllCodes(context, data){
        context.commit('getAllCodes')
    },
    createCode(context){
        context.commit('createCode')
        setTimeout(function(){
            context.commit('getCodes', 1)
            context.commit('allCodes')
        }, 1000)
    },
    editCode(context, data){
        context.commit('editCode', data.codeLocal)
    },
    updateCode(context, data){
        context.commit('updateCode', data.id)
        setTimeout(function(){
            context.commit('getCodes', 1)
        }, 1000)
    },
    deleteCode(context, data){
        context.commit('deleteCode', data.id)
        setTimeout(function(){
            context.commit('getCodes', 1)
        }, 1000)
    },
    changePageCode(context, data){
        context.commit('paginate', data.page)
        context.commit('getCodes', data.page)
    },
    /*************seccion de plantillas de inventario***************** */
    getTemplates(context, data){
        context.commit('getTemplates', data.page)
    },
    chargeTemplate(context, data){
        context.commit('chargeTemplate')
    },
    createTemplate(context){
        context.commit('createTemplate')
        setTimeout(function(){
            context.commit('getTemplates', 1)
            context.commit('allTemplates')
        }, 1000)
    },
    editTemplate(context, data){
        context.commit('editTemplate', data.templateLocal)
    },
    updateTemplate(context, data){
        context.commit('updateTemplate', data.id)
        setTimeout(function(){
            context.commit('getTemplates', 1)
        }, 1000)
    },
    deleteTemplate(context, data){
        context.commit('deleteTemplate', data.id)
        setTimeout(function(){
            context.commit('getTemplates', 1)
        }, 1000)
    },
    changePageCode(context, data){
        context.commit('paginate', data.page)
        context.commit('getTemplates', data.page)
    },
    /********************************* */
    addCodeTemplate(context, data){
        context.commit('addCodeTemplate', data.codeLocal)
    },
    deleteCodeTemplate(context, data){
        context.commit('deleteCodeTemplate', data.id)
    },
    confirmReduction(context){
        context.commit('confirmReduction')
    },
    /*************seccion de inventarios***************** */
    getInventories(context, data){
        context.commit('getInventories', data)
    },
    getInventories2(context, data){
        context.commit('getInventories2', data.page)
    },
    createInventory(context){
        context.commit('createInventory')
        /*setTimeout(function(){
            context.commit('getInventories2', 1)
        }, 1000)*/
    },
    editInventory(context, data){
        context.commit('editInventory', data.inventoryLocal)
    },
    updateInventory(context, data){
        context.commit('updateInventory', data.id)
        setTimeout(function(){
            context.commit('getInventories2', 1)
        }, 1000)
    },
    deleteInventory(context, data){
        context.commit('deleteInventory', data.id)
        setTimeout(function(){
            context.commit('getInventories2', 1)
        }, 1000)
    },
    detailInventory(context, data){
        context.commit('detailInventory', data.inventoryLocal)
    },
    changePageInventory(context, data){
        context.commit('paginate', data.page)
        context.commit('getInventories2', data.page)
    },
    /********************************* */
    addConsumeProduct(context, data){
        context.commit('addConsumeProduct', data.inventoryLocal)
        setTimeout(function(){
            //context.commit('getInventories', data)
        }, 1000)
    },
    deleteConsumeProduct(context, data){
        context.commit('deleteConsumeProduct', data.id)
    },
    confirmReduction(context){
        context.commit('confirmReduction')
    },
    createReduction(context){
        context.commit('createReduction')
    },
    /***************************** */
    fileChange(context, data){
        context.commit('fileChange', data.evt)
    },
    uploadPhoto(context){
        context.commit('uploadPhoto')
        setTimeout(function(){
            //context.commit('getPhotos', null )
        }, 5000)
    },
}
