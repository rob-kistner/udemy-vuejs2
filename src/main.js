import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

/*-----------------------------------
  |  axios isn't a Vue-specific package so
  |  you don't do Vue.use
  |
  |  Here we're setting global config settings for
  |  various things
  |
  |  NOTE: If you change axios.default, you do have 
  |  to restart the server
-----------------------------------*/
axios.defaults.baseURL = 'https://vuejs-http-582b9.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'asdf';
axios.defaults.headers.get['Accepts'] = 'application/json';

/*-----------------------------------
  |  Interceptors
  |
  |  Allows you to run code before any 
  |  request/response, etc. from axios
  |  is made
-----------------------------------*/
const reqInterc = axios.interceptors.request.use(config => {
  console.log('intercepting request...', config);
  // must return request config or it won't be available
  // to the app after the interceptor
  return config;
});
const resInterc = axios.interceptors.response.use(res => {
  console.log('intercepting response...', res);
  // must return response or it won't be available
  // to the app after the interceptor
  return res;
});

/*----------------------------------------
  |  Eject stops interceptors from happening
  |  these will destroy the above two interceptors
  |  so you won't see anything happen
----------------------------------------*/
axios.interceptors.request.eject(reqInterc);
axios.interceptors.response.eject(resInterc);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
