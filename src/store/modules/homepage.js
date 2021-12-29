import axios from "axios"
const qs = require('qs');

const api = {
    url: 'http://localhost:1337/api/',
    collections: {
        article: 'articles',
        jersey: 'jerseys',
        stage: 'stages',
        banner: 'banner'
    }
}

export default {
    namespaced: true,
    state() {
        return {
            news: [],
            jerseys: [],
            stages: [],
            banner: {}
        }
    },
    mutations: {
        loadNews(state, payload) {
            state.news = payload
        },
        loadJerseys(state, payload) {
            state.jerseys = payload
        },
        loadStages(state, payload){
            state.stages = payload
        },
        loadBanner(state, payload){
            state.banner.title = payload.attributes.title
            state.banner.url = payload.attributes.image.data.attributes.url
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
            const res = await axios.get(api.url + api.collections.article + `?${query}&populate=*`)
            commit('loadNews', res.data.data)
        },
        async loadJerseys({ commit }) {
            const res = await axios.get(api.url + api.collections.jersey + '?populate=*');
            commit('loadJerseys', res.data.data)
        },
        async loadStages({ commit }) {
            const res = await axios.get(api.url + api.collections.stage + '?populate=*');
            commit('loadStages', res.data.data)
        },
        async loadBanner({ commit }) {
            const res = await axios.get(api.url + api.collections.banner + '?populate=*');
            commit('loadBanner', res.data.data)
        },
        
    },
    getters: {
        news(state) {
            return state.news
        },
        jerseys(state) {
            return state.jerseys
        },
        stages(state){
            return state.stages
        },
        banner(state){
            return state.banner
        }
    },
}