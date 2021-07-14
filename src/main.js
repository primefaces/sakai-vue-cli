import 'prismjs/themes/prism-coy.css';
import '@fullcalendar/core/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import '@fullcalendar/timegrid/main.min.css';
import './assets/layout/layout.scss';
import './assets/layout/flags/flags.css';

import { createApp, reactive } from 'vue';
import router from './router';
import App from './App.vue';

//PrimeVue
import { registrationPrimevue } from "./plugins/primevue";

import CodeHighlight from './AppCodeHighlight';

router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(App);

app.config.globalProperties.$appState = reactive({ inputStyle: 'outlined' });
app.use(router);
app.directive('code', CodeHighlight);

registrationPrimevue(app);

app.mount('#app');