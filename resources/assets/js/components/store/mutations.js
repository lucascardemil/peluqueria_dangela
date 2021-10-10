import axios from 'axios'
import toastr from 'toastr'
import moment from 'moment'

var $ = window.jQuery = require('jquery')

var urlRoles = 'roles'
var urlAllRoles = 'roles-all'
var urlUserRoles = 'usersRoles'
var urlAllPermissions = 'permissions'

var urlAllCategory = 'categories-all'
var urlAllIsSession = 'categories-isSession'
var urlAllPromotion = 'promotions-all'
var urlAllPersonal = 'personals-all'
var urlAllCompany = 'companies-all'
var urlAllProfession = 'professions-all'
var urlAllService = 'services-all'
var urlAllServiceCategory = 'services-all-category'
var urlAllUser = 'users-all'

var urlCategory = 'categories'
var urlPromotion = 'promotions'
var urlPromotionServicesEdit = 'promotions-services-edit'
var urlServicepromotion = 'servicepromotions'
var urlPersonal = 'personals'
var urlCompany = 'companies'
var urlProfession = 'professions'

var urlUser = 'users'
var urlCreateUser = 'create-user'
var urlUpdateUser = 'update-user'
var urlService = 'services'
var urlServiceTotal = 'services-total'
var urlServiceTotalByMonth = 'services-total-month'
var urlUserTotal = 'users-total'
var urlUserTotalByServices = 'users-total-services'
var urlUserAvailableService = 'users-available-service'

var urlClientPos = 'clients-pos'
var urlClient = 'clients'
var urlCreateClient = 'create-client'
var urlUpdateClient = 'update-client'



/*********sistema POST*********** */
var urlAllSucursals = 'sucursals-all'
var urlAllClientposts = 'clientposts-all'

var urlAllPayment = 'payments-all'

var urlVoucher = 'vouchers'
var urlVoucherPOST = 'vouchers-post'
var urlVoucherImpagos = 'vouchersimpagos'
var urlClientpost = 'clientposts'
var urlServicepost = 'serviceposts'
var urlPersonalpost = 'personalposts'
var urlFiltroVoucher = 'filtro-voucher'

var urlBoleta = 'ver-voucher'
var urlBoletaPdf  = 'generar-voucher'
var urlCajaZ = 'boxz-sucursal'
var urlListaVoucher = 'lista-voucher'
var urlTotalVoucherPersonal = 'total-vouchers-personal'
var urlDetailVoucherPersonal = 'vouchers-personal'

var urlCorreoMasivo = 'enviar-correo-masivo'
var urlUpload = 'imagenes-mail'

var includeVoucherFiltro =  '&include=serviceposts.service,serviceposts.personalposts.personal'

/***********Inventario** ****/
var urlBrand = 'brands'
var urlAllBrands = 'brands-all'
var urlLaboratory = 'laboratories'
var urlAllLaboratories = 'laboratories-all'
var urlUnit = 'units'
var urlUnits = 'units-all'
var urlProduct = 'products'
var urlAllProducts = 'products-all'
var urlCode = 'codes'
var urlAllCodes = 'codes-all'
var urlTemplate = 'inventories-template'
var urlAllTemplates = 'inventories-template-all'
var urlInventory = 'inventories'

/******consumo inventario***** */
var urlConsumeProduct = 'consumeProduct'

