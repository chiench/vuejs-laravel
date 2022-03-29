import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurvays = [
    {
        id: 1,
        tilte:'The product is belong to me',
        slug: 'the-product-is-belong-to-me',
        statu:"draft",
        image:"https://laravel.com/img/logotype.min.svg",
        description:"Welcome to my websit , the author is NVC",
        created_at:"2022-03-29 15:33:33",
        updated_at:"2022-03-30 15:33:33",
        expire_date:"2022-03-31 15:33:33",
        questions:[
            {
                id:1,
                type:"select",
                question:"From which country are you?",
                description: null,
                data:{
                    option:[
                        {uuid:"fefeh2-2aldasdak-2e2ad-22222",text:"USA"},
                        {uuid:"fefeh2-sdasdas-2e2ad-22222",text:"ENG"},
                        {uuid:"fefeh2-gada-2e2ad-22222",text:"VN"},
                        {uuid:"fefeh2-ava-2e2ad-22222",text:"TL"},
                        {uuid:"fefeh2-asd-2e2ad-22222",text:"UC"},
                    ]
                }
            },
            {
                id:2,
                type:"checkbox",
                question:"How are you?",
                description: null,
                data:{
                    option:[
                        {uuid:"fefeh2-2aldasdak-2e2ad-22222",text:"USA"},
                        {uuid:"fefeh2-sdasdas-2e2ad-22222",text:"ENG"},
                        {uuid:"fefeh2-gada-2e2ad-22222",text:"VN"},
                        {uuid:"fefeh2-ava-2e2ad-22222",text:"TL"},
                        {uuid:"fefeh2-asd-2e2ad-22222",text:"UC"},
                    ]
                }
            },
            {
                id:3,
                type:"radio",
                question:"which country are you?",
                description: null,
                data:{
                    option:[
                        {uuid:"fefeh2-2aldasdak-2e2ad-22222",text:"USA"},
                        {uuid:"fefeh2-sdasdas-2e2ad-22222",text:"ENG"},
                        {uuid:"fefeh2-gada-2e2ad-22222",text:"VN"},
                        {uuid:"fefeh2-ava-2e2ad-22222",text:"TL"},
                        {uuid:"fefeh2-asd-2e2ad-22222",text:"UC"},
                    ]
                }
            },
            {
                id:4,
                type:"text",
                question:"Where are you?",
                description: null,
                data:{
                    option:[
                        {uuid:"fefeh2-2aldasdak-2e2ad-22222",text:"USA"},
                        {uuid:"fefeh2-sdasdas-2e2ad-22222",text:"ENG"},
                        {uuid:"fefeh2-gada-2e2ad-22222",text:"VN"},
                        {uuid:"fefeh2-ava-2e2ad-22222",text:"TL"},
                        {uuid:"fefeh2-asd-2e2ad-22222",text:"UC"},
                    ]
                }
            },
        ]

    },
    {
        id: 2,
        tilte:'Laravel',
        slug: 'laravel',
        statu:"draft",
        image:"https://laravel.com/img/logotype.min.svg",
        description:"Welcome to my websit , the author is NVC",
        created_at:"2022-03-29 15:33:33",
        updated_at:"2022-03-30 15:33:33",
        expire_date:"2022-03-31 15:33:33",
        questions:[
            {
                id:1,
                type:"select",
                question:"From which country are you?",
                description: null,
                data:{
                    option:[
                        {uuid:"fefeh2-2aldasdak-2e2ad-22222",text:"USA"},
                        {uuid:"fefeh2-sdasdas-2e2ad-22222",text:"ENG"},
                        {uuid:"fefeh2-gada-2e2ad-22222",text:"VN"},
                        {uuid:"fefeh2-ava-2e2ad-22222",text:"TL"},
                        {uuid:"fefeh2-asd-2e2ad-22222",text:"UC"},
                    ]
                }
            },
            {
                id:2,
                type:"checkbox",
                question:"How are you?",
                description: null,
                data:{
                    option:[
                        {uuid:"fefeh2-2aldasdak-2e2ad-22222",text:"USA"},
                        {uuid:"fefeh2-sdasdas-2e2ad-22222",text:"ENG"},
                        {uuid:"fefeh2-gada-2e2ad-22222",text:"VN"},
                        {uuid:"fefeh2-ava-2e2ad-22222",text:"TL"},
                        {uuid:"fefeh2-asd-2e2ad-22222",text:"UC"},
                    ]
                }
            },
            {
                id:3,
                type:"radio",
                question:"which country are you?",
                description: null,
                data:{
                    option:[
                        {uuid:"fefeh2-2aldasdak-2e2ad-22222",text:"USA"},
                        {uuid:"fefeh2-sdasdas-2e2ad-22222",text:"ENG"},
                        {uuid:"fefeh2-gada-2e2ad-22222",text:"VN"},
                        {uuid:"fefeh2-ava-2e2ad-22222",text:"TL"},
                        {uuid:"fefeh2-asd-2e2ad-22222",text:"UC"},
                    ]
                }
            },
            {
                id:4,
                type:"text",
                question:"Where are you?",
                description: null,
                data:{
                    option:[
                        {uuid:"fefeh2-2aldasdak-2e2ad-22222",text:"USA"},
                        {uuid:"fefeh2-sdasdas-2e2ad-22222",text:"ENG"},
                        {uuid:"fefeh2-gada-2e2ad-22222",text:"VN"},
                        {uuid:"fefeh2-ava-2e2ad-22222",text:"TL"},
                        {uuid:"fefeh2-asd-2e2ad-22222",text:"UC"},
                    ]
                }
            },
        ]

    },
    {
        id: 3,
        tilte:'Vuejs',
        slug: 'vuejs',
        statu:"draft",
        image:"https://laravel.com/img/logotype.min.svg",
        description:"Welcome to my websit , the author is NVC",
        created_at:"2022-03-29 15:33:33",
        updated_at:"2022-03-30 15:33:33",
        expire_date:"2022-03-31 15:33:33",
        questions:[
            {
                id:1,
                type:"select",
                question:"From which country are you?",
                description: null,
                data:{
                    option:[
                        {uuid:"fefeh2-2aldasdak-2e2ad-22222",text:"USA"},
                        {uuid:"fefeh2-sdasdas-2e2ad-22222",text:"ENG"},
                        {uuid:"fefeh2-gada-2e2ad-22222",text:"VN"},
                        {uuid:"fefeh2-ava-2e2ad-22222",text:"TL"},
                        {uuid:"fefeh2-asd-2e2ad-22222",text:"UC"},
                    ]
                }
            },
            {
                id:2,
                type:"checkbox",
                question:"How are you?",
                description: null,
                data:{
                    option:[
                        {uuid:"fefeh2-2aldasdak-2e2ad-22222",text:"USA"},
                        {uuid:"fefeh2-sdasdas-2e2ad-22222",text:"ENG"},
                        {uuid:"fefeh2-gada-2e2ad-22222",text:"VN"},
                        {uuid:"fefeh2-ava-2e2ad-22222",text:"TL"},
                        {uuid:"fefeh2-asd-2e2ad-22222",text:"UC"},
                    ]
                }
            },
            {
                id:3,
                type:"radio",
                question:"which country are you?",
                description: null,
                data:{
                    option:[
                        {uuid:"fefeh2-2aldasdak-2e2ad-22222",text:"USA"},
                        {uuid:"fefeh2-sdasdas-2e2ad-22222",text:"ENG"},
                        {uuid:"fefeh2-gada-2e2ad-22222",text:"VN"},
                        {uuid:"fefeh2-ava-2e2ad-22222",text:"TL"},
                        {uuid:"fefeh2-asd-2e2ad-22222",text:"UC"},
                    ]
                }
            },
            {
                id:4,
                type:"text",
                question:"Where are you?",
                description: null,
                data:{
                    option:[
                        {uuid:"fefeh2-2aldasdak-2e2ad-22222",text:"USA"},
                        {uuid:"fefeh2-sdasdas-2e2ad-22222",text:"ENG"},
                        {uuid:"fefeh2-gada-2e2ad-22222",text:"VN"},
                        {uuid:"fefeh2-ava-2e2ad-22222",text:"TL"},
                        {uuid:"fefeh2-asd-2e2ad-22222",text:"UC"},
                    ]
                }
            },
        ]

    },
]

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
