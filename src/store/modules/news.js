import axios from "axios"

export default {
    state(){
        return {
            news: []
        }
    },
    mutations: {
        loadNews(state, payload){
            state.news = payload
            console.log(state.news);
        }
    },
    actions: {
        async loadNews({commit}){
            const res = await axios.get('http://localhost:1337/api/articles?populate=*')
            commit('loadNews', res.data.data)
        }
    },
    getters: {
        news(state){
            return state.news
        }
    },
}