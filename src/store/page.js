// page的Store
export default {
    namespaced:true,
    actions:{
        changePage(context, value){
            context.commit('CHANGE_PAGE', value);
        }
    },
    mutations:{
        CHANGE_PAGE(state, value){
            state.currentPage = value;
        }
    },
    state:{
        currentPage:0
    }
}