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
var urlSearchUser = 'search-user'

var urlClientPos = 'clients-pos'
var urlClient = 'clients'
var urlCreateClient = 'create-client'
var urlUpdateClient = 'update-client'



/*********sistema POST*********** */
var urlAllSucursals = 'sucursals-all'
var urlAllClientposts = 'clientposts-all'

var urlVoucher = 'vouchers'
var urlVoucherPOST = 'vouchers-post'
var urlVoucherImpagos = 'vouchersimpagos'
var urlClientpost = 'clientposts'
var urlServicepost = 'serviceposts'
var urlPersonalpost = 'personalposts'
var urlFiltroVoucher = 'filtro-voucher'

var urlBoleta = 'ver-voucher'
var urlBoletaPdf = 'generar-voucher'
var urlCajaZ = 'boxz-sucursal'
var urlListaVoucher = 'lista-voucher'
var urlTotalVoucherPersonal = 'total-vouchers-personal'
var urlDetailVoucherPersonal = 'vouchers-personal'

var urlCorreoMasivo = 'enviar-correo-masivo'
var urlUpload = 'imagenes-mail'

var includeVoucherFiltro = '&include=serviceposts.service,serviceposts.personalposts.personal'

/***********Inventario** ****/
var urlProduct = 'products'
var urlAllProducts = 'products-all'
var urlInventory = 'inventories'
var urlSupplier = 'suppliers'
var urlUtility = 'utilities'
var urlFlete = 'fletes'
var urlPaymentMethod = 'payments'
var urlAllPayments = 'payments-all'
var urlDiscount = 'discount'
var urlBill = 'bills'

/******consumo inventario***** */
var urlGenerateKey = 'generate-key'
var urlResetIp = 'reset-ip'
var urlBlockIp = 'block-ip'
var urlDeleteImage = 'delete-image'

/******Sales***** */
var urlSale = 'sales'
var urlGenerateReceipt = 'generate-receipt'
var urlGenerateBoxClosureZ = 'generate-box-closure-z'

