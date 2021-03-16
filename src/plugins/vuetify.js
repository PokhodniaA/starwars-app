import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            light: {
                primary: '#FFF',
                secondary: '#F2EEEE',
                text: '#000',
                accent: '#FF634A',
            }
        }
    }
});
