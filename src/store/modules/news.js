import axios from "axios"
const qs = require('qs');

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
           
const query = qs.stringify({
    sort: ['publishedAt:desc'],
  pagination: {
    page: 1,
    pageSize: 3,
  },
}, {
  encodeValuesOnly: true,
});

// GET /api/articles?pagination[page]=1&pagination[pageSize]=10
            const res = await axios.get(`http://localhost:1337/api/articles?${query}&populate=*`)
            commit('loadNews', res.data.data)
        }
    },
    getters: {
        news(state){
            return state.news
        }
    },
}