import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import ru from 'vuetify/es5/locale/ru';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    primary: colors.blue.darken4,
    secondary: colors.amber.lighten2,
  },
  lang: {
    locales: { ru },
    current: 'ru',
  },
});
