export default {
    namespaced:true,
    actions:{
        upDateQType(context, value){
            context.commit('UPDATE_Q_TYPE',value)
        }
    },
    mutations:{
        UPDATE_Q_TYPE(state, value){
            state.qType = value
        }
    },
    state:{
        qType:0
    }
}