export default { //used for changing the state
    /****** sección select **** */
    /******************************* */
    allCategories(state) {
        var url = urlAllCategory
        axios.get(url).then(response => {
            state.optionsCategory = []
            response.data.forEach((category) => {
                state.optionsCategory.push({ label: category.name, value: category.id })
            });
        });
    },
    allIsSession(state) {
        var url = urlAllIsSession
        axios.get(url).then(response => {
            state.optionsIsSession = []
            response.data.forEach((category) => {
                state.optionsIsSession.push({ label: category.name, value: category.id })
            });
        });
    },
    allPromotions(state) {
        var url = urlAllPromotion
        axios.get(url).then(response => {
            state.optionsPromotion = []
            response.data.forEach((promotion) => {
                state.optionsPromotion.push({ label: promotion.name, value: promotion.id })
            });
        });
    },
    allPersonals(state) {
        var url = urlAllPersonal
        axios.get(url).then(response => {
            state.optionsPersonal = []
            response.data.forEach((personal) => {
                state.optionsPersonal.push({ label: personal.name, value: personal.id })
            });
        });
    },
    allCompanies(state) {
        var url = urlAllCompany
        axios.get(url).then(response => {
            state.options = []
            response.data.forEach((company) => {
                if (company.id !== 1) {
                    state.options.push({ label: company.name, value: company.id })
                }
            });
        });
    },
    allProfessions(state) {
        var url = urlAllProfession
        axios.get(url).then(response => {
            state.optionsProfession = []
            response.data.forEach((profession) => {
                state.optionsProfession.push({ label: profession.name, value: profession.id })
            });
        });
    },
    allServices(state) {
        var url = urlAllService
        axios.get(url).then(response => {
            state.options = []
            response.data.forEach((service) => {
                var name = service.category.name + " - " + service.name
                state.options.push({ label: name, value: service.id })
            })
        });
    },
    allUsers(state) {
        var url = urlAllUser
        axios.get(url).then(response => {
            state.clients = []
            response.data.forEach((client) => {
                var name = client.name
                state.clients.push({ label: name, value: client.id })
            });
        });
    },
    allProducts(state) {
        var url = urlAllProducts
        axios.get(url).then(response => {
            state.optionsProduct = []
            response.data.forEach((product) => {
                state.optionsProduct.push({
                    label: product.name,
                    value: product.id,
                    inventories: product.inventories,
                    utility: product.utility,
                    flete: product.flete,
                    code: product.code,
                })
            });
        });
    },
    setProduct(state, product) {
        state.selectedProduct = product
        state.newSale.totalSumPrice = 0;
        state.newSale.totalSumQuantity = 0;

        if (state.selectedProduct != null) {
            state.newSale.priceMax = Math.max(...product.inventories.map(inventario => inventario.price));
            state.newSale.utility = parseFloat((product.utility / 100) + 1)
            state.newSale.flete = product.flete
            state.newSale.product = product.label
            state.newSale.code = product.code
            state.newSale.id = product.value

            product.inventories.forEach((inventory) => {
                state.newSale.totalSumPrice += inventory.price * inventory.quantity;
                state.newSale.totalSumQuantity += inventory.quantity;
                state.newSale.price = inventory.price
            })

            state.newSale.totalNeto = Math.round(((state.newSale.priceMax * parseInt(state.newSale.quantity)) * (state.newSale.utility - 1)) + (state.newSale.priceMax * state.newSale.quantity))

            state.newSale.average_price = ((((state.newSale.totalSumPrice / state.newSale.totalSumQuantity) * 1.19) * state.newSale.utility) + state.newSale.flete)
            const high_price = (((state.newSale.priceMax * 1.19) * state.newSale.utility) + state.newSale.flete)
            const average_price_rounded = Math.ceil(state.newSale.average_price / 10) * 10;
            const high_price_rounded = Math.ceil(high_price / 10) * 10;

            if (high_price_rounded !== average_price_rounded) {
                state.newSale.price_sale = high_price_rounded * state.newSale.quantity
            } else {
                state.newSale.price_sale = average_price_rounded * state.newSale.quantity
            }
        }

    },

    setCategory(state, category) {
        state.selectedCategory = category
        if (category != null)
            state.fillService.category_id = category.value
    },
    setCategoryPos(state, category) {
        state.serviceposts = []
        state.optionsService = []
        state.selectedServicepromotions = []
        state.selectedCategory = category

        if (category != null) {
            state.fillService.category_id = category.value
            var url = urlCategory + '/' + category.value

            axios.get(url).then(response => {

                response.data.services.forEach((service) => {
                    var name = response.data.name + ' - ' + service.name
                    state.serviceposts.push({ label: name, value: service.id, precio: service.price })

                    if (response.data.name == 'PROMOCIÓN CERA A' ||
                        response.data.name == 'PROMOCIÓN CERA B' ||
                        response.data.name == 'PROMOCIÓN CERA C' ||
                        response.data.name == 'PROMOCIÓN ROLL-ON D' ||
                        response.data.name == 'PROMOCIÓN ROLL-ON E' ||
                        response.data.name == 'PROMOCIÓN COLORES' ||
                        response.data.name == 'PROMOCIÓN DÍA DE SPA' ||
                        response.data.name == 'PROMOCIÓN PESTAÑAS X 2 $20.0000' ||
                        response.data.name == 'PROMOCIÓN BELLEZA' ||
                        response.data.name == 'PROMOCIÓN I.P.L' ||
                        response.data.name == 'PROMOCIÓN M&M') {

                        var servicePos = { label: name, value: service.id, precio: service.price }
                        state.selectedServiceposts.push(servicePos)
                    }

                    state.optionsService.push({ label: service.name, value: service.id, precio: service.price })

                })
            })
        }
    },
    setPersonal(state, personal) {
        state.selectedPersonal = personal
    },
    setCompany(state, company) {
        state.selectedItem = company
        state.fillUser.company_id = company.value
    },
    setProfession(state, profession) {
        state.selectedProfession = profession
        state.fillUser.profession_id = profession.value
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

        if (promotion != null) {
            /* aca se debe hacer la consulta con idpromotion para obtener los servicios */
            var url = urlPromotion + '/' + promotion.value
            var cont_position = 0

            axios.get(url).then(response => {
                response.data.servicespromotions.forEach((service) => {
                    // var name = /*response.data.promotion.name +  ' - ' + */service.name

                    state.servicepromotions.push({
                        label: service.service.name,
                        value: service.service.id,
                        precio: service.service.price,
                        position: cont_position,
                        estado: 'NO CONFIRMADO',
                        personal: '',
                    })
                    cont_position = cont_position + 10
                })
                state.total_promotion = response.data.total_promotion

            }).catch(error => {
                state.errorsLaravel = error.response.data
            })
        }
    },
    setUser(state, client) {
        state.selectedUser = client
    },
    /****** seccion index con estadisticas **** */
    countUser(state) {
        var url = urlUserTotal
        axios.get(url).then(response => {
            state.countIndex.user = response.data
        })
    },
    countUserService(state) {
        var url = urlServiceTotal
        axios.get(url).then(response => {
            state.countIndex.service = response.data
        })
    },
    showServicesByMonth(state) {
        var url = urlServiceTotalByMonth
        axios.get(url).then(response => {
            state.serviceMonth = response.data
        })
    },
    showUsersByServices(state) {
        var url = urlUserTotalByServices
        axios.get(url).then(response => {
            state.userServices = response.data
        })
    },
    /******************************* */
    /****** sección categoria **** */
    /******************************* */
    getCategories(state, page) {
        var url = urlCategory + '?page=' + page + '&name=' + state.searchCategory.name
        axios.get(url).then(response => {
            state.categories = response.data.categories.data
            state.pagination = response.data.pagination
        });
    },
    createCategory(state) {
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
    editCategory(state, category) {
        state.fillCategory.id = category.id
        state.fillCategory.name = category.name
        state.fillCategory.isSession = category.isSession
        $("#edit").modal('show')
    },
    updateCategory(state, id) {
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
    deleteCategory(state, id) {
        var url = urlCategory + '/' + id
        axios.delete(url).then(response => {
            toastr.success('Categoría eliminado con éxito')
        })
    },
    /******************************* */
    /****** sección promociones **** */
    /******************************* */
    getPromotions(state, page) {
        var url = urlPromotion + '?page=' + page + '&name=' + state.searchPromotion.name
        axios.get(url).then(response => {
            state.promotions = response.data.promotions.data
            state.pagination = response.data.pagination
        });
    },
    createPromotion(state) {
        axios.post(urlPromotion, {
            name: state.newPromotion.name,
            total: state.newPromotion.total,
        }).then(response => {
            state.idPromotion = response.data
            state.listServiceCreatepromotions.forEach(service => {
                axios.post(urlServicepromotion, {
                    promotion_id: state.idPromotion,
                    service_id: service.service,
                    price: service.precio,
                }).then(response => {
                    toastr.success('Servicio agregado con éxito')
                }).catch(error => {
                    state.errorsLaravel = error.response.data
                })
            })
            state.listServiceCreatepromotions = []
            state.totalCreatePromotion = 0
            state.newPromotion.name = ''
            state.newPromotion.total = 0
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Promoción generada con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editPromotion(state, promotion) {
        state.listServicepromotions = []
        state.totalPromotion = 0
        state.selectedCategory = null
        state.selectedServicepromotions = []

        var url = urlPromotion + '/' + promotion.id
        state.fillPromotion.id = promotion.id
        state.fillPromotion.total = promotion.total
        axios.get(url).then(response => {
            state.servicespromotions = response.data.servicespromotions
        });
    },
    updatePromotion(state, id) {
        var url = urlPromotion + '/' + id
        var total = 0
        if (state.fillPromotion.total > 0) {
            total = state.fillPromotion.total
        } else {
            total = state.totalPromotion
        }
        axios.put(url, {
            total: total,
        }).then(response => {
            var url = urlServicepromotion

            state.listServicepromotions.forEach(service => {
                axios.post(url, {
                    promotion_id: id,
                    service_id: service.service,
                    price: service.precio,
                }).then(response => {
                    toastr.success('Servicio agregado con éxito')
                }).catch(error => {
                    state.errorsLaravel = error.response.data
                })
            })

            state.listServicepromotions = []
            state.totalPromotion = 0
            state.fillPromotion.total = 0
            state.newPromotion.total = 0
            state.errorsLaravel = []
            $('#edit').modal('hide')
            toastr.success('Promoción actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deletePromotion(state, id) {
        var url = urlPromotion + '/' + id
        axios.delete(url).then(response => {
            toastr.success('Promoción eliminada con éxito')
        })
    },
    deletePromotionEdit(state, id) {
        var url = urlPromotionServicesEdit + '/' + id
        axios.delete(url).then(response => {
            toastr.success('Servicio eliminada con éxito')
        })
    },
    /******************************* */
    /****** sección personal **** */
    /******************************* */
    getPersonals(state, page) {
        var url = urlPersonal + '?page=' + page + '&name=' + state.searchPersonal.name
        axios.get(url).then(response => {
            state.personals = response.data.personals.data
            state.pagination = response.data.pagination
        });
    },
    createPersonal(state) {
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
    editPersonal(state, personal) {
        state.fillPersonal.id = personal.id
        state.fillPersonal.name = personal.name
        $("#edit").modal('show')
    },
    updatePersonal(state, id) {
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
    deletePersonal(state, id) {
        var url = urlPersonal + '/' + id
        axios.delete(url).then(response => {
            toastr.success('Personal eliminado con éxito');
        })
    },
    /******************************* */
    /****** sección empresas **** */
    /******************************* */
    getCompanies(state, page) {
        var url = urlCompany + '?page=' + page + '&name=' + state.searchCompany.name
        axios.get(url).then(response => {
            state.companies = response.data.companies.data
            state.pagination = response.data.pagination
        });
    },
    createCompany(state) {
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
    editCompany(state, company) {
        state.fillCompany.id = company.id
        state.fillCompany.name = company.name
        state.fillCompany.date = company.date
        state.fillCompany.discount = company.discount
        $("#edit").modal('show')
    },
    updateCompany(state, id) {
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
    deleteCompany(state, id) {
        var url = urlCompany + '/' + id
        axios.delete(url).then(response => {
            toastr.success('Empresa eliminada con éxito');
        })
    },
    /******************************* */
    /****** sección profesiones **** */
    /******************************* */
    getProfessions(state, page) {
        var url = urlProfession + '?page=' + page + '&name=' + state.searchProfession.name
        axios.get(url).then(response => {
            state.professions = response.data.professions.data
            state.pagination = response.data.pagination
        });
    },
    createProfession(state) {
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
    editProfession(state, profession) {
        state.fillProfession.id = profession.id
        state.fillProfession.name = profession.name
        state.fillProfession.date = profession.date
        state.fillProfession.percentage = profession.percentage
        $("#edit").modal('show')
    },
    updateProfession(state, id) {
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
    deleteProfession(state, id) {
        var url = urlProfession + '/' + id
        axios.delete(url).then(response => {
            toastr.success('Profesión eliminada con éxito');
        })
    },
    /****** sección clientes **** */
    /******************************* */
    getClients(state, page) {
        var url = urlClient + '?page=' + page + '&barcode=' + state.searchClient.barcode
            + '&rut=' + state.searchClient.rut + '&name=' + state.searchClient.name
        axios.get(url).then(response => {
            state.userSucursal = response.data.user_sucursal
            state.clients = response.data.clients.data
            state.pagination = response.data.pagination
        });
    },
    showClient(state, id) {
        var url = urlUser + '/' + id
        axios.get(url).then(response => {
            state.user = response.data
        });
    },
    createClient(state) {
        var url = urlCreateClient

        for (let i = 0; i < state.attachment.length; i++) {
            state.form.append('image', state.attachment[i])
        }

        let company = 0;

        if (state.selectedItem === null) {
            company = 1;
        } else {
            company = state.selectedItem.value
        }

        const user = {
            company_id: company,
            profession_id: state.selectedProfession.value,
            rut: state.newClient.rut,
            name: state.newClient.name,
            email: state.newClient.email,
            city: state.newClient.city,
            phone: state.newClient.phone,
            birthdate: state.newClient.birthdate,
            sex: state.newClient.sex,
            other_sex: state.newClient.other_sex,
            score: state.newClient.score,
            password: '',
            is_convenio: state.newClient.is_convenio
        };

        for (const key in user) {
            state.form.append(key, user[key]);
        }

        axios.post(url, state.form).then(response => {
            state.selectedProfession = []
            state.selectedItem = []
            state.newClient = {
                company_id: '', profession_id: '', rut: '', name: '', email: '', city: '',
                phone: '', birthdate: '', sex: '', score: 0, password: '', is_convenio: 0, other_sex: '', image: null
            };
            state.errorsLaravel = [];
            $("#image").val(null);
            $('#create').modal('hide');
            toastr.success('Cliente generado con éxito');
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editClient(state, user) {
        state.options.forEach((company) => {
            if (company.value === user.company_id)
                state.selectedItem = company
        })
        state.optionsProfession.forEach((profession) => {
            if (profession.value === user.profession_id)
                state.selectedProfession = profession
        })

        state.fillClient.id = user.id
        state.fillClient.company_id = user.company_id
        state.fillClient.profession_id = user.profession_id
        state.fillClient.rut = user.rut
        state.fillClient.name = user.name
        state.fillClient.email = user.email
        state.fillClient.city = user.city
        state.fillClient.phone = user.phone
        state.fillClient.birthdate = user.birthdate
        state.fillClient.sex = user.sex
        state.fillClient.other_sex = user.other_sex
        state.fillClient.score = user.score
        state.fillClient.password = user.password
        state.fillClient.is_convenio = user.is_convenio
        state.fillClient.image = user.image

        if (state.fillClient.sex === 3) {
            state.inputOther = true;  // Muestra el input si 'Otro' está seleccionado
        }
        $("#edit").modal('show')
    },
    updateClient(state, id) {
        var url = urlUpdateClient + '/' + id;

        let formDataUpdate = new FormData();
        let company = 0;

        if (state.selectedItem === null) {
            company = 1;
        } else {
            company = state.selectedItem.value
        }

        const user = {
            image: state.selectedImage,
            company_id: company,
            profession_id: state.selectedProfession.value,
            rut: state.fillClient.rut,
            name: state.fillClient.name,
            email: state.fillClient.email,
            city: state.fillClient.city,
            phone: state.fillClient.phone,
            birthdate: state.fillClient.birthdate,
            sex: state.fillClient.sex,
            other_sex: state.fillClient.other_sex,
            score: state.fillClient.score,
            is_convenio: state.fillClient.is_convenio
        };

        for (const key in user) {
            formDataUpdate.append(key, user[key]);
        }

        axios.post(url, formDataUpdate).then(response => {
            state.selectedProfession = []
            state.selectedItem = []
            state.errorsLaravel = [];
            $("#imagen").val(null);
            $('#edit').modal('hide');
            toastr.success('Cliente actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteClient(state, id) {
        var url = urlUser + '/' + id;
        axios.delete(url).then(response => {
            toastr.success('Cliente eliminado con éxito');
        });
    },
    /****** sección usuarios **** */
    /******************************* */
    getUsers(state, page) {
        var url = urlUser + '?page=' + page + '&email=' + state.searchUser.email + '&name=' + state.searchUser.name + '&rut=' + state.searchUser.rut
        axios.get(url).then(response => {
            state.users = response.data.users.data
            state.pagination = response.data.pagination
        });
    },
    getSearchUsers(state) {
        var url = urlSearchUser + '?email=' + state.searchUser.email + '&name=' + state.searchUser.name + '&rut=' + state.searchUser.rut
        axios.get(url).then(response => {
            state.users = response.data
        });
    },
    createUser(state) {
        var url = urlCreateUser
        axios.post(url, {
            name: state.newUser.name,
            rut: state.newUser.rut,
            email: state.newUser.email,
            password: state.newUser.password,
        }).then(response => {
            state.newUser = { name: '', rut: '', email: '', password: '' };
            state.errorsLaravel = [];
            $('#create').modal('hide');
            toastr.success('Usuario generado con éxito');
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editUser(state, user) {
        state.fillUser.id = user.id
        state.fillUser.name = user.name
        state.fillUser.email = user.email
        $("#edit").modal('show')
    },
    updateUser(state, id) {
        var url = urlUpdateUser + '/' + id;
        axios.put(url, state.fillUser).then(response => {
            state.fillUser = { id: '', name: '', email: '', password: '' };
            state.errorsLaravel = [];
            $('#edit').modal('hide');
            toastr.success('Usuario actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    updateScoreExchange(state) {
        var url = urlUser + '/' + state.user.id
        var user = {
            id: null, company_id: null, profession_id: null, rut: null, name: null, email: null,
            city: null, phone: null, birthdate: null, sex: null,
            civil: null, children: null, barcode: null, score: null, is_convenio: null
        }

        user.id = state.user.id
        user.company_id = state.user.company_id
        user.profession_id = state.user.profession_id
        user.rut = state.user.rut
        user.name = state.user.name
        user.email = state.user.email
        user.city = state.user.city
        user.phone = state.user.phone
        user.birthdate = state.user.birthdate
        user.sex = state.user.sex
        user.civil = state.user.civil
        user.children = state.user.children
        user.score = state.user.score - state.service.score_exchange
        user.barcode = state.user.barcode
        user.is_convenio = state.user.is_convenio
        axios.put(url, user).then(response => {
            state.service = { name: null, score_exchange: null, score_accumulated: null }
            state.user.score = user.score

            toastr.success('Servicio canjeado con éxito')
            $('#exchange').modal('hide')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    updateScoreAccumulated(state) {
        var url = urlUser + '/' + state.user.id
        var user = {
            id: null, company_id: null, profession_id: null, rut: null, name: null, email: null,
            city: null, phone: null, birthdate: null, sex: null,
            civil: null, children: null, barcode: null, score: null, is_convenio: null
        }

        user.id = state.user.id
        user.company_id = state.user.company_id
        user.profession_id = state.user.profession_id
        user.rut = state.user.rut
        user.name = state.user.name
        user.email = state.user.email
        user.city = state.user.city
        user.phone = state.user.phone
        user.birthdate = state.user.birthdate
        user.sex = state.user.sex
        user.civil = state.user.civil
        user.children = state.user.children
        user.score = state.user.score + state.service.score_accumulated
        user.barcode = state.user.barcode
        user.is_convenio = state.user.is_convenio

        axios.put(url, user).then(response => {
            $('#accumulated').modal('hide')
            toastr.success('Servicio canjeado con éxito')

            state.service = { name: null, score_exchange: null, score_accumulated: null }
            state.user.score = user.score

        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteUser(state, id) {
        var url = urlUser + '/' + id;
        axios.delete(url).then(response => {
            toastr.success('Ususario eliminado con éxito');
        });
    },
    /****** sección servicios **** */
    /******************************* */
    getServices(state, page) {
        var url = urlService + '?page=' + page + '&name=' + state.searchService.name;
        axios.get(url).then(response => {
            state.services = response.data.services.data
            state.pagination = response.data.pagination
            if (state.service.length === 1) {
                state.service.forEach((service) => {
                    state.service = service
                })
            }
            else
                state.service = { score_exchange: null, score_accumulated: null }
        });
    },
    showService(state, id) {
        var url = urlService + '/' + id;
        axios.get(url).then(response => {
            state.service = response.data
        });
    },
    createService(state) {
        var url = urlService
        axios.post(url, {
            category_id: state.selectedCategory.value,
            name: state.newService.name,
            score_exchange: state.newService.score_exchange,
            score_accumulated: state.newService.score_accumulated,
            price: state.newService.price,
            redeemable_service: state.newService.redeemable_service
        }).then(response => {
            state.newService = {
                category_id: '',
                name: '',
                score_exchange: '',
                score_accumulated: '',
                price: '',
                redeemable_service: ''
            }
            state.errorsLaravel = []
            $('#create').modal('hide')
            toastr.success('Servicio generado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editService(state, service) {
        state.optionsCategory.forEach((category) => {
            if (category.value === service.category_id)
                state.selectedCategory = category
        })


        state.fillService.category_id = service.category_id
        state.fillService.id = service.id
        state.fillService.name = service.name
        state.fillService.score_exchange = service.score_exchange
        state.fillService.score_accumulated = service.score_accumulated
        state.fillService.price = service.price
        state.fillService.redeemable_service = service.redeemable_service
        $("#edit").modal('show')
    },
    updateService(state, id) {
        var category_id = state.selectedCategory.value
        state.fillService.category_id = category_id
        var url = urlService + '/' + id
        axios.put(url, state.fillService).then(response => {
            state.fillService = { id: '', category_id: '', name: '', score_exchange: '', score_accumulated: '', price: '' },
                state.selectedItem = null
            state.errorsLaravel = [];
            $('#edit').modal('hide')
            toastr.success('Servicio actualizado con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    deleteService(state, id) {
        var url = urlService + '/' + id;
        axios.delete(url).then(response => {
            toastr.success('Servicio eliminado con éxito')
        });
    },
    /******* sección usuarios con servicios*/
    getUserServices(state, id) {
        var url = urlUser + '/' + id + '/' + urlService;
        axios.get(url).then(response => {
            state.userServices = response.data
        });
    },
    createUserService(state) {
        var url = urlUser + '/' + state.user.id + '/' + urlService + '/' + state.service.id
        var personals = '| '

        state.selectedPersonal.forEach(personal => {
            state.idPersonal = personal.value
            personals += personal.label + ' | '
        })

        axios.put(url, {
            user_id: state.user.id,
            personal_id: state.idPersonal,
            service_id: state.selectedItem.value,
            personal: personals
        }).then(response => {
            toastr.success('Servicio asociado al usuario con éxito')
            state.errorsLaravel = []
            //alert("Cantidad: " + response.data)
            //comprobar si el cliente adquirió una cierta cantidad de servicios
            if ((response.data % 5) == 0)
                toastr.warning("Felicidades, ha sido enviado un correo con un descuento especial para usted", { timeOut: 10000 });
        }).catch(error => {
            state.errorsLaravel = error.response
            alert(error.response);
        })
    },
    getUsersAvaibleServices(state, id) {
        var url = urlUserAvailableService + '/' + id
        axios.get(url).then(response => {
            state.userScoreServices = response.data
        });
    },
    /****** sección de control de roles **** */
    /******************************* */
    getRoles(state, page) {
        var url = urlRoles + '?page=' + page
        axios.get(url).then(response => {
            state.roles = response.data.roles.data
            state.pagination = response.data.pagination
        });
    },
    createRole(state) {
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
    editRole(state, role) {
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
    updateRole(state, id) {
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
    deleteRole(state, id) {
        var url = urlRoles + '/' + id
        axios.delete(url).then(response => {
            toastr.success('Rol eliminado con éxito');
        })
    },
    getAllRoles(state) {
        var url = urlAllRoles
        axios.get(url).then(response => {
            const roles = response.data;
            roles.forEach(role => {
                switch (role.name) {
                    case 'clientes':
                        role.description = 'Rol para los clientes'
                        break;
                    case 'admin':
                        role.description = 'Rol para los administradores'
                        break;
                    case 'sucursal':
                        role.description = 'Rol para los jefe de sucursal'
                        break;
                }
            })
            state.roles = response.data
        });
    },
    getUserRoles(state, id) {
        var url = urlUser + '/' + id + '/' + urlRoles
        axios.get(url).then(response => {
            const user = response.data[0];
            switch (user.name) {
                case 'clientes':
                    user.description = 'Rol para los clientes'
                    break;
                case 'admin':
                    user.description = 'Rol para los administradores'
                    break;
                case 'sucursal':
                    user.description = 'Rol para los jefe de sucursal'
                    break;
            }
            state.userRoles = response.data
            $("#showRoles").modal('show')
        });
    },
    editUserRoles(state, user) {
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
    updateUserRoles(state, id) {
        var url = urlUserRoles + '/' + id;
        axios.put(url, state.checkedRoles).then(response => {
            state.checkedRoles = []
            $('#editRoles').modal('hide')
            toastr.success('Roles asignados con éxito')
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    getAllPermissions(state) {
        var url = urlAllPermissions
        axios.get(url).then(response => {
            state.permissions = response.data
        });
    },
    setRoles(state, arr) {
        state.checkedRoles = arr
    },
    setSpecialRole(state, value) {
        if (value === 'all-access') {
            state.permissions.forEach(permission => {
                state.checkedPermissions.push(permission.id);
            })
        } else if (value === 'no-access') {
            state.checkedPermissions = []
            $('input[name="permission"]').prop('disabled', true)
        } else {
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
    paginate(state, page) {
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

    /*************************POST********************** */
    /**************************************************** */
    /**************************************************** */
    /**************************************************** */

    /********* seccion de paneles *****/
    showSucursalPanel(state) {
        state.clientShow = false
        state.sucursalShow = true
        state.typeServiceShow = false
        state.promotionShow = false
        state.serviceShow = false
        state.personalShow = false
        state.finalShow = false
    },
    showClientPanel(state) {
        state.clientShow = true
        state.sucursalShow = false
        state.typeServiceShow = false
        state.promotionShow = false
        state.serviceShow = false
        state.personalShow = false
        state.finalShow = false
    },
    showTypeServicePanel(state) {
        state.clientShow = false
        state.sucursalShow = false
        state.typeServiceShow = true
        state.promotionShow = false
        state.serviceShow = false
        state.personalShow = false
        state.finalShow = false
        state.is_convenio = state.selectedClient.is_convenio
    },
    showPromotionPanel(state) {
        state.clientShow = false
        state.sucursalShow = false
        state.typeServiceShow = false
        state.promotionShow = true
        state.serviceShow = false
        state.personalShow = false
        state.finalShow = false
        state.selectedTypeService = { id: 1, name: 'PROMOTION' }
    },
    showServicePanel(state) {
        state.clientShow = false
        state.sucursalShow = false
        state.typeServiceShow = false
        state.promotionShow = false
        state.serviceShow = true
        state.personalShow = true
        state.finalShow = false
        state.selectedTypeService = { id: 0, name: 'SERVICE' }
    },
    showFinalPanel(state) {
        state.clientShow = false
        state.sucursalShow = false
        state.typeServiceShow = false
        state.promotionShow = false
        state.serviceShow = false
        state.personalShow = false
        state.finalShow = true
    },
    addSucursal(state, sucursal) {
        state.selectedSucursal = sucursal
    },
    addTypeService(state, typeService) {
        state.selectedTypeService = typeService
    },
    /****** sección select *************** */
    /******************************* */

    /*********sucursales *************/
    allSucursals(state) {
        var url = urlAllSucursals
        state.sucursalsSelect = []
        axios.get(url).then(response => {
            state.sucursals = response.data
            response.data.forEach((sucursal) => {
                state.sucursalsSelect.push({ label: sucursal.name, value: sucursal.id })
            })
        });
    },
    setSucursal(state, sucursal) {
        state.selectedSucursal = sucursal
    },
    /***** métodos de pago *********/
    allPayments(state) {
        var url = urlAllPayments
        axios.get(url).then(response => {
            state.payments = []
            response.data.forEach((payment) => {
                state.payments.push({ label: payment.name, value: payment.id })
            });
        });
    },
    setPayment(state, payment) {
        state.selectedPayment = payment
    },
    /************ clientes *************/
    allClients(state) {
        var url = urlAllClientposts
        axios.get(url).then(response => {
            state.clients = []
            response.data.forEach((client) => {
                state.clients.push({ label: client.name, value: client.id, nombre: client.name, is_convenio: client.is_convenio })
            });
        });
    },
    setClient(state, client) {
        state.selectedClient = client
    },
    /********* servicios *************/
    allServiceposts(state) {
        if (state.selectedCategory != null) {
            var url = urlAllServiceCategory + '/' + state.selectedCategory.value
            axios.get(url).then(response => {
                state.serviceposts = []
                if (response.data != null) {
                    response.data.forEach((service) => {
                        state.serviceposts.push({ label: service.name, value: service.id, precio: service.price })
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
    allPersonalposts(state) {
        var url = urlAllPersonal
        state.personalposts = []
        state.personalposts.push({ label: 'TODOS', value: null })

        axios.get(url).then(response => {
            response.data.forEach((personal) => {
                state.personalposts.push({ label: personal.name, value: personal.id })
            });
        });
    },
    setPersonalpost(state, personal) {
        state.selectedPersonalposts = personal
    },
    /**********sección agregar servicios */
    addService(state) {

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
        state.total_normal += state.selectedServiceposts.precio
        //toastr.success('Servicio Agregado con Éxito')
        state.selectedServiceposts = null
        state.selectedPersonalposts = null
    },
    addServicePersonalPromotion(state, service) {

        state.listServiceposts.push({
            id: service.value,
            nombre: service.label,
            precio: service.precio,
            personal: [state.selectedPersonalposts],

        })
        state.total_normal += service.precio
        //dejando inactivo el servicio confirmado
        state.servicepromotions.forEach(s => {
            if (s.value == service.value) {
                s.estado = 'CONFIRMADO'
                s.personal = state.selectedPersonalposts.label
            }
        })
        state.selectedPersonalposts = null
    },
    deleteServicepost(state) {
        state.listServiceposts.pop()
        state.total_normal.pop()
    },
    /****** suma total */
    //Aqui se esta preguntando por usuario para acceder a su compañia y de su compañia al descuento
    totalServicePost(state) {
        var url = urlUser + '/' + state.selectedClient.value
        axios.get(url).then(response => {
            if (response.data.is_convenio) {
                state.descuento = response.data.company.discount
            } else {
                state.descuento = 0
            }
        }).then(response => {
            var total = 0
            state.totalPost = 0
            if (state.total_promotion > 0) {
                state.totalPost = state.total_promotion
            } else {
                state.listServiceposts.forEach(service => {
                    total += parseInt(service.precio)
                })
                //aplicando descuento en el total
                state.totalPost = total * (100 - state.descuento) / 100
            }
        }).catch(error => {
        })
    },
    addServicePromotion(state) {
        state.listServicepromotions.push({
            service: state.selectedServicepromotions.value,
            nombre: state.selectedServicepromotions.label,
            precio: state.selectedServicepromotions.precio
        })
    },
    deleteServicePromotion(state) {
        state.listServicepromotions.pop()
        state.totalPromotion = 0
    },

    addServiceCreatePromotion(state) {
        state.listServiceCreatepromotions.push({
            service: state.selectedServicepromotions.value,
            nombre: state.selectedServicepromotions.label,
            precio: state.selectedServicepromotions.precio
        })
    },
    deleteServiceCreatePromotion(state) {
        state.listServiceCreatepromotions.pop()
        state.totalCreatePromotion = 0
    },


    /****** suma total */
    totalServicePromotion(state) {
        var totalnew = 0
        var totalold = 0
        state.totalPromotion = 0

        state.servicespromotions.forEach(service1 => {
            totalold += parseInt(service1.price)
        })
        state.listServicepromotions.forEach(service2 => {
            totalnew += parseInt(service2.precio)
        })
        state.totalPromotion = totalnew + totalold
    },

    totalServiceCreatePromotion(state) {
        var totalnew = 0
        var totalold = 0
        state.totalCreatePromotion = 0

        state.servicespromotions.forEach(service1 => {
            totalold += parseInt(service1.price)
        })
        state.listServiceCreatepromotions.forEach(service2 => {
            totalnew += parseInt(service2.precio)
        })
        state.totalCreatePromotion = totalnew + totalold
    },



    /*******seccion sucursales */
    showModalConfirm(state) {
        $('#confirmVoucher').modal('show')
    },
    resetVoucher(state) {
        state.codeVoucher = false
        state.sucursalShow = true

        state.selectedClient = null
        state.selectedSucursal.name = null
        state.selectedPayment = null
    },
    /*************************************** */
    getVouchers(state, page) {
        if (state.searchVoucher.id == '' || state.searchVoucher.id == null)
            var url = urlVoucher + '?page=' + page
        else
            var url = urlVoucher + '?page=' + page + '&id=' + state.searchVoucher.id
        axios.get(url).then(response => {
            state.vouchers = response.data.vouchers.data
            state.pagination = response.data.pagination
        })
    },
    getVouchersImpagos(state, data) {
        var url = urlVoucherImpagos + '/' + state.selectedClient.value
        state.vouchers = []

        axios.get(url).then(response => {
            state.data = response.data
            var data = response.data

            data.forEach(voucher => {
                var descuento = 0
                var personal = ""
                var service = ""
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


    createVoucherService(state) {
        var url = urlVoucherPOST

        if (state.totalPost > 0) {
            let session = {
                total: state.totalPost,
                service: state.listServiceposts,
                payment: state.selectedPayment.label,
                sucursal_id: state.selectedSucursal.id,
                client_id: state.selectedClient.value,
                client_name: 'Voucher ' + state.selectedClient.nombre,
                is_promotion: 0,
                total_normal: state.total_normal,
                discount: state.descuento
            }
            axios.post(url, session).then(response => {
                state.listServiceposts = []
                state.total_normal = 0
                state.totalPost = 0
                toastr.success('Venta generada con exito!')
                // $('#create').modal('hide')
            })
                .catch(error => {
                    toastr.error(error.response.data)
                })
        }
    },

    createVoucherPromotion(state) {
        var url = urlVoucherPOST

        if (state.totalPost > 0) {
            let session = {
                total: state.totalPost,
                service: state.listServiceposts,
                payment: state.selectedPayment.label,
                sucursal_id: state.selectedSucursal.id,
                client_id: state.selectedClient.value,
                client_name: 'Voucher ' + state.selectedClient.nombre,
                is_promotion: 1,
                total_normal: state.total_normal,
                discount: 0
            }
            axios.post(url, session).then(response => {
                state.listServiceposts = []
                state.total_normal = 0
                state.totalPost = 0
                toastr.success('Venta generada con exito!')
                // $('#create').modal('hide')
            }).catch(error => {
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
    showModalDeleteVoucher(state, id) {
        state.idVoucher = id
        $('#modalDeleteVoucher').modal('show')
    },
    deleteVoucher(state) {
        var url = urlVoucher + '/' + state.idVoucher
        axios.delete(url).then(response => {
            toastr.success('Voucher eliminada con éxito')
            $('#modalDeleteVoucher').modal('hide')
        })
    },
    showVoucherButton(state) {
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
    boleta(state, id) {
        var url = urlBoleta + '/' + id
        var printWindow = window.open(url);
        printWindow.focus();
        printWindow.print();
    },
    boletaPdf(state, id) {
        var url = urlBoletaPdf + '/' + id
        window.location.href = url;
    },
    cajaZ(state, id) {
        var url = urlCajaZ + '/' + id
        state.totalCajaZ = 0
        var total_normal = 0
        var total = 0
        var porcent_promotion = 0
        state.cajaServices = []

        axios.get(url).then(response => {
            state.cajaZData = response.data

            state.cajaZData.forEach(voucher => {
                if (voucher.is_paid) {
                    state.totalCajaZ += voucher.total

                    // voucher.serviceposts.forEach(serviceP => {
                    //     total_normal += serviceP.service.price
                    // })


                    // console.log(voucher.total)
                    // console.log(total_normal)

                    // porcent_promotion = (voucher.total / total_normal)

                    state.cajaServices.push({
                        serviceposts: voucher.serviceposts,
                        clientposts: voucher.clientposts,
                        // porcent_promotion: Math.round(porcent_promotion * 100) / 100

                    })


                }
            })
        })
    },
    listaVoucher(state, id) {
        var url = urlListaVoucher + '/' + id
        window.location.href = url;
    },
    totalVoucherPersonal(state, id) {
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


                if (voucher.serviceposts) {
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
    detailPersonalVoucher(state, data) {
        var url = urlDetailVoucherPersonal + '/' + state.sucursalId + '/' + data.id
        state.detailPersonalServices = []
        state.detailPersonalName = data.name

        axios.get(url).then(response => {
            state.data = response.data
            var data = response.data

            data.forEach(datap => {

                datap.serviceposts.forEach(serviceP => {

                    state.detailPersonalServices.push({
                        id: serviceP.service.id,
                        name: serviceP.service.name,
                        price: serviceP.service.price
                    })

                })


            })

        })
    },
    selectedDate(state, data) {
        state.vouchersFilter = []
        state.serviciosPersonal = []
        state.filtroVoucher.total = 0
        var fecha = ''
        var idPersonal = ''
        var contador = 1
        //alert(format)
        if (state.selectedPersonalposts != null) {
            if (state.selectedPersonalposts.value != null)
                idPersonal = state.selectedPersonalposts.value
            else
                idPersonal = ''
        }

        if (data.format == 'day')
            fecha = moment(state.fecha.diaSeleccionado).format('YYYY-MM-DD')
        if (data.format == 'month')
            fecha = moment(state.fecha.mesSeleccionado).format('YYYY-MM-DD')
        if (data.format == 'year')
            fecha = moment(state.fecha.anioSellecionado).format('YYYY-MM-DD')

        if (idPersonal == '')
            var url = urlFiltroVoucher + '?filter[' + data.format + ']=' + fecha + '&filter[sucursal_id]=' + data.id +
                includeVoucherFiltro
        else
            var url = urlFiltroVoucher + '?filter[' + data.format + ']=' + fecha + '&filter[sucursal_id]=' + data.id +
                '&filter[personal]=' + idPersonal
                + includeVoucherFiltro

        if (idPersonal != '')
            axios.get(url).then(response => {
                state.vouchersFilter = response.data

                state.vouchersFilter.forEach(voucher => {

                    voucher.serviceposts.forEach(servicePos => {

                        servicePos.personalposts.forEach(personalPos => {


                            if (personalPos.personal_id == idPersonal) {
                                state.serviciosPersonal.push({
                                    id: contador,
                                    personal: personalPos.personal.name,
                                    name: servicePos.service.name,
                                    price_service: servicePos.service.price,
                                    descuento: servicePos.descuento,
                                    price: servicePos.price,
                                    created_at: servicePos.created_at,
                                    is_promotion: servicePos.is_promotion
                                })
                                //aplicando descuentos del voucher correspondiente
                                state.filtroVoucher.total += servicePos.price

                                contador += 1
                            }

                        })

                    })
                })

                state.filtroVoucher.iva = state.filtroVoucher.total * 0.19
                state.filtroVoucher.totalNeto = state.filtroVoucher.total - state.filtroVoucher.iva
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
                                is_promotion: servicePos.is_promotion
                            })
                            state.filtroVoucher.total += servicePos.price
                            contador += 1

                        })

                    })

                })

                state.filtroVoucher.iva = state.filtroVoucher.total * 0.19
                state.filtroVoucher.totalNeto = state.filtroVoucher.total - state.filtroVoucher.iva

            })
    },
    getVouchersFiltrado(state) {

        var url = urlFiltroVoucher
        axios.get(url).then(response => {
            state.vouchers = response.data

        })
    },

    addToCart(state) {
        if (state.selectedClient != null &&
            state.selectedCategory != null &&
            state.selectedPersonalposts != null &&
            state.selectedServiceposts != null &&
            state.selectedSucursal != null) {

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

    removeFromPost(state, data) {
        let service = state.listServiceposts.find(s => s.nombre == data.id)

        state.total_normal = state.total_normal - service.precio
        state.totalPost = state.totalPost - service.precio

        state.listServiceposts.splice(state.listServiceposts.indexOf(data.id))
    },
    
    createVoucherSession(state) {
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

    editVoucher(state, voucher) {

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
            } else {
                state.selectedPayment = null
            }
        })

        $("#edit").modal('show')
    },
    updateVoucher(state, id) {
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
    /*****************Producto***************** */
    /*********************************************** */
    getProducts(state, page) {
        var url = urlProduct + '?page=' + page + '&name=' + state.searchProduct.name
        axios.get(url).then(response => {
            state.products = response.data.products.data
            state.pagination = response.data.pagination
        });
    },
    createProduct(state) {
        var url = urlProduct
        state.newProduct.flete = state.newFlete.flete
        state.newProduct.utility = state.newUtility.utility
        axios.post(url, state.newProduct).then(response => {
            if (response.data > 0) {
                state.newProduct = { name: '', code: '', supplier: '', detail: '' }
                state.errorsLaravel = []
                $('#create').modal('hide')
                toastr.success('Producto generado con éxito')
            }
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editProduct(state, data) {
        state.fillProduct.id = data.product.id
        state.fillProduct.code = data.product.code
        state.fillProduct.name = data.product.name
        state.fillProduct.supplier = data.product.supplier
        state.fillProduct.utility = data.product.utility
        state.fillProduct.flete = data.product.flete
        state.fillProduct.detail = data.product.detail
        state.current_page = data.page
        $("#edit_product").modal('show')
    },
    updateProduct(state) {
        var url = urlProduct + '/' + state.fillProduct.id
        axios.put(url, state.fillProduct).then(response => {
            if (response) {
                state.errorsLaravel = []
                $('#edit_product').modal('hide')
                toastr.success('Producto actualizado con éxito')
            }
        }).catch(error => {
            console.log(error)
            state.errorsLaravel = error.response.data
        })
    },
    modalDeleteProduct(state, id) {
        state.deleteProductId = id
    },

    deleteProduct(state, id) {
        var url = urlProduct + '/' + id
        axios.delete(url).then(response => {
            if (response.data) {
                state.products = state.products.filter(product => product.id !== response.data.id)
                $('#delete_product').modal('hide')
                toastr.success('Producto eliminado con éxito')
            }
        })
    },
    /*****************inventario***************** */
    /*********************************************** */
    getInventories(state, page) {
        var url = urlInventory + '?page=' + page + '&name=' + state.searchInventory.name
        axios.get(url).then(response => {
            state.inventories = response.data.inventories.data
            state.pagination = response.data.pagination
        });
    },
    createInventory(state) {
        var url = urlInventory
        axios.post(url, state.newInventory).then(response => {
            if (response.data) {
                state.inventories.push(response.data)
                state.newInventory = { product_id: state.newInventory.product_id, quantity: 1, price: 0, discount: 0 }
                state.errorsLaravel = []
                toastr.success('Inventario actualizado con éxito')
            }
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    editInventory(state, data) {
        state.newInventory.product_id = data.id
        state.inventories = data.inventories
    },
    deleteInventory(state, id) {
        var url = urlInventory + '/' + id
        axios.delete(url).then(response => {
            if (response.data) {
                state.inventories = state.inventories.filter(inventory => inventory.id !== response.data.id)
                toastr.success('Inventario eliminado con éxito')
            }
        })
    },
    async uploadInvoice(state) {
        let formData = new FormData()
        var url = urlBill
        formData.append('file', state.fileInvoice)
        formData.append('utility', state.newUtility.utility)
        formData.append('flete', state.newFlete.flete)

        try {
            const response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
            if (response.data.message === "Factura ingresada correctamente") {
                $('#upload_invoice').modal('hide')
                toastr.success('Factura ingresada con éxito!')
                // Ejecutar la mutación getInventories
                this.commit('getInventories', 1);
            }
        } catch (error) {
            $('#upload_invoice').modal('hide')
            toastr.error("Error subiendo la factura, quizás ya la ingreso previamente o no se pudo leer el formato")
            throw error; // Rechazar la promesa si hay un error
        }
    },
    /****************************************** */
    /************************************ */
    createMail(state) {

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
    canSendMail(state, data) {
        var url = urlUser + '/' + data.user.id

        if (data.send)
            data.send = 1
        else
            data.send = 0

        var user = {
            is_activate: data.user.is_activate,
            city: data.user.city,
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
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    fileChange(state, evt) {
        state.form = new FormData
        state.images = []
        state.attachment = []
        let selectedFiles = evt.target.files

        if (!selectedFiles.length) {
            return false
        }

        for (let i = 0; i < selectedFiles.length; i++) {
            state.attachment.push(selectedFiles[i])
        }
    },
    uploadPhoto(state) {
        for (let i = 0; i < state.attachment.length; i++) {
            state.form.append('pics[]', state.attachment[i])
        }

        const config = { headers: { 'Content-Type': 'multipart/form-data' } }

        var url = urlUpload

        $("#files").val(null)
        axios.post(url, state.form, config).then(response => {
            toastr.success('Imagen(es) subida(s) con éxito')
            state.attachment = []
        })
            .catch(response => {
            })

    },
    generateKey(state, id) {
        var url = urlGenerateKey + '/' + id
        axios.post(url).then(response => {
            if (response.data.status === 'success') {
                state.errorsLaravel = [];
                toastr.success(response.data.message)
            }
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    resetIp(state, id) {
        var url = urlResetIp + '/' + id
        axios.post(url).then(response => {
            if (response.data.status === 'success') {
                state.errorsLaravel = [];
                toastr.success(response.data.message)
            }
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    canBlockIp(state, data) {
        var url = urlBlockIp + '/' + data.id

        axios.put(url, data).then(response => {
            state.errorsLaravel = [];
            if (response.data.status === 'success') {
                toastr.success(response.data.message)
            }
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    setSelectedImage(state, value) {
        state.selectedImage = value
    },
    deleteImage(state, data) {
        var url = urlDeleteImage + '/' + data.id
        const image = {
            image: data.image.replace(/.*\/storage\//, '')
        }

        axios.put(url, image).then(response => {
            state.errorsLaravel = [];
            if (response.data.status === 'success') {
                toastr.success(response.data.message)
                state.fillClient.image = null
            }
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },

    /*****************Proveedor***************** */
    /*********************************************** */
    getSuppliers(state, page) {
        var url = urlSupplier + '?page=' + page
        axios.get(url).then(response => {
            state.suppliers = response.data.suppliers.data
            state.pagination = response.data.pagination
        });
    },
    createSupplier(state) {
        var url = urlSupplier
        axios.post(url, state.newSupplier).then(response => {
            if (response.status === 200 && response.data > 0) {
                state.newSupplier = { name: '', rut: '', phone: '', address: '', commercial_business: '' }
                state.errorsLaravel = []
                $('#create').modal('hide')
                toastr.success('Proveedor creado con éxito')
            }
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },

    createUtility(state) {
        var url = urlUtility
        axios.post(url, state.newUtility).then(response => {
            if (response.status === 200 && response.data > 0) {
                state.newUtility.utility = response.data
                state.errorsLaravel = []
                $('#create_utility').modal('hide')
                toastr.success('La utilidad se actualizo éxito')
            }
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    getUtilities(state) {
        var url = urlUtility
        axios.get(url).then(response => {
            state.newUtility.utility = response.data.utility
        });
    },

    createFlete(state) {
        var url = urlFlete
        axios.post(url, state.newFlete).then(response => {
            if (response.status === 200 && response.data > 0) {
                state.newFlete.flete = response.data
                state.errorsLaravel = []
                $('#create_flete').modal('hide')
                toastr.success('El flete se actualizo éxito')
            }
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },
    getFletes(state) {
        var url = urlFlete
        axios.get(url).then(response => {
            state.newFlete.flete = response.data.flete
        });
    },

    createPaymentMethods(state) {
        var url = urlPaymentMethod
        axios.post(url, state.newPaymentMethod).then(response => {
            if (response.status === 201) {
                state.payments.push(response.data)
                state.errorsLaravel = []
                $('#create_payment_methods').modal('hide')
                toastr.success('La Forma de Pago se creo éxito')
            }
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },

    updatePaymentMethods(state) {
        var url = urlPaymentMethod + '/' + state.fillPaymentMethod.id
        axios.put(url, state.fillPaymentMethod).then(response => {
            if (response) {
                state.errorsLaravel = []
                $('#edit_payment').modal('hide')
                toastr.success('La forma de pago fue actualizado con éxito')
            }
        }).catch(error => {
            console.log(error)
            state.errorsLaravel = error.response.data
        })
    },

    editPayment(state, data) {
        state.fillPaymentMethod.id = data.payment.id
        state.fillPaymentMethod.name = data.payment.name
        state.fillPaymentMethod.utility = data.payment.utility
        state.current_page = data.page
    },

    getPayments(state, page) {
        var url = urlPaymentMethod + '?page=' + page
        axios.get(url).then(response => {
            state.payments = response.data.payments.data
            state.pagination = response.data.pagination
        });
    },


    createDiscounts(state) {
        var url = urlDiscount
        axios.post(url, state.newDiscount).then(response => {
            if (response.status === 200 && response.data > 0) {
                state.newDiscount.discount = response.data
                state.errorsLaravel = []
                $('#create_discount').modal('hide')
                toastr.success('El Descuento se actualizo éxito')
            }
        }).catch(error => {
            state.errorsLaravel = error.response.data
        })
    },

    //Sales
    sumQuantity(state) {
        state.newSale.totalNeto = Math.round(((state.newSale.priceMax * parseInt(state.newSale.quantity)) * (state.newSale.utility - 1)) + (state.newSale.priceMax * parseInt(state.newSale.quantity)))

        const high_price = (((state.newSale.priceMax * 1.19) * state.newSale.utility) + state.newSale.flete)
        const average_price_rounded = Math.ceil(state.newSale.average_price / 10) * 10;
        const high_price_rounded = Math.ceil(high_price / 10) * 10;

        if (high_price_rounded !== average_price_rounded) {
            state.newSale.price_sale = high_price_rounded * parseInt(state.newSale.quantity)
        } else {
            state.newSale.price_sale = average_price_rounded * parseInt(state.newSale.quantity)
        }
    },
    addCart(state) {
        const newSale = state.newSale;
        const cart = state.cart;

        if (newSale.quantity > newSale.totalSumQuantity) {
            toastr.error('¡Error, Supera la cantidad disponibles!');
            return;
        }

        const existingCartItem = cart.find(cartItem => cartItem.id === newSale.id);

        if (existingCartItem) {
            existingCartItem.quantity += parseInt(newSale.quantity);
            existingCartItem.totalNeto += newSale.totalNeto;
            existingCartItem.total += newSale.price_sale;
        } else {
            cart.push({
                id: newSale.id,
                name: newSale.product,
                price: newSale.price,
                utility: newSale.utility,
                quantity: parseInt(newSale.quantity),
                neto: newSale.price_sale,
                totalNeto: newSale.totalNeto,
                total: newSale.price_sale
            });
        }

        state.cartNeto += newSale.totalNeto;
        state.cartTotal += newSale.price_sale;
        newSale.totalSumQuantity -= parseInt(newSale.quantity);
    },
    removeCart(state, data) {
        let product = state.cart.find(p => p.id == data.id)
        state.newSale.totalSumQuantity += product.quantity
        state.cartNeto -= product.neto
        state.cartTotal -= product.total
        state.cart.splice(state.cart.indexOf(data.id))
    },
    createSale(state) {
        if (state.selectedPayment === null) {
            toastr.error('¡Error, Selecione la forma de pago!')
        } else {

            let sale = {
                total: state.cartTotal,
                payment: state.selectedPayment.value,
                cart: state.cart
            }

            if (state.cartTotal > 0) {
                axios.post(urlSale, sale)
                    .then(response => {
                        state.cart = []
                        state.cartTotal = 0
                        state.cartNeto = 0
                        state.selectedProduct = null
                        state.selectedPayment = null

                        state.newSale = {
                            id: 0,
                            product: '',
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
                            neto: 0
                        }

                        toastr.success('Venta generada con exito!')
                        $('#generate_sales').modal('hide')
                        this.commit('allSales', { page: 1 })
                    })
                    .catch(error => {
                        toastr.error(error.response.data)
                    })
            }
        }
    },
    allSales(state, data) {
        axios.get(urlSale + '?page=' + data.page + '&calendar=' + data.calendar)
            .then(response => {
                state.sales = response.data.sales.data
                state.pagination = response.data.pagination
            })
            .catch(error => {
                toastr.error(error.response.data)
            })

    },

    generateReceipt(state, id) {
        var url = urlGenerateReceipt + '/' + id
        window.location.href = url;
    },

    modalDeleteSale(state, id) {
        state.sale_id = id
    },

    async deleteSale(state, id) {
        var url = urlSale + '/' + id

        try {
            const response = await axios.delete(url);
            if (response.data.status === true) {
                toastr.success('La Venta se anulo correctamente');
                $('#delete_sale').modal('hide')
                this.commit('allSales', { page: 1 })
            }
        } catch (error) {
            toastr.error("La venta no se anulo")
            throw error; // Rechazar la promesa si hay un error
        }
    },

    boxClosureZ(state) {
        if (state.calendar.search) {
            var url = urlGenerateBoxClosureZ + '/' + state.calendar.search
            axios.get(url)
                .then(response => {
                    if (response.data.error !== 0) {
                        window.location.href = url;
                    } else {
                        toastr.error('No hay ventas en esta fecha')
                    }
                }).catch(error => {
                    toastr.error(error.response.data)
                })

        } else {
            toastr.warning('Seleccione un fecha')
        }
    },



}
