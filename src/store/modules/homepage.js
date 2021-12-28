import axios from "axios"
const qs = require('qs');

export default {
    namespaced: true,
    state() {
        return {
            news: [],
            jerseys: []
        }
    },
    mutations: {
        loadNews(state, payload) {
            state.news = payload
        },
        loadJerseys(state, payload) {
            state.jerseys = payload
            console.log(state.jerseys);
        }
    },
    actions: {
        async loadNews({ commit }) {
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
        },
        async loadJerseys({ commit }) {
            const res = await axios.get('http://localhost:1337/api/jerseys?populate=*');
            commit('loadJerseys', res.data.data)
        }
    },
    getters: {
        news(state) {
            return state.news
        },
        jerseys(state) {
            return state.jerseys
        }
    },
}