export default { //used for changing the state
    /****** sección select **** */
    /******************************* */
    allCategories(state){
        var url = urlAllCategory
        axios.get(url).then(response => {
            state.optionsCategory = []
            response.data.forEach((category) => {
                state.optionsCategory.push( { label: category.name, value: category.id } )
            });
        });
    },
    allIsSession(state){
        var url = urlAllIsSession
        axios.get(url).then(response => {
            state.optionsIsSession = []
            response.data.forEach((category) => {
                state.optionsIsSession.push( { label: category.name, value: category.id } )
            });
        });
    },
    allPromotions(state){
        var url = urlAllPromotion
        axios.get(url).then(response => {
            state.optionsPromotion = []
            response.data.forEach((promotion) => {
                state.optionsPromotion.push( { label: promotion.name, value: promotion.id } )
            });
        });
    },
    allPersonals(state){
        var url = urlAllPersonal
        axios.get(url).then(response => {
            state.optionsPersonal = []
            response.data.forEach((personal) => {
                state.optionsPersonal.push( { label: personal.name, value: personal.id } )
            });
        });
    },
    allCompanies(state){
        var url = urlAllCompany
        axios.get(url).then(response => {
            state.options = []
            response.data.forEach((company) => {
                state.options.push( { label: company.name, value: company.id } )
            });
        });
    },
    allProfessions(state){
        var url = urlAllProfession
        axios.get(url).then(response => {
            state.optionsProfession = []
            response.data.forEach((profession) => {
                state.optionsProfession.push( { label: profession.name, value: profession.id } )
            });
        });
    },
    allServices(state){
        var url = urlAllService
        axios.get(url).then(response => {
            state.options = []
            response.data.forEach((service) => {
                var name = service.category.name + " - " + service.name
                state.options.push( { label: name, value: service.id } )
            })
        });
    },
    allServicesPromotion(state){
        var url = urlAllService
        axios.get(url).then(response => {
            state.options = []
            response.data.forEach((service) => {
                //if(service.category.name == 'SERVICIO EN PROMOCION'){
                state.options.push( { label: service.name, value: service.id, precio: service.price } )
                //}
            })
        });
    },
    allUsers(state){
        var url = urlAllUser
        axios.get(url).then(response => {
            state.clients = []
            response.data.forEach((client) => {
                var name = client.name
                state.clients.push( { label: name, value: client.id } )
            });
        });
    },
    allBrands(state){
        var url = urlAllBrands
        axios.get(url).then(response => {
            state.optionsBrand = []
            response.data.forEach((brand) => {
                state.optionsBrand.push( { label: brand.name, value: brand.id } )
            });
        });
    },
    allLaboratories(state){
        var url = urlAllLaboratories
        axios.get(url).then(response => {
            state.optionsLaboratory = []
            response.data.forEach((laboratory) => {
                state.optionsLaboratory.push( { label: laboratory.name, value: laboratory.id } )
            });
        });
    },
    allUnits(state){
        var url = urlUnits
        axios.get(url).then(response => {
            state.optionsUnit = []
            response.data.forEach((unit) => {
                state.optionsUnit.push( { label: unit.name, value: unit.id } )
            });
        });
    },
    allProducts(state){
        var url = urlAllProducts
        axios.get(url).then(response => {
            state.optionsProduct = []
            response.data.forEach((product) => {
                state.optionsProduct.push( { label: product.name + ' - ' + product.detail, value: product.id } )
            });
        });
    },
    allCodes(state){
        var url = urlAllCodes + '?include=product,brand,laboratory'
        axios.get(url).then(response => {
            state.optionsCode = []
            response.data.forEach((code) => {
                state.optionsCode.push( {
                    label: code.product.name + ' - ' + code.laboratory.name + ' - ' +
                        '(' + code.product.name + ')' + ' - ' +  code.name + ' - ' + code.detail,
                    value: code.id
                } )
            });
        });
    },
    allTemplates(state){
        var url = urlAllTemplates + '?include=sucursal&filter[sucursal_id]='
        axios.get(url).then(response => {
            state.optionsTemplate = []

            state.optionsTemplate.push( {
                label: 'Todo el inventario',
                value: 0
            } )

            response.data.forEach((template) => {
                state.optionsTemplate.push( {
                    label: template.sucursal.name + ' - ' + template.name,
                    value: template.id
                } )
            });
        });
    },
    setCategory(state, category) {
        state.selectedCategory = category
        if(category != null)
            state.fillService.category_id = category.value
    },
    setCategoryPos(state, category) {
        state.serviceposts = []

        state.selectedCategory = category

        if(category != null){
            state.fillService.category_id = category.value
            var url = urlCategory + '/' + category.value

            axios.get(url).then( response =>{
                response.data.services.forEach((service) => {
                    var name = response.data.name +  ' - ' + service.name
                    state.serviceposts.push(  { label: name, value: service.id, precio: service.price }  )

                    if(response.data.name == 'PROMOCIÓN CERA A' ||
                    response.data.name == 'PROMOCIÓN CERA B' ||
                    response.data.name == 'PROMOCIÓN CERA C' ||
                    response.data.name == 'PROMOCIÓN ROLL-ON D' ||
                    response.data.name == 'PROMOCIÓN ROLL-ON E' ||
                    response.data.name == 'PROMOCIÓN COLORES' ||
                    response.data.name == 'PROMOCIÓN DÍA DE SPA' ||
                    response.data.name == 'PROMOCIÓN PESTAÑAS X 2 $20.0000' ||
                    response.data.name == 'PROMOCIÓN BELLEZA' ||
                    response.data.name == 'PROMOCIÓN I.P.L' ||
                    response.data.name == 'PROMOCIÓN M&M' )
                    {

                        var servicePos = { label: name, value: service.id, precio: service.price }
                        state.selectedServiceposts.push(servicePos)
                    }

                })
            } )
        }
    },
    setPersonal(state, personal) {
        state.selectedPersonal = personal
    },
    setCompany(state, company) {
        state.selectedItem = company
        state.fillUser.company_id=company.value
    },
    setProfession(state, profession) {
        state.selectedProfession = profession
        state.fillUser.profession_id=profession.value
    },
    setService(state, service) {
        state.selectedItem = service
    },
    setPromotion(state, promotion) {
        state.selectedPromotion = promotion
    },
    setPromotionPos(state, promotion) {
        state.servicepromotions = []
        state.selectedPromotion = promotion

        if(promotion != null){
            /* aca se debe hacer la consulta con idpromotion para obtener los servicios */
            var url = urlPromotion + '/' + promotion.value
            var cont_position=0
            axios.get(url).then(response => {
                response.data.servicespromotions.forEach((service) => {
                    // var name = /*response.data.promotion.name +  ' - ' + */service.name
                    state.servicepromotions.push(  { label: service.service.name, value: service.service.id, precio: service.service.price ,position: cont_position,estado: 'NO CONFIRMADO',personal: ''}  )
                    cont_position=cont_position+1
                })
            }).catch(error => {
                    //state.errorsLaravel = error.response.data
            })

            // var url = urlPromotion + '/' + promotion.value
            // axios.get(url).then(response => {
            //     state.servicespromotions = response.data.servicespromotions
            // });


        }
    },
    setUser(state, client) {
        state.selectedUser = client
    },
    setBrand(state, brand) {
        state.selectedBrand = brand
    },
    setLaboratory(state, laboratory) {
        state.selectedLaboratory = laboratory
    },
    setUnit(state, unit) {
        state.selectedUnit = unit
    },
    setProduct(state, product) {
        state.selectedProduct = product
    },
    setCode(state, code) {
        state.selectedCode = code
    },
    setTemplate(state, template) {
        state.selectedTemplate = template
    },
    /****** seccion index con estadisticas **** */
    countUser(state){
        var url = urlUserTotal
        axios.get(url).then( response =>{
            state.countIndex.user = response.data
        } )
    },
    countUserService(state){
        var url = urlServiceTotal
        axios.get(url).then( response =>{
            state.countIndex.service = response.data
        } )
    },
    showServicesByMonth(state){
        var url = urlServiceTotalByMonth
        axios.get(url).then( response =>{
            state.serviceMonth = response.data
        } )
    },
    showUsersByServices(state){
        var url = urlUserTotalByServices
        axios.get(url).then( response =>{
            state.userServices = response.data
        } )
    },
    /******************************* */
    /****** sección categoria **** */
    /******************************* */
    getCategories(state, page){
        var url = urlCategory + '?page=' + page + '&name=' + state.searchCategory.name
        axios.get(url).then(response => {
            console.log(response);
            state.categories = response.data.categories.data
            state.pagination = response.data.pagination
        });
    },
    createCategory(state){
        var url = urlCategory
        axios.post(url, {
            name: state.newCategory.name,
            isSession: state.newCategory.isSession
        }).then(response => {
            state.newCategory.name = ''
            state.newCategory.isSession = ''
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Categoría generada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editCategory(state, category){
        state.fillCategory.id = category.id
        state.fillCategory.name = category.name
        state.fillCategory.isSession = category.isSession
        $("#edit").modal('show')
    },
    updateCategory(state, id){
        var url = urlCategory + '/' + id
        axios.put(url, state.fillCategory).then(response => {
            state.fillCategory = { 'id': '', 'name': '' }
            state.errorsLaravel = [];
            $('#edit').modal('hide')
            toastr.success('Categoría actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteCategory(state, id){
        var url = urlCategory + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Categoría eliminado con éxito')
        })
    },
    /******************************* */
    /****** sección promociones **** */
    /******************************* */
    getPromotions(state, page){
        var url = urlPromotion + '?page=' + page + '&name=' + state.searchPromotion.name
        axios.get(url).then(response => {
            state.promotions = response.data.promotions.data
            state.pagination = response.data.pagination
        });
    },
    createPromotion(state){
        var url = urlPromotion
        var idPromotion=0

        axios.post(url, {
            name: state.newPromotion.name,
            total: state.newPromotion.total,
        }).then(response => {

            idPromotion = response.data
            state.idPromotion = idPromotion
            var url = urlServicepromotion

            state.listServicepromotions.forEach(service => {
                axios.post(url, {
                    promotion_id: idPromotion,
                    service_id: service.id,
                    price: service.precio,
                }).then(response => {
                    toastr.success('Servicio agregado con éxito')
                }).catch(error => {
                    //state.errorsLaravel = error.response.data
                })
            })
            state.listServicepromotions = []
            state.totalPromotion = 0
            state.newPromotion.name = ''
            state.newPromotion.total = 0
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Promoción generada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    showPromotion(state, promotion){
        
    },
    editPromotion(state, id){
        var url = urlPromotion + '/' + id
        state.fillPromotion.id = id
        // state.fillPromotion.total = promotion.total
        axios.get(url).then(response => {
            state.servicespromotions = response.data.servicespromotions
        });
    },
    updatePromotion(state, id){
        var url = urlPromotion + '/' + id
        var total = 0
        if(state.fillPromotion.total > 0){
            total = state.fillPromotion.total
        }else{
            total = state.totalPromotion
        }
        axios.put(url, {
            total: total,
        }).then(response => {
            var url = urlServicepromotion

            state.listServicepromotions.forEach(service => {
                axios.post(url, {
                    promotion_id: id,
                    service_id: service.id,
                    price: service.precio,
                }).then(response => {
                    toastr.success('Servicio agregado con éxito')
                }).catch(error => {
                    //state.errorsLaravel = error.response.data
                })
            })

            state.listServicepromotions = []
            state.totalPromotion = 0
            state.fillPromotion.total = 0
            state.newPromotion.total = 0
            state.errorsLaravel = []


            // state.fillPromotion = { id: '', name: '', total: 0 }
            // state.errorsLaravel = [];
            $('#edit').modal('hide')
            toastr.success('Promoción actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deletePromotion(state, id){
        var url = urlPromotion + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Promoción eliminada con éxito')
        })
    },
    deletePromotionEdit(state, id){
        var url = urlPromotionServicesEdit + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Servicio eliminada con éxito')
        })
    },
    /******************************* */
    /****** sección personal **** */
    /******************************* */
    getPersonals(state, page){
        var url = urlPersonal + '?page=' + page + '&name=' + state.searchPersonal.name
        axios.get(url).then(response => {
            state.personals = response.data.personals.data
            state.pagination = response.data.pagination
        });
    },
    createPersonal(state){
        var url = urlPersonal;
        axios.post(url, {
            name: state.newPersonal.name,
        }).then(response => {
            state.newPersonal.name = ''
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Personal generado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editPersonal(state, personal){
        state.fillPersonal.id = personal.id
        state.fillPersonal.name = personal.name
        $("#edit").modal('show')
    },
    updatePersonal(state, id){
        var url = urlPersonal + '/' + id
        axios.put(url, state.fillPersonal).then(response => {
            state.fillPersonal = { 'id': '', 'name': '' }
            state.errorsLaravel = [];
            $('#edit').modal('hide')
            toastr.success('Personal actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deletePersonal(state, id){
        var url = urlPersonal + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Personal eliminado con éxito');
        })
    },
    /******************************* */
    /****** sección empresas **** */
    /******************************* */
    getCompanies(state, page){
        var url = urlCompany + '?page=' + page + '&name=' + state.searchCompany.name
        axios.get(url).then(response => {
            state.companies = response.data.companies.data
            state.pagination = response.data.pagination
        });
    },
    createCompany(state){
        var url = urlCompany;
        axios.post(url, {
            name: state.newCompany.name,
            // date: state.newCompany.date,
            discount: state.newCompany.discount
        }).then(response => {
            state.newCompany.name = ''
            // state.newCompany.date = ''
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Empresa generada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editCompany(state, company){
        state.fillCompany.id = company.id
        state.fillCompany.name = company.name
        state.fillCompany.date = company.date
        state.fillCompany.discount = company.discount
        $("#edit").modal('show')
    },
    updateCompany(state, id){
        var url = urlCompany + '/' + id
        axios.put(url, state.fillCompany).then(response => {
            state.fillCompany = { 'id': '', 'name': '' }
            state.errorsLaravel = []
            $('#edit').modal('hide')
            toastr.success('Empresa actualizada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteCompany(state, id){
        var url = urlCompany + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Empresa eliminada con éxito');
        })
    },
    /******************************* */
    /****** sección profesiones **** */
    /******************************* */
    getProfessions(state, page){
        var url = urlProfession + '?page=' + page + '&name=' + state.searchProfession.name
        axios.get(url).then(response => {
            state.professions = response.data.professions.data
            state.pagination = response.data.pagination
        });
    },
    createProfession(state){
        var url = urlProfession;
        axios.post(url, {
            name: state.newProfession.name,
            date: state.newProfession.date,
            percentage: state.newProfession.percentage
        }).then(response => {
            state.newProfession.name = ''
            state.newProfession.date = ''
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Profesión generada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editProfession(state, profession){
        state.fillProfession.id = profession.id
        state.fillProfession.name = profession.name
        state.fillProfession.date = profession.date
        state.fillProfession.percentage = profession.percentage
        $("#edit").modal('show')
    },
    updateProfession(state, id){
        var url = urlProfession + '/' + id
        axios.put(url, state.fillProfession).then(response => {
            state.fillProfession = { 'id': '', 'name': '', 'date': '' }
            state.errorsLaravel = []
            $('#edit').modal('hide')
            toastr.success('Profesión actualizada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteProfession(state, id){
        var url = urlProfession + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Profesión eliminada con éxito');
        })
    },
    /****** sección clientes **** */
    /******************************* */
    getClients(state, page){
        
        var url = urlClient + '?page=' + page + '&barcode=' + state.searchClient.barcode
                + '&rut=' + state.searchClient.rut + '&name=' + state.searchClient.name
        axios.get(url).then(response => {
            state.clients = response.data.clients.data
            state.pagination = response.data.pagination
        });
    },
    showClient(state, id){
        var url = urlUser + '/' + id
        axios.get(url).then(response => {
            state.user = response.data
        });
    },
    createClient(state){
        //alert(state.selectedItem.value)
        var company_id = state.selectedItem.value
        var profession_id = state.selectedProfession.value

        var url = urlCreateClient

        axios.post(url, {
            company_id: company_id,
            profession_id: profession_id,
            rut: state.newClient.rut,
            name: state.newClient.name,
            email: state.newClient.email,
            address: state.newClient.address,
            phone: state.newClient.phone,
            birthdate: state.newClient.birthdate,
            sex: state.newClient.sex,
            civil: state.newClient.civil,
            children: state.newClient.children,
            barcode: 0,
            score: state.newClient.score,
            password: '',
            is_convenio: state.newClient.is_convenio
        }).then(response => {
            state.newClient = { company_id: '',profession_id: '', rut: '', name : '', email: '', address: '',
                            phone: '', birthdate: '', sex: '', civil: '', children: 0, barcode: '', password: '',is_convenio:0 };
            state.errorsLaravel = [];
            $('#create').modal('hide');
            toastr.success('Cliente generado con éxito');
        }).catch(error => {
            state.errorsLaravel = error.response.data
            //toastr.error(error.response.data)
        })
    },
    editClient(state, user){
        state.options.forEach((company) => {
            if(company.value === user.company_id)
                state.selectedItem=company
        })
        state.optionsProfession.forEach((profession) => {
            if(profession.value === user.profession_id)
                 state.selectedProfession=profession
        })

        state.fillClient.id = user.id
        state.fillClient.company_id = user.company_id
        state.fillClient.profession_id = user.profession_id
        state.fillClient.rut = user.rut
        state.fillClient.name = user.name
        state.fillClient.email = user.email
        state.fillClient.address = user.address
        state.fillClient.phone = user.phone
        state.fillClient.birthdate = user.birthdate
        state.fillClient.sex = user.sex
        state.fillClient.civil = user.civil
        state.fillClient.children = user.children
        // state.fillClient.barcode = user.barcode
        state.fillClient.score = user.score
        state.fillClient.password = user.password
        state.fillClient.is_convenio = user.is_convenio
        $("#edit").modal('show')
    },
    updateClient(state, id){
        var url = urlUpdateClient + '/' + id;
        axios.put(url, {
            id: state.fillClient.id,
            company_id: state.selectedItem.value,
            profession_id: state.selectedProfession.value,
            rut: state.fillClient.rut,
            name: state.fillClient.name,
            email: state.fillClient.email,
            address: state.fillClient.address,
            phone: state.fillClient.phone,
            birthdate: state.fillClient.birthdate,
            sex: state.fillClient.sex,
            civil: state.fillClient.civil,
            children: state.fillClient.children,
            barcode: 0,
            score: state.fillClient.score,
            is_convenio: state.fillClient.is_convenio
        }).then(response => {
            state.fillClient = { id: '', company_id: '', profession_id: '', rut: '', name : '', email: '', address: '',
            phone: '', birthdate: '', sex: '', civil: '', children: 0, barcode: '', password: '' ,is_convenio: 0};
            state.errorsLaravel = [];
            $('#edit').modal('hide');
            toastr.success('Cliente actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteClient(state, id){
        var url = urlUser + '/' +  id;
        axios.delete(url).then(response => {
            toastr.success('Cliente eliminado con éxito');
        });
    },
    /****** sección usuarios **** */
    /******************************* */
    getUsers(state, page){
        var url = urlUser + '?page=' + page + '&email=' + state.searchUser.email + '&name=' + state.searchUser.name
        axios.get(url).then(response => {
            state.users = response.data.users.data
            state.pagination = response.data.pagination
        });
    },
    createUser(state){
        var url = urlCreateUser
        axios.post(url, {
            name: state.newUser.name,
            rut: state.newUser.rut,
            email: state.newUser.email,
            password: state.newUser.password,
        }).then(response => {
            state.newUser = { name : '', rut: '', email: '', password: ''};
            state.errorsLaravel = [];
            $('#create').modal('hide');
            toastr.success('Usuario generado con éxito');
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editUser(state, user){
        state.fillUser.id = user.id
        state.fillUser.name = user.name
        state.fillUser.email = user.email
        $("#edit").modal('show')
    },
    updateUser(state, id){
        var url = urlUpdateUser + '/' + id;
        axios.put(url, state.fillUser).then(response => {
            state.fillUser = { id: '', name : '', email: '', password: ''};
            state.errorsLaravel = [];
            $('#edit').modal('hide');
            toastr.success('Usuario actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    updateScoreExchange(state){
        var url = urlUser + '/' + state.user.id
        var user = { id: null, company_id: null,profession_id: null, rut: null, name: null, email: null,
                    address: null, phone: null, birthdate: null, sex: null,
                    civil: null, children: null, barcode: null, score: null, is_convenio:null }

        user.id = state.user.id
        user.company_id = state.user.company_id
        user.profession_id = state.user.profession_id
        user.rut = state.user.rut
        user.name = state.user.name
        user.email = state.user.email
        user.address = state.user.address
        user.phone = state.user.phone
        user.birthdate = state.user.birthdate
        user.sex = state.user.sex
        user.civil = state.user.civil
        user.children = state.user.children
        user.score = state.user.score - state.service.score_exchange
        user.barcode = state.user.barcode
        user.is_convenio=state.user.is_convenio
        axios.put(url, user).then(response => {
            state.service = {  name: null, score_exchange: null, score_accumulated: null }
            state.user.score = user.score

            toastr.success('Servicio canjeado con éxito')
            $('#exchange').modal('hide')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    updateScoreAccumulated(state){
        var url = urlUser + '/' + state.user.id
        var user = { id: null, company_id: null,profession_id: null, rut: null, name: null, email: null,
            address: null, phone: null, birthdate: null, sex: null,
            civil: null, children: null, barcode: null, score: null ,is_convenio: null}

        user.id = state.user.id
        user.company_id = state.user.company_id
        user.profession_id = state.user.profession_id
        user.rut = state.user.rut
        user.name = state.user.name
        user.email = state.user.email
        user.address = state.user.address
        user.phone = state.user.phone
        user.birthdate = state.user.birthdate
        user.sex = state.user.sex
        user.civil = state.user.civil
        user.children = state.user.children
        user.score = state.user.score + state.service.score_accumulated
        user.barcode = state.user.barcode
        user.is_convenio=state.user.is_convenio

        axios.put(url, user).then(response => {
            $('#accumulated').modal('hide')
            toastr.success('Servicio canjeado con éxito')

            state.service = {  name: null, score_exchange: null, score_accumulated: null }
            state.user.score = user.score

        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteUser(state, id){
        var url = urlUser + '/' +  id;
        axios.delete(url).then(response => {
            toastr.success('Ususario eliminado con éxito');
        });
    },
    /****** sección servicios **** */
    /******************************* */
    getServices(state, page){
        var url = urlService + '?page=' + page + '&name=' + state.searchService.name;
        axios.get(url).then(response => {
            state.services = response.data.services.data
            state.pagination = response.data.pagination
            if(state.service.length === 1 ){
                state.service.forEach((service) => {
                    state.service = service
                })
            }
            else
                state.service = { score_exchange: null, score_accumulated: null }
        });
    },
    showService(state, id){
        var url = urlService + '/' + id;
        axios.get(url).then(response => {
            state.service = response.data
        });
    },
    createService(state){
        var category_id = null
        if(state.selectedCategory != null){
            category_id = state.selectedCategory.value
        }
        var url = urlService
        if(category_id == null){
            toastr.warning('Debe seleccionar una categoría')
            return
        }
        axios.post(url, {
            category_id: category_id,
            name: state.newService.name,
            score_exchange: state.newService.score_exchange,
            score_accumulated: state.newService.score_accumulated,
            price: state.newService.price,
        }).then(response => {
            state.newService.name = ''
            state.newService.score_exchange = ''
            state.newService.score_accumulated = ''
            state.newService.price = ''
            state.errorsLaravel = []
            state.selectedCategory = null
            $('#create').modal('hide')
            toastr.success('Servicio generado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editService(state, service){
        state.optionsCategory.forEach((category) => {
            if(category.value === service.category_id)
                state.selectedCategory = category
        })

        
        state.fillService.category_id = service.category_id
        state.fillService.id = service.id
        state.fillService.name = service.name
        state.fillService.score_exchange = service.score_exchange
        state.fillService.score_accumulated = service.score_accumulated
        state.fillService.price = service.price
        $("#edit").modal('show')
    },
    updateService(state, id){
        var category_id = state.selectedCategory.value
        state.fillService.category_id = category_id
        var url = urlService + '/' + id
        axios.put(url, state.fillService).then(response => {
            state.fillService = { id: '', category_id: '', name : '', score_exchange: '', score_accumulated: '', price: '' },
            state.selectedItem = null
            state.errorsLaravel = [];
            $('#edit').modal('hide')
            toastr.success('Servicio actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteService(state, id){
        var url = urlService + '/' +  id;
        axios.delete(url).then(response => {
            toastr.success('Servicio eliminado con éxito')
        });
    },
    /******* sección usuarios con servicios*/
    getUserServices(state, id){
        var url = urlUser + '/' + id + '/' + urlService;
        axios.get(url).then(response => {
            state.userServices = response.data
        });
    },
    createUserService(state){
        var url = urlUser + '/' + state.user.id + '/' + urlService + '/' + state.service.id
        var personals = '| '

        state.selectedPersonal.forEach(personal => {
            state.idPersonal = personal.value
            personals += personal.label + ' | '
        })

        axios.put(url,{
                user_id: state.user.id,
                personal_id: state.idPersonal,
                service_id: state.selectedItem.value,
                personal: personals
            } ).then(response => {
                toastr.success('Servicio asociado al usuario con éxito')
                state.errorsLaravel = []
                //alert("Cantidad: " + response.data)
                //comprobar si el cliente adquirió una cierta cantidad de servicios
            if( (response.data % 5) == 0 )
                toastr.warning("Felicidades, ha sido enviado un correo con un descuento especial para usted", {timeOut: 10000});
        }).catch(error => {
            state.errorsLaravel = error.response
            alert(error.response);
        })
    },
    getUsersAvaibleServices(state, id){
        var url = urlUserAvailableService + '/' + id
        axios.get(url).then(response => {
            state.userScoreServices = response.data
        });
    },
    /****** sección de control de roles **** */
    /******************************* */
    getRoles(state, page){
        var url = urlRoles + '?page=' + page
        axios.get(url).then(response => {
            state.roles = response.data.roles.data
            state.pagination = response.data.pagination
        });
    },
    createRole(state){
        var url = urlRoles
        axios.post(url, {
            name: state.newRole.name,
            description: state.newRole.description,
            slug: state.newRole.slug,
        }).then(response => {
            state.newRole.name = ''
            state.newRole.description = ''
            state.newRole.slug = ''
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Rol generado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editRole(state, role){
        var permissions = []
        state.checkedSpecialRole = ''
        state.checkedPermissions = []
        state.fillRole.id = role.id
        state.fillRole.name = role.name
        state.fillRole.description = role.description
        state.fillRole.slug = role.slug
        state.checkedSpecialRole = role.special
        role.permissions.forEach(permission => {
            permissions.push(permission.id)
        })
        state.checkedPermissions = permissions
        $("#edit").modal('show')
    },
    updateRole(state, id){
        var url = urlRoles + '/' + id
        state.fillRole.special = state.checkedSpecialRole
        state.fillRole.permissions = state.checkedPermissions
        axios.put(url, state.fillRole).then(response => {
            state.fillRole = { id: '', name: '', descriptiom: '', slug: '' }
            state.errorsLaravel = [];
            $('#edit').modal('hide')
            toastr.success('Rol actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteRole(state, id){
        var url = urlRoles + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Rol eliminado con éxito');
        })
    },
    getAllRoles(state){
        var url = urlAllRoles
        axios.get(url).then(response => {
            state.roles = response.data
        });
    },
    getUserRoles(state, id){
        var url = urlUser + '/' + id + '/' + urlRoles
        axios.get(url).then(response => {
            state.userRoles = response.data
            $("#showRoles").modal('show')
        });
    },
    editUserRoles(state, user){
        var roles = []
        state.checkedRoles = []
        state.fillUserRoles.id = user.id
        state.fillUserRoles.name = user.name
        user.roles.forEach(role => {
            roles.push(role.id)
        })
        state.checkedRoles = roles
        $("#editRoles").modal('show')
    },
    updateUserRoles(state, id){
        var url = urlUserRoles + '/' + id;
        axios.put(url, state.checkedRoles).then(response => {
            state.checkedRoles = []
            $('#editRoles').modal('hide')
            toastr.success('Roles asignados con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    getAllPermissions(state){
        var url = urlAllPermissions
        axios.get(url).then(response => {
            state.permissions = response.data
        });
    },
    setRoles(state, arr) {
    	state.checkedRoles = arr
    },
    setSpecialRole(state, value) {
        if(value === 'no-access' || value === 'all-access'){
            state.checkedPermissions = []
            $('input[name="permission"]').prop('disabled', true)
        }else{
            $('input[name="permission"]').prop('disabled', false)
        }
    	state.checkedSpecialRole = value
    },
    setPermissions(state, arr) {
        state.checkedSpecialRole = ''
    	state.checkedPermissions = arr
    },

    /****** sección paginacion **** */
    /******************************* */
    paginate(state, page){
        state.pagination.current_page = page
    },
    /**************************************** */
    /**************************************** */
    /*********** sección post ************** */
    /*************************************** */
    /*************************************** */

    /******************************* */
    /****** sección clientes **** */
    /******************************* */
    // getClients(state, page){
    //     var url = urlClient + '?page=' + page
    //     axios.get(url).then(response => {
    //         state.clients = response.data.clients.data
    //         state.pagination = response.data.pagination
    //     });
    // },
    // createClient(state){
    //     var url = urlClient
    //     axios.post(url, {
    //         name: state.newClient.name,
    //     }).then(response => {
    //         state.newClient.name = ''
    //         state.errorsLaravel = []
    //         $('#createclient').modal('hide')
    //         toastr.success('Cliente generado con éxito')
    //     }).catch(error => {
    //         state.errorsLaravel = error.response.data
    //     })
    // },
    // editClient(state, client){
    //     state.fillClient.id = client.id
    //     state.fillClient.name = client.name
    //     $("#editClient").modal('show')
    // },
    // updateClient(state, id){
    //     var url = urlClient + '/' + id
    //     axios.put(url, state.fillClient).then(response => {
    //         state.fillClient = { id: '', name: '' }
    //         state.errorsLaravel = [];
    //         $('#editClient').modal('hide')
    //         toastr.success('Cliente actualizado con éxito')
    //     }).catch(error => {
    //         state.errorsLaravel = error.response.data
    //     })
    // },
    // deleteClient(state, id){
    //     var url = urlClient + '/' +  id
    //     axios.delete(url).then(response => {
    //         toastr.success('Cliente eliminado con éxito')
    //     })
    // },
    /*************************POST********************** */
    /**************************************************** */
    /**************************************************** */
    /**************************************************** */

    /********* seccion de paneles *****/
    showSucursalPanel(state){
        state.clientShow = false
        state.sucursalShow = true
        state.typeServiceShow = false
        state.promotionShow = false
        state.serviceShow = false
        state.personalShow = false
        state.finalShow = false
    },
    showClientPanel(state){
        state.clientShow = true
        state.sucursalShow = false
        state.typeServiceShow = false
        state.promotionShow = false
        state.serviceShow = false
        state.personalShow = false
        state.finalShow = false
    },
    showTypeServicePanel(state){
        state.clientShow = false
        state.sucursalShow = false
        state.typeServiceShow = true
        state.promotionShow = false
        state.serviceShow = false
        state.personalShow = false
        state.finalShow = false
    },
    showPromotionPanel(state){
        state.clientShow = false
        state.sucursalShow = false
        state.typeServiceShow = false
        state.promotionShow = true
        state.serviceShow = false
        state.personalShow = false
        state.finalShow = false
        state.selectedTypeService={id: 1, name: 'PROMOTION'}
    },
    showServicePanel(state){
        state.clientShow = false
        state.sucursalShow = false
        state.typeServiceShow = false
        state.promotionShow = false
        state.serviceShow = true
        state.personalShow = true
        state.finalShow = false
        state.selectedTypeService={id: 0, name: 'SERVICE'}
    },
    showFinalPanel(state){
        state.clientShow = false
        state.sucursalShow = false
        state.typeServiceShow = false
        state.promotionShow = false
        state.serviceShow = false
        state.personalShow = false
        state.finalShow = true
    },
    addSucursal(state, sucursal){
        state.selectedSucursal = sucursal
    },
    addTypeService(state, typeService){
        state.selectedTypeService = typeService
    },
    /****** sección select *************** */
    /******************************* */

    /*********sucursales *************/
    allSucursals(state){
        var url = urlAllSucursals
        state.sucursalsSelect = []
        axios.get(url).then(response => {
            state.sucursals = response.data
            response.data.forEach((sucursal) => {
                state.sucursalsSelect.push( { label: sucursal.name, value: sucursal.id } )
            })
            /*response.data.forEach((category) => {
                state.options.push( { label: category.name, value: category.id } )
            });*/
        });
    },
    setSucursal(state, sucursal) {
        state.selectedSucursal = sucursal
    },
    /***** métodos de pago *********/
    allPayments(state){
        var url = urlAllPayment
        axios.get(url).then(response => {
            state.payments = []
            response.data.forEach((payment) => {
                state.payments.push( { label: payment.name, value: payment.id } )
            });
        });
    },
    setPayment(state, payment) {
        state.selectedPayment = payment
    },
    /************ clientes *************/
    allClients(state){
        var url = urlAllClientposts
        axios.get(url).then(response => {
            state.clients = []
            response.data.forEach((client) => {
                state.clients.push( { label: client.name, value: client.id, nombre: client.name } )
            });
        });
    },
    setClient(state, client) {
        state.selectedClient = client
    },
    /********* servicios *************/
    allServiceposts(state){
        if(state.selectedCategory != null){
            var url = urlAllServiceCategory + '/' + state.selectedCategory.value
            axios.get(url).then(response => {
                state.serviceposts = []
                if (response.data != null) {
                    response.data.forEach((service) => {
                        state.serviceposts.push( { label: service.name, value: service.id, precio: service.price } )
                    });
                }
            });
        }
    },
    setServicepost(state, service) {
        state.selectedServiceposts = service
        if (state.selectedServiceposts != null) {
            state.newVoucherSession.price = state.selectedServiceposts.precio
        }
    },
    setServicepromotion(state, service) {
        state.selectedServicepromotions = service
    },
    /********* personales *************/
    allPersonalposts(state){
        var url = urlAllPersonal
        state.personalposts = []
        state.personalposts.push( { label: 'TODOS', value: null } )

        axios.get(url).then(response => {
            response.data.forEach((personal) => {
                state.personalposts.push( { label: personal.name, value: personal.id } )
            });
        });
    },
    setPersonalpost(state, personal) {
        state.selectedPersonalposts = personal
    },
    /**********sección agregar servicios */
    addService(state){

        // state.selectedServiceposts.forEach(service => {

        //     state.listServiceposts.push({
        //         id: service.value,
        //         nombre: service.label,
        //         precio: service.precio,
        //         personal: state.selectedPersonalposts,
        //     })
        // })

        

        state.listServiceposts.push({
            id: state.selectedServiceposts.value,
            nombre: state.selectedServiceposts.label,
            precio: state.selectedServiceposts.precio,
            personal: state.selectedPersonalposts,
        })

        //toastr.success('Servicio Agregado con Éxito')
        state.selectedServiceposts = null
        state.selectedPersonalposts = null
    },
    addServicePersonalPromotion(state,service){
        state.listServiceposts.push({
                id: service.value,
                nombre: service.label,
                precio: service.precio,
                personal: [state.selectedPersonalposts],
            })
        //dejando inactivo el servicio confirmado
        state.servicepromotions.forEach(s => {
            if(s.value==service.value){
                s.estado='CONFIRMADO'
                s.personal=state.selectedPersonalposts.label
            }
        })
        state.selectedPersonalposts = null
    },
    deleteServicepost(state){
        state.listServiceposts.pop()
    },
    /****** suma total */
    //Aqui se esta preguntando por usuario para acceder a su compañia y de su compañia al descuento
    totalServicePost(state){
        var url = urlUser + '/' + state.selectedClient.value
        axios.get(url).then(response => {
            if(response.data.is_convenio){
               state.descuento=response.data.company.discount
            }else{
                state.descuento=0
            }
        }).then(response => {
            var total = 0
            state.totalPost = 0
            state.listServiceposts.forEach(service => {
                total += parseInt(service.precio)
            })
            //aplicando descuento en el total
            state.totalPost = total*(100-state.descuento)/100
        }).catch(error => {
        })
    },
    addServicePromotion(state){

        if(state.selectedServicepromotions != null){

            state.selectedServicepromotions.forEach(service => {

                state.listServicepromotions.push({
                    id: service.value,
                    nombre: service.label,
                    precio: service.precio,
                })
            })
        
            state.selectedServicepromotions = null
        }
    },
    deleteServicePromotion(state){
        state.listServicepromotions.pop()
        state.totalPromotion = 0
    },


    /****** suma total */
    totalServicePromotion(state){
        var totalnew = 0
        var totalold = 0
        state.totalPromotion = 0

        state.servicespromotions.forEach(service1 => {
            totalold += parseInt(service1.price)
        })
        state.listServicepromotions.forEach(service2 => {
            totalnew += parseInt(service2.precio)
        })
        //state.newPromotion.total = total
        state.totalPromotion = totalnew + totalold
    },



    /*******seccion sucursales */
    showModalConfirm(state){
        $('#confirmVoucher').modal('show')
    },
    resetVoucher(state){
        state.codeVoucher = false
        state.sucursalShow = true

        state.selectedClient = null
        state.selectedSucursal.name = null
        state.selectedPayment = null
    },
    /*************************************** */
    getVouchers(state, page){
        if(state.searchVoucher.id == '' || state.searchVoucher.id == null)
            var url = urlVoucher + '?page=' + page
        else
            var url = urlVoucher + '?page=' + page + '&id=' + state.searchVoucher.id
        axios.get(url).then(response => {
            state.vouchers = response.data.vouchers.data
            state.pagination = response.data.pagination
        })
    },
    getVouchersImpagos(state,data){
        var url = urlVoucherImpagos +'/'+state.selectedClient.value
        state.vouchers=[]

        axios.get(url).then(response => {
            state.data = response.data
            var data = response.data

            data.forEach(voucher => {
                var descuento=0
                var personal=""
                var service=""
                voucher.serviceposts.forEach(s => {
                    //descuento = s.descuento
                    service = s.service.name
                    s.personalposts.forEach(p => {
                        personal = p.personal.name
                    })
                })

                state.vouchers.push({
                    id: voucher.id,
                    name: voucher.name,
                    aditional: voucher.aditional,
                    //descuento: descuento,
                    service: service, 
                    created_at: voucher.created_at,
                    total: voucher.total,
                    personal: personal,
                    payment: voucher.payment,
                    is_paid: voucher.is_paid,
                })

            });
        });
    },


    createVoucher(state){
        var url = urlVoucherPOST

        if (state.totalPost > 0) {
            let session = {
                total: state.totalPost,
                service: state.listServiceposts,
                payment: state.selectedPayment.label,
                sucursal_id: state.selectedSucursal.id,
                client_id: state.selectedClient.value,
                client_name: 'Voucher ' + state.selectedClient.nombre,
            }
            axios.post(url, session)
                .then(response => {
                    state.listServiceposts = []
                    state.totalPost = 0
                    toastr.success('Venta generada con exito!')
                    $('#create').modal('hide')
                })
                .catch(error => {
                    toastr.error(error.response.data)
                })
        }
    },
    // createVoucher(state){
    //     var url = urlVoucher
    //     state.idVoucher = 0

    //     axios.post(url, {
    //         sucursal_id: state.selectedSucursal.id,
    //         user_id: state.selectedClient.value,
    //         name: 'Voucher ' + state.selectedClient.nombre,
    //         payment: state.selectedPayment.label,
    //         total: state.totalPost,
    //     }).then(response => {
    //         var idVoucher = response.data
    //         state.idVoucher = idVoucher

    //         $('#confirmVoucher').modal('hide')
    //         toastr.success('Voucher generado con éxito')

    //         var url = urlClientpost
    //         axios.post(url, {
    //             voucher_id: idVoucher,
    //             user_id: state.selectedClient.value,
    //         }).then(response => {
    //             //toastr.success('Cliente agregado al voucher con éxito')
    //             var url = urlServicepost

    //             state.listServiceposts.forEach(service => {
    //                 //aplicando descuento a los servicios
    //                 service.precio = service.precio*(100-state.descuento)/100
    //                 axios.post(url, {
    //                     voucher_id: idVoucher,
    //                     service_id: service.id,
    //                     descuento: state.descuento,
    //                     price: service.precio,
    //                 }).then(response => {
    //                     //toastr.success('Servicio agregado con éxito')

    //                     service.personal.forEach(personal => {
    //                         var url = urlPersonalpost
    //                         axios.post(url, {
    //                             servicepost_id: response.data,
    //                             personal_id: personal.value,
    //                         })
    //                         //toastr.success('Personal asociado al servicio con éxito')
    //                     })

    //                 }).catch(error => {
    //                     //state.errorsLaravel = error.response.data
    //                 })
    //             })
    //             state.selectedSucursal = { id: null, name: null }
    //             state.selectedClient = null
    //             state.listServiceposts = []
    //             state.totalPost = 0
    //             state.descuento = 0

    //             state.finalShow = false
    //             state.sucursalShow = false
    //             state.codeVoucher = true

    //         })
    //         .catch(error => {
    //             state.errorsLaravel = error.response.data
    //         })

    //     }).catch(error => {
    //         state.errorsLaravel = error.response.data
    //     })
    // },
    showModalDeleteVoucher(state, id){
        state.idVoucher = id
        $('#modalDeleteVoucher').modal('show')
    },
    deleteVoucher(state){
        var url = urlVoucher + '/' + state.idVoucher
        axios.delete(url).then(response => {
            toastr.success('Voucher eliminada con éxito')
            $('#modalDeleteVoucher').modal('hide')
        })
    },
    showVoucherButton(state){
        state.voucher = null
        var url = urlVoucher + '/' + state.searchVoucher.id
        axios.get(url).then(response => {
            state.voucher = response.data
            //state.dataVoucher = response.data

            /*response.data.voucher.clientposts.forEach(client => {
                state.voucherClient = client.user
            });

            state.voucherServices = response.data.voucher.services*/
            //state.voucherClient = response.data.client

            //alert(state.voucher.name)
           // alert(state.voucherClient.name)


        }).catch(error => {
            toastr.warning('No se encontró el voucher con el código especificado')
        })
    },
    boleta(state, id){
        var url = urlBoleta + '/' + id
        var printWindow = window.open(url);
        printWindow.focus();
        printWindow.print();
    },
    boletaPdf(state, id){
        var url = urlBoletaPdf + '/' + id
        window.location.href = url;
    },
    cajaZ(state, id){
        var url = urlCajaZ + '/' + id
        state.totalCajaZ = 0
        state.cajaServices = []

        axios.get(url).then(response => {
            state.cajaZData = response.data

            state.cajaZData.forEach(voucher => {
                if(voucher.is_paid){
                    state.totalCajaZ += voucher.total
                    voucher.serviceposts.forEach(service => {
                        state.cajaServices.push( {
                            id: service.id,
                            price_service: service.price*100/(100-service.descuento),
                            descuento: service.descuento,
                            price:service.price,
                            name: service.service.name,
                            date: service.created_at,
                            personals: service.personalposts
                        })
                    })
                }
            })
        })
    },
    listaVoucher(state, id){
        var url = urlListaVoucher + '/' + id
        window.location.href = url;
    },
    totalVoucherPersonal(state, id){
        state.sucursalId = id
        var url = urlTotalVoucherPersonal + '/' + id
        state.totalPersonalServices = []
        state.totalPriceService = 0

        axios.get(url).then(response => {
            //state.data = response.data
            var data = response.data
            var contador = 1

            data.forEach(voucher => {

                state.totalPriceService = 0
                state.personalId = 0
                state.personalName = ''


                if(voucher.serviceposts)
                {
                    voucher.serviceposts.forEach(serviceP => {

                        serviceP.personalposts.forEach(personalP => {
                            state.personalId = personalP.personal.id
                            state.personalName = personalP.personal.name
                        })

                        state.totalPriceService += serviceP.service.price

                    });


                }

                state.totalPersonalServices.push({
                    'id': state.personalId,
                    'name': state.personalName,
                    'total': state.totalPriceService
                });

                contador = contador + 1
            });

        })
    },
    detailPersonalVoucher(state, data)
    {
        var url = urlDetailVoucherPersonal + '/' + state.sucursalId + '/' + data.id
        state.detailPersonalServices = []
        state.detailPersonalName = data.name

        axios.get(url).then(response => {
            state.data = response.data
            var data = response.data

            data.forEach(datap => {

                datap.serviceposts.forEach(serviceP => {

                    state.detailPersonalServices.push( {
                        id: serviceP.service.id,
                        name: serviceP.service.name,
                        price: serviceP.service.price  } )

                })


            })

        })
    },
    selectedDate(state, data){
        state.vouchersFilter = []
        state.serviciosPersonal = []
        state.filtroVoucher.total = 0
        var fecha = ''
        var idPersonal = ''
        var contador = 1
        //alert(format)
        if(state.selectedPersonalposts != null){
            if(state.selectedPersonalposts.value != null)
                idPersonal = state.selectedPersonalposts.value
            else
                idPersonal = ''
        }

        if(data.format == 'day')
            fecha = moment(state.fecha.diaSeleccionado).format('YYYY-MM-DD')
        if(data.format == 'month')
            fecha = moment(state.fecha.mesSeleccionado).format('YYYY-MM-DD')
        if(data.format == 'year')
            fecha = moment(state.fecha.anioSellecionado).format('YYYY-MM-DD')

        if(idPersonal == '')
            var url = urlFiltroVoucher + '?filter[' + data.format + ']=' + fecha + '&filter[sucursal_id]=' + data.id +
                    includeVoucherFiltro
        else
            var url = urlFiltroVoucher + '?filter[' + data.format + ']=' + fecha + '&filter[sucursal_id]=' + data.id +
                    '&filter[personal]=' + idPersonal
            + includeVoucherFiltro

        console.log(url)

        if(idPersonal != '')
            axios.get(url).then(response => {
                state.vouchersFilter = response.data

                state.vouchersFilter.forEach(voucher => {

                    voucher.serviceposts.forEach(servicePos => {

                        servicePos.personalposts.forEach(personalPos => {


                            if(personalPos.personal_id == idPersonal)
                            {
                                state.serviciosPersonal.push({
                                    id: contador,
                                    personal: personalPos.personal.name,
                                    name: servicePos.service.name,
                                    price_service: servicePos.service.price,
                                    descuento: servicePos.descuento,
                                    price: servicePos.price,
                                    created_at: servicePos.created_at,
                                })
                                //aplicando descuentos del voucher correspondiente
                                state.filtroVoucher.total += servicePos.price

                                contador += 1
                            }

                        })

                    })
                })

                state.filtroVoucher.iva = state.filtroVoucher.total * 0.19
                state.filtroVoucher.totalNeto =  state.filtroVoucher.total - state.filtroVoucher.iva

                console.log(state.serviciosPersonal)

            })
        else
            axios.get(url).then(response => {
                state.vouchersFilter = response.data

                /*state.vouchers.forEach(voucher => {
                    state.filtroVoucher.total += voucher.total
                })*/

                state.vouchersFilter.forEach(voucher => {

                    voucher.serviceposts.forEach(servicePos => {

                        /*state.serviciosPersonal.push({
                            id: contador,
                            name: servicePos.service.name,
                            price: servicePos.service.price,
                        })*/

                        servicePos.personalposts.forEach(personalPos => {
                            state.serviciosPersonal.push({
                                id: contador,
                                personal: personalPos.personal.name,
                                name: servicePos.service.name,
                                price_service: servicePos.service.price,
                                descuento: servicePos.descuento,
                                price: servicePos.price,
                                created_at: servicePos.created_at,
                            })
                            state.filtroVoucher.total += servicePos.price
                            contador += 1

                        })

                    })

                })

                state.filtroVoucher.iva = state.filtroVoucher.total * 0.19
                state.filtroVoucher.totalNeto =  state.filtroVoucher.total - state.filtroVoucher.iva

                console.log(state.serviciosPersonal)

            })
    },
    getVouchersFiltrado(state){

        var url = urlFiltroVoucher
        axios.get(url).then(response => {
            state.vouchers = response.data

        })
    },

    addToCart(state) {
        if(state.selectedClient != null && 
            state.selectedCategory != null && 
            state.selectedPersonalposts != null && 
            state.selectedServiceposts != null &&
            state.selectedSucursal != null){

            state.cart.push({
                // service: {
                //     label: state.selectedServiceposts.label,
                //     value: state.selectedServiceposts.value,
                //     price: state.selectedServiceposts.precio
                // },
                service_name: state.selectedServiceposts.label,
                service_id: state.selectedServiceposts.value,
                service_price: state.selectedServiceposts.precio,
                client_name: 'Voucher ' + state.selectedClient.nombre,
                client_id: state.selectedClient.value,
                personal_name: state.selectedPersonalposts.label,
                personal_id: state.selectedPersonalposts.value,
                sucursal_name: state.selectedSucursal.label,
                sucursal_id: state.selectedSucursal.value,
                quantity: parseInt(state.newVoucherSession.quantity)
            })
            state.cartTotal += state.newVoucherSession.price * parseInt(state.newVoucherSession.quantity)


            state.newVoucherSession.price = 0;
            state.newVoucherSession.quantity = 1;
            state.selectedCategory = null;
            state.selectedPersonalposts = null;
            state.selectedServiceposts = null;
        }
    },

    removeFromCart(state, data) {
        let service = state.cart.find(s => s.service_name == data.id)

        state.cartTotal = state.cartTotal - service.service_price

        state.cart.splice(state.cart.indexOf(data.id))
    },

    // createVoucherSession(state){
    //     var url = urlVoucher
    //     state.idVoucher = 0
    //     var total =  state.newVoucherSession.price
    //     var cantidad = state.newVoucherSession.quantity

    //     for (let index = 0; index < cantidad; index++) {

    //         axios.post(url, {
    //             sucursal_id: state.selectedSucursal.value,
    //             user_id: state.selectedClient.value,
    //             name: 'Voucher ' + state.selectedClient.nombre,
    //             is_paid: 0,
    //             total: total,
    //         }).then(response => {
    //             var idVoucher = response.data
    //             state.idVoucher = idVoucher

    //             toastr.success('Voucher generado con éxito')

    //             var url = urlClientpost
    //             axios.post(url, {
    //                 voucher_id: idVoucher,
    //                 user_id: state.selectedClient.value,
    //             }).then(response => {
    //                 //toastr.success('Cliente agregado al voucher con éxito')
    //                 var url = urlServicepost

    //                 state.listServiceposts.forEach(service => {
    //                     axios.post(url, {
    //                         voucher_id: idVoucher,
    //                         service_id: service.id,
    //                         price: total,
    //                     }).then(response => {
    //                         //toastr.success('Servicio agregado con éxito')

    //                         var url = urlPersonalpost
    //                         axios.post(url, {
    //                             servicepost_id: response.data,
    //                             personal_id: service.personal.value,
    //                         })
    //                     }).catch(error => {
    //                         //state.errorsLaravel = error.response.data
    //                     })
    //                 })
    //             })
    //             .catch(error => {
    //                 //state.errorsLaravel = error.response.data
    //             })

    //         }).catch(error => {
    //             //state.errorsLaravel = error.response.data
    //         })
    //     }
    //     state.newVoucherSession= { quantity: 1, price: 0}
    // },

    createVoucherSession(state){
        var url = urlVoucher

        if (state.cartTotal > 0) {
            let session = {
                total: state.cartTotal,
                service: state.cart
            }
            axios.post(url, session)
                .then(response => {
                    state.cart = []
                    state.cartTotal = 0
                    toastr.success('Venta generada con exito!')
                    $('#create').modal('hide')
                })
                .catch(error => {
                    toastr.error(error.response.data)
                })
        }
    },






    editVoucher(state, voucher){

        state.fillVoucher.id = voucher.id
        state.fillVoucher.name = voucher.name
        // state.fillVoucher.aditional = voucher.aditional
        state.fillVoucher.total = voucher.total
        state.fillVoucher.payment = voucher.payment
        state.fillVoucher.personal = voucher.personal
        state.fillVoucher.is_paid = !voucher.is_paid
        

        state.personalposts.forEach(personal => {
            if (personal.label == state.fillVoucher.personal) {
                state.selectedPersonalposts = personal
            }
        })

        state.payments.forEach(payment => {
            if (payment.label == state.fillVoucher.payment) {
                state.selectedPayment = payment
            }else{
                state.selectedPayment = null
            }
        })

        $("#edit").modal('show')
    },
    updateVoucher(state, id){
        var url = urlVoucher + '/' + id

        state.fillVoucher.personal = state.selectedPersonalposts.value
        state.fillVoucher.payment = state.selectedPayment.label

        axios.put(url, state.fillVoucher).then(response => {
            state.fillVoucher = { 
                id: '', 
                name: '', 
                aditional: '',
                payment: '',
                is_paid: 0 
            }
            state.errorsLaravel = [];
            $('#edit').modal('hide')
            toastr.success('Pago realizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    /***************************************** */
    /****************************************** */
    /***********INVENTARIO******** */
    /***************************************** */
    /***************************************** */
    /*****************Marca***************** */
    /******************************* */
    getBrands(state, page){
        var url = urlBrand + '?page=' + page + '&name=' + state.searchBrand.name
        axios.get(url).then(response => {
            state.brands = response.data.brands.data
            state.pagination = response.data.pagination
        });
    },
    createBrand(state){
        var url = urlBrand
        axios.post(url, {
            name: state.newBrand.name,
        }).then(response => {
            state.newBrand.name = ''
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Marca generada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editBrand(state, brand){
        state.fillBrand.id = brand.id
        state.fillBrand.name = brand.name
        $("#edit").modal('show')
    },
    updateBrand(state, id){
        var url = urlBrand + '/' + id
        axios.put(url, state.fillBrand).then(response => {
            state.fillBrand = { 'id': '', 'name': '' }
            state.errorsLaravel = [];
            $('#edit').modal('hide')
            toastr.success('Marca actualizada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteBrand(state, id){
        var url = urlBrand + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Marca eliminada con éxito')
        })
    },
    /*****************Laboratorio***************** */
    /******************************* */
    getLaboratories(state, page){
        var url = urlLaboratory + '?page=' + page + '&name=' + state.searchLaboratory.name
        axios.get(url).then(response => {
            state.laboratories = response.data.laboratories.data
            state.pagination = response.data.pagination
        });
    },
    createLaboratory(state){
        var url = urlLaboratory
        axios.post(url, {
            name: state.newLaboratory.name,
        }).then(response => {
            state.newLaboratory.name = ''
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Laboratorio generado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editLaboratory(state, laboratory){
        state.fillLaboratory.id = laboratory.id
        state.fillLaboratory.name = laboratory.name
        $("#edit").modal('show')
    },
    updateLaboratory(state, id){
        var url = urlLaboratory + '/' + id
        axios.put(url, state.fillLaboratory).then(response => {
            state.fillLaboratory = { 'id': '', 'name': '' }
            state.errorsLaravel = []
            $('#edit').modal('hide')
            toastr.success('Laboratorio actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteLaboratory(state, id){
        var url = urlLaboratory + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Laboratorio eliminado con éxito')
        })
    },
    /*****************Unidad de Medida***************** */
    /******************************* */
    getUnits(state, page){
        var url = urlUnit + '?page=' + page + '&name=' + state.searchUnit.name
        axios.get(url).then(response => {
            state.units = response.data.units.data
            state.pagination = response.data.pagination
        });
    },
    createUnit(state){
        var url = urlUnit
        axios.post(url, {
            name: state.newUnit.name,
        }).then(response => {
            state.newUnit.name = ''
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Unidad de Medida generada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editUnit(state, unit){
        state.fillUnit.id = unit.id
        state.fillUnit.name = unit.name
        $("#edit").modal('show')
    },
    updateUnit(state, id){
        var url = urlUnit + '/' + id
        axios.put(url, state.fillUnit).then(response => {
            state.fillUnit = { 'id': '', 'name': '' }
            state.errorsLaravel = []
            $('#edit').modal('hide')
            toastr.success('Unidad de Medida actualizada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteUnit(state, id){
        var url = urlUnit + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Unidad de Medida eliminada con éxito')
        })
    },
     /*****************Producto***************** */
    /*********************************************** */
    getProducts(state, page){
        var url = urlProduct + '?page=' + page + '&include=unit_of_mesaurent'
        axios.get(url).then(response => {
            state.products = response.data.products.data
            state.pagination = response.data.pagination
        });
    },
    createProduct(state){
        var url = urlProduct
        axios.post(url, {
            unit_of_mesaurent_id: state.selectedUnit.value,
            name: state.newProduct.name,
            detail: state.newProduct.detail,
        }).then(response => {
            state.newProduct.brand_id = ''
            //state.newProduct.brand_id = null
            //state.newProduct.laboratory_id = null
            state.newProduct.name = ''
            state.newProduct.detail = ''
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Producto generado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editProduct(state, product){
        state.fillProduct.id = product.id
        state.fillProduct.unit_of_mesaurent_id = product.unit_of_mesaurent_id
        state.selectedUnit = { label: product.unit_of_mesaurent.name , value: product.unit_of_mesaurent.id }
        state.fillProduct.name = product.name
        state.fillProduct.detail = product.detail
        $("#edit").modal('show')
    },
    updateProduct(state, id){
        var url = urlProduct + '/' + id
        axios.put(url, state.fillProduct).then(response => {
            state.fillProduct = {
                id: '',
                name: '',
                detail: '',
            }
            state.errorsLaravel = []
            $('#edit').modal('hide')
            toastr.success('Producto actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteProduct(state, id){
        var url = urlProduct + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Producto eliminado con éxito')
        })
    },
     /*****************codigo***************** */
    /*********************************************** */
    getCodes(state, page){
        var url = urlCode + '?page=' + page + '&include=product,brand,laboratory,inventories'
        axios.get(url).then(response => {
            state.codes = response.data.codes.data
            state.pagination = response.data.pagination
        });
    },
    getAllCodes(state){

        state.codesEdit = []
        state.codes = []

        var url = urlAllCodes + '?include=product,brand,laboratory,inventories'
        axios.get(url).then(response => {

            var respuesta = response.data
            var contador = 1

            respuesta.forEach(code => {

                var total = 0

                code.inventories.forEach(inventory => {
                    if(inventory.sucursal_id == state.idSucursal)
                        total += parseInt(inventory.quantity)
                })

                state.codes.push({
                    isActivate: false,
                    cont: contador,
                    id: code.id,
                    brandName: code.brand.name,
                    laboratoryName: code.laboratory.name,
                    productName: code.product.name,
                    productDetail: code.product.detail,
                    codeName: code.name,
                    quantity: total,
                    created_at: code.created_at,
                    brand: code.brand,
                    laboratory: code.laboratory,
                    product: code.product,
                    code: code,
                    inventories: code.inventories,
                })

                contador = contador + 1

            })

            state.codesEdit = state.codes

        });
    },
    createCode(state){
        var url = urlCode
        axios.post(url, {
            brand_id: state.selectedBrand.value,
            laboratory_id: state.selectedLaboratory.value,
            product_id: state.selectedProduct.value,
            name: state.newCode.name,
            detail: state.newCode.detail,
            price_cost: state.newCode.price_cost,
            price_sale: state.newCode.price_sale,
        }).then(response => {
            state.newCode.brand_id = ''
            state.newCode.name = ''
            state.newCode.detail = ''
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Código generado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editCode(state, code){
        state.fillCode.id = code.id
        state.fillCode.brand_id = code.brand_id
        state.fillCode.laboratory_id = code.laboratory_id
        state.fillCode.product_id = code.product_id
        state.selectedBrand = { label: code.brand.name , value: code.brand.id }
        state.selectedLaboratory = { label: code.laboratory.name , value: code.laboratory.id }
        state.selectedProduct = { label: code.product.name , value: code.product.id }
        state.fillCode.detail = code.detail
        state.fillCode.name = code.name
        $("#edit").modal('show')
    },
    updateCode(state, id){
        var url = urlCode + '/' + id
        axios.put(url, state.fillCode).then(response => {
            state.fillCode = {
                id: '',
                name: '',
            }
            state.errorsLaravel = []
            $('#edit').modal('hide')
            toastr.success('Código actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteCode(state, id){
        var url = urlCode + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Código eliminado con éxito')
        })
    },
     /*****************plantillas de inventario***************** */
    /*********************************************** */
    getTemplates(state, page){
        var url = urlTemplate + '?page=' + page + '&include=sucursal,codes.brand,codes.laboratory,codes.product'
        axios.get(url).then(response => {
            state.templates = response.data.templates.data
            state.pagination = response.data.pagination

        });
    },
    chargeTemplate(state){

        state.codesEdit = []
        state.codes = []

        var url = urlTemplate + '/' + state.selectedTemplate.value
                        + '?include=sucursal,codes.brand,codes.laboratory,codes.product,codes.inventories'
                        //+ '&filter[sucursal_id]=' + state.selectedSucursal.value
        axios.get(url).then(response => {

            console.log(response.data)

            var respuesta = response.data.codes
            var contador = 1

            respuesta.forEach(code => {

                var total = 0

                code.inventories.forEach(inventory => {
                    if(inventory.sucursal_id == state.idSucursal)
                        total += parseInt(inventory.quantity)
                })

                state.codes.push({
                    isActivate: false,
                    cont: contador,
                    id: code.id,
                    brandName: code.brand.name,
                    laboratoryName: code.laboratory.name,
                    productName: code.product.name,
                    productDetail: code.product.detail,
                    codeName: code.name,
                    quantity: total,
                    created_at: code.created_at,
                    brand: code.brand,
                    laboratory: code.laboratory,
                    product: code.product,
                    code: code,
                    inventories: code.inventories,
                    price_cost: code.price_cost,
                    price_sale: code.price_sale,
                    iva: 19,
                    utility: 0,
                    newQuantity: 1,
                })

                contador = contador + 1

            })

            state.codesEdit = state.codes

        });
    },
    createTemplate(state){
        var url = urlTemplate
        state.codesTemplate = []

        state.codes.forEach(code => {
            if(code.isActivate)
                state.codesTemplate.push(code.id)
        })

        axios.post(url, {
            sucursal_id: state.selectedSucursal.value,
            name: state.newTemplate.name,
            codes: state.codesTemplate,
        }).then(response => {
            state.newTemplate.sucursal_id = ''
            state.newTemplate.name = ''
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Plantilla de inventario generada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editTemplate(state, template){
        state.fillTemplate.id = template.id
        state.fillTemplate.sucursal_id = template.sucursal_id
        state.selectedSucursal = { label: template.sucursal.name , value: template.sucursal.id }
        state.fillTemplate.name = template.name
        state.fillTemplate.codes = template.codes

        var respuesta = state.fillTemplate.codes

        state.codesEdit.forEach(codeEdit => {
            codeEdit.isActivate = false
            respuesta.forEach(code => {
                if(code.id == codeEdit.id)
                    codeEdit.isActivate = true
            })

        })

        $("#edit").modal('show')
    },
    updateTemplate(state, id){
        var url = urlTemplate + '/' + id


        state.codesTemplate = []

        state.codesEdit.forEach(code => {
            if(code.isActivate)
                state.codesTemplate.push(code.id)
        })

        axios.put(url, {
            sucursal_id: state.selectedSucursal.value,
            name: state.fillTemplate.name,
            codes: state.codesTemplate,
            }).then(response => {
            state.fillTemplate = {
                id: '',
                sucursal_id: '',
                name: '',
            }
            state.errorsLaravel = []
            $('#edit').modal('hide')
            toastr.success('Plantilla de inventario generada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteTemplate(state, id){
        var url = urlTemplate + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Plantilla de inventario eliminada con éxito')
        })
    },
    /******************************************** */
    /******************************************** */
    addCodeTemplate(state, code){
        state.codesTemplate.push(code)
    },
    deleteCodeTemplate(state, id){
        var temporal = []
        state.codesTemplate.forEach(code => {
            if(code.id != id)
                temporal.push(code)
        })
        state.codesTemplate = temporal
    },
    /*****************inventario***************** */
    /*********************************************** */
    getInventories(state, data){
        //var url = urlInventory + '?page=' + page + '&include=code,code.product,code.product.brand,code.product.laboratory'
        var url = urlCode + '?page=' + data.page + '&include=product,brand,laboratory,inventories'
                 + '&code=' + state.searchReduction.code
                 + '&product=' + state.searchReduction.product
                 + '&laboratory=' + state.searchReduction.laboratory
                 + '&brand=' + state.searchReduction.brand

        state.idSucursal = null
        state.idSucursal = data.sucursal_id
        state.inventories = []
        axios.get(url).then(response => {

            state.inventories = []

            console.log(response.data.codes.data)
            var respuesta = response.data.codes.data
            var contador = 1

            respuesta.forEach(code => {

                var total = 0

                code.inventories.forEach(inventory => {
                    if(inventory.sucursal_id == data.sucursal_id)
                        total += parseInt(inventory.quantity)
                })

                state.inventories.push({
                    id: contador,
                    brandName: code.brand.name,
                    laboratoryName: code.laboratory.name,
                    productName: code.product.name,
                    productDetail: code.product.detail,
                    codeName: code.name,
                    quantity: total,
                    newQuantity: 1,
                    created_at: code.created_at,
                    brand: code.brand,
                    laboratory: code.laboratory,
                    product: code.product,
                    code: code,
                    inventories: code.inventories,
                })

                contador = contador + 1

            })

            state.pagination = response.data.pagination
        });
    },
    getInventories2(state, page){
        //var url = urlInventory + '?page=' + page + '&include=code,code.product,code.product.brand,code.product.laboratory'
        var url = urlCode + '?page=' + page + '&include=product,brand,laboratory,inventories'
                + '&code=' + state.searchReduction.code
                 + '&product=' + state.searchReduction.product
                 + '&laboratory=' + state.searchReduction.laboratory
                 + '&brand=' + state.searchReduction.brand

        state.inventories = []
        axios.get(url).then(response => {

            state.inventories = []

            console.log(response.data.codes.data)
            var respuesta = response.data.codes.data
            var contador = 1

            respuesta.forEach(code => {

                var total = 0

                code.inventories.forEach(inventory => {
                    if(inventory.sucursal_id == state.idSucursal)
                        total += parseInt(inventory.quantity)
                })

                state.inventories.push({
                    id: contador,
                    brandName: code.brand.name,
                    laboratoryName: code.laboratory.name,
                    productName: code.product.name,
                    productDetail: code.product.detail,
                    codeName: code.name,
                    quantity: total,
                    newQuantity: 1,
                    created_at: code.created_at,
                    brand: code.brand,
                    laboratory: code.laboratory,
                    product: code.product,
                    code: code,
                    inventories: code.inventories,
                })

                contador = contador + 1

            })

            state.pagination = response.data.pagination
        });
    },
    createInventory(state){
        var url = urlInventory

        var codesArray = []

        state.codes.forEach(code => {

            var utilidad = parseInt(code.price_sale) * 1.19  - parseInt(code.price_cost) * 1.19

            codesArray.push({
                code_id: code.id,
                sucursal_id: state.selectedSucursal.value,
                price_cost: code.price_cost,
                price_sale: code.price_sale,
                iva: code.iva,
                utility: utilidad,
                quantity: code.newQuantity,
            })


        })

        axios.post(url, {
            codes: codesArray
        }).then(response => {
            /*state.newInventory.price_cost = 0
            state.newInventory.price_sale = 0
            state.newInventory.price_utility = 0
            state.newInventory.quantity = 1*/
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Inventario generado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editInventory(state, inventory){
        state.fillInventory.id = inventory.id
        state.fillInventory.code_id = inventory.code_id
        state.fillInventory.price = inventory.price
        state.fillInventory.quantity = inventory.quantity
        $("#edit").modal('show')
    },
    updateInventory(state, id){
        var url = urlInventory + '/' + id
        axios.put(url, state.fillInventory).then(response => {
            state.fillCode = {
                id: '',
                price: 0,
                quantity: 1,
            }
            state.errorsLaravel = []
            $('#edit').modal('hide')
            toastr.success('Inventario actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteInventory(state, id){
        var url = urlInventory + '/' +  id
        axios.delete(url).then(response => {
            toastr.success('Inventario eliminado con éxito')
        })
    },
    detailInventory(state, inventory){
        state.detailInventory = null
        state.detailInventory = inventory
        $("#detail").modal('show')
    },
    /******************************************** */
    /******************************************** */
    addConsumeProduct(state, inventory){
        state.consumeProducts.push(inventory)
    },
    deleteConsumeProduct(state, id){
        var temporal = []
        state.consumeProducts.forEach(consume => {
            if(consume.id != id)
                temporal.push(consume)
        })
        state.consumeProducts = temporal
    },
    /******************************************* */
    /******************************************** */
    confirmReduction(state){
        $('#confirm').modal('show')
    },
    createReduction(state){

        var productos = []

        state.consumeProducts.forEach(consume => {
            productos.push({
                code_id: consume.code.id,
                sucursal_id: state.idSucursal,
                quantity: consume.newQuantity,
                type: state.tipoConsumo.value,
            })
        })

        var url = urlConsumeProduct
        axios.post(url, {
            products: productos,
        }).then(response => {
            //state.newReduction.code_id = 1
            //state.newReduction.sucursal_id = 1
            state.newReduction.quantity = 10
            state.consumeProducts = []
            state.inventories = []
            state.errorsLaravel = []
            toastr.success(response.data.resultado)
            console.log(response.data)
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })

    },
    /****************************************** */
    /************************************ */
    createMail(state){

        var url = urlCorreoMasivo
        var id = state.selectedClient.value

        axios.post(url, {
            id: id,
            subject: state.newMail.subject,
            message: state.newMail.message,
        }).then(response => {
            state.newMail.subject = ''
            state.newMail.message = ''

            state.errorsLaravel = []
            state.selectedClient = null

            toastr.success('Email enviado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    /***************************************** */
    /***************************************** */
    canSendMail(state, data){
        var url = urlUser + '/' + data.user.id

        if(data.send)
            data.send = 1
        else
            data.send = 0

        var user = {
            is_activate: data.user.is_activate,
            address: data.user.address,
            barcode: data.user.barcode,
            email: data.user.email,
            name: data.user.name,
            company_id: data.user.company_id,
            profession_id: data.user.profession_id,
            rut: data.user.rut,
            is_sendmail: data.user.is_sendmail,
        }

        axios.put(url, user).then(response => {
            state.errorsLaravel = [];
            toastr.success('Actualizado')
            console.log(response.data)
        }).catch(error => {
            state.errorsLaravel = error.response.data
            console.log(state.errorsLaravel)
        })
    },
    fileChange(state, evt){
        state.form = new FormData
        state.images = []
        state.attachment = []
        let selectedFiles = evt.target.files

        if(!selectedFiles.length){
            return false
        }

        for(let i = 0; i < selectedFiles.length; i++ ){
            state.attachment.push(selectedFiles[i])
            console.log(selectedFiles[i])
        }
    },
    uploadPhoto(state){
        for(let i = 0; i < state.attachment.length; i++ ){
            state.form.append('pics[]', state.attachment[i])
        }

        const config = { headers: { 'Content-Type': 'multipart/form-data' } }

        var url = urlUpload

        $("#files").val(null)
        axios.post(url, state.form , config).then(response=> {
            console.log(response.data)
            toastr.success('Imagen(es) subida(s) con éxito')
            state.attachment = []
        })
        .catch(response => {
        })

    },
}
