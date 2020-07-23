import Vuex from 'vuex'


export default () => {
    return new Vuex.Store({
        store:{
            subject: {},
            teacher: {}
        },
        mutations:{
            setTeacher: (state, payload) => {
                state.teacher = payload
            },
            setSubject: (state, payload) => {
                state.subject = payload
            }
        }
    })
}