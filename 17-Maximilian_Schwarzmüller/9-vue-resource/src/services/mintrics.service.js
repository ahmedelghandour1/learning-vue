import Vue from 'vue';
const BASE_URL = 'https://api.mintrics.com/api/v2';

export default {
    login(data) {
        return Vue.http.post(`${BASE_URL}/user/login`, data);
    }
}
