import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

// import 'normalize.css/normalize.css'

import * as iView from 'iview';
import 'iview/dist/styles/iview.css';

import * as VueRx from 'vue-rx'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription' // Disposable if using RxJS4
import { Subject } from 'rxjs/Subject' // required for domStreams option

// tada!
Vue.use(VueRx, {
  Observable,
  Subscription,
  Subject
})

Vue.use(iView)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
