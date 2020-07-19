import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import localforage from 'localforage';

localforage.config({
    name: 'out-of-context'
});

Vue.config.productionTip = false;
Vue.use(Vuetify);

(async() =>
{
    let theme = await localforage.getItem('theme');
    if(!theme)
    {
        theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    }
    
    new Vue({
        vuetify: new Vuetify({
            theme: {
                dark: theme !== 'light'
            }
        }),
        render: function(h)
        {
            return h(App);
        }
    }).$mount('#app');
})();
