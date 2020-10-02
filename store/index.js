import Vuex from 'vuex'


export default () => {
    return new Vuex.Store({
        store:{
            subject: {},
            teacher: {},
            myCoursesAsTeacher:[]
        },
        mutations:{
            setTeacher: (state, payload) => {
                state.teacher = payload
            },
            setSubject: (state, payload) => {
                state.subject = payload
            },
            SET_MY_COURSES: (state, payload) => {
                state.myCoursesAsTeacher = payload
            },
            ADD_TO_MY_COURSES: (state, payload) => {
                state.myCoursesAsTeacher.push(payload);
            }
        },
        getters:{
            getMyCourses: state => {
                return state.myCoursesAsTeacher;
            }
        }
    })
}