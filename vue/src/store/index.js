import { createStore } from "vuex";
import axiosClient from "../axios";


const store = createStore({
    state: {
        // chưa data để thực hiện
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN')
        }
    },
    getters: {
        // chứa các hàm để lấy dư liệu từ state
    },

    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({ data }) => {
                    commit('setUser', data)
                    return data;
                })
        },
        login({commit},user){
            return axiosClient.post('/login',user).then(
                ({data}) => {
                    commit('setUser',data)
                    return data;
                }
            )
        },
        logout({commit}){
            return axiosClient.post('/logout').then(
                response => {
                    commit('logout')
                    return response;
                }
            )
        }

        //chưa các hàm , logic để xử lý tính toán các thao tác từ view rồi commint vào sau đó gọi để mutations
        // sau đó gọi các hàm trong mutation
    },
    mutations: {
        // lấy các dữ liệu để thực hiện thay đổi dữ liệu gốc trong state
        logout: state => {
            state.user.data = {},
                state.user.token = null
                sessionStorage.removeItem('TOKEN')
        },

        setUser: (state, res) => {
            state.user.token = res.token;
            state.user.data = res.data;
            sessionStorage.setItem('TOKEN', res.token);
        },

    },
    modules: {},
});

export default store;
