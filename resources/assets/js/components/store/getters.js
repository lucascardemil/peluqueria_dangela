export default { //computed propeties
    completeRoleCreate(state, getters) {
        return state.newRole.name.length >= 4
    },
    completeRoleEdit(state, getters) {
        return state.fillRole.name.length >= 4
    },
    completeCategoryCreate(state, getters) {
        return state.newCategory.name.length >= 4
    },
    completeCategoryEdit(state, getters) {
        return state.fillCategory.id && state.fillCategory.name.length >= 4
    },
    completePromotionaAdd(state, getters) {
        return state.selectedCategory
            && state.selectedServicepromotions 
            && state.newPromotion.name.length >= 4
    },
    completePromotionCreate(state, getters) {
        return state.newPromotion.name.length >= 4
    },
    completePromotionEdit(state, getters) {
        return state.fillPromotion.id && state.fillPromotion.name.length >= 4
    },
    completePersonalCreate(state, getters) {
        return state.newPersonal.name.length >= 4
    },
    completePersonalEdit(state, getters) {
        return state.fillPersonal.id && state.fillPersonal.name.length >= 4
    },
    completeCompanyCreate(state, getters) {
        return state.newCompany.name.length >= 4
    },
    completeCompanyEdit(state, getters) {
        return state.fillCompany.id && state.fillCompany.name.length >= 4
    },
    completeProfessionCreate(state, getters) {
        return state.newProfession.name.length >= 4
    },
    completeProfessionEdit(state, getters) {
        return state.fillProfession.id && state.fillProfession.name.length >= 4
    },
    completeUserCreate(state, getters) {
        return state.newUser.name.length >= 6
            && state.newUser.email.length >= 6
            && state.newUser.password.length >= 6
    },
    completeClientCreate(state, getters) {
        return state.selectedProfession
            && state.newClient.rut.length >= 7
            && state.newClient.name.length >= 2
            && state.newClient.email.length >= 6
            && state.newClient.city.length >= 6
            && state.newClient.birthdate
            && state.newClient.sex
    },
    completeUserUpdate(state, getters) {
        return state.fillUser.name.length >= 6
            && state.fillUser.email.length >= 6
            && state.fillUser.password.length >= 6
    },
    completeClientUpdate(state, getters) {
        return state.selectedProfession
            && state.fillClient.rut.length >= 7
            && state.fillClient.name.length >= 2
            && state.fillClient.email.length >= 6
            && state.fillClient.city.length >= 6
            && state.fillClient.birthdate
            && state.fillClient.sex
    },
    completeServiceCreate(state, getters) {
        return state.selectedCategory
            && state.newService.name.length >= 4
            && state.newService.score_exchange
            && state.newService.score_accumulated
            && state.newService.price
    },
    completeServiceEdit(state, getters) {
        return state.selectedCategory
            && state.fillService.name.length >= 4
            && state.fillService.score_exchange
            && state.fillService.score_accumulated
            && state.fillService.price

    },
    completeBrandCreate(state, getters) {
        return state.newBrand.name.length >= 4
    },
    completeBrandEdit(state, getters) {
        return state.fillBrand.id && state.fillBrand.name.length >= 4
    },
    completeLaboratoryCreate(state, getters) {
        return state.newLaboratory.name.length >= 4
    },
    completeLaboratoryEdit(state, getters) {
        return state.fillLaboratory.id && state.fillLaboratory.name.length >= 4
    },
    completeUnitCreate(state, getters) {
        return state.newUnit.name.length >= 4
    },
    completeUnitEdit(state, getters) {
        return state.fillUnit.id && state.fillUnit.name.length >= 4
    },
    completeProductCreate(state, getters) {
        return state.newProduct.name.length >= 4
    },
    completeProductEdit(state, getters) {
        return state.fillProduct.id && state.fillProduct.name.length >= 4
    },
    completeCodeCreate(state, getters) {
        return state.newCode.name.length >= 4
    },
    completeCodeEdit(state, getters) {
        return state.fillCode.id && state.fillCode.name.length >= 4
    },
    completeTemplateCreate(state, getters) {
        return state.newTemplate.name.length >= 4
    },
    completeTemplateEdit(state, getters) {
        return state.fillTemplate.id && state.fillTemplate.name.length >= 4
    },
    completeInventoryCreate(state, getters) {
        return state.newInventory.price && state.newInventory.quantity
    },
    completeInventoryEdit(state, getters) {
        return state.fillInventory.id && state.fillInventory.price && state.fillInventory.quantity
    },
    isActived(state, getters) {
        return state.pagination.current_page
    },
    pagesNumber(state, getters) {
        if (!state.pagination.to) {
            return [];
        }

        var from = state.pagination.current_page - state.offset
        if (from < 1) {
            from = 1;
        }

        var to = from + (state.offset * 2);
        if (to >= state.pagination.last_page) {
            to = state.pagination.last_page;
        }

        var pagesArray = [];
        while (from <= to) {
            pagesArray.push(from);
            from++;
        }

        return pagesArray;
    },
    getUser(state, getters) {
        return state.user
    },
    getService(state, getters) {
        return state.service
    },
    getPromotion(state, getters) {
        return state.promotion
    },
    getUserService(state, getters) {
        return state.userServices
    },
    getItem(state, getters) {
        return state.selectedItem
    },
    getProfession(state, getters) {
        return state.selectedProfession
    },
    getItemPersonal(state, getters) {
        return state.selectedPersonal
    },
    /**************************************** */
    /**************************************** */
    /*********** sección post ************** */
    /*************************************** */
    /*************************************** */
    getClient(state, getters) {
        return state.selectedClient
    },
    completeVoucher(state, getters) {
        return state.selectedSucursal.name
            && state.selectedClient
            && state.listServiceposts
            && state.selectedPayment
    },
    completeVoucherEdit(state, getters) {
        return state.fillVoucher.id
            && state.fillVoucher.name.length >= 4
            && state.selectedPayment != null
    },
    completeMail(state) {
        return state.newMail.subject
            && state.newMail.message
    }
}
