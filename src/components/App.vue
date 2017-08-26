<template>
  <div id="app">
    <div class="banner">
      <img src="../assets/logo.png">
      <img src="../assets/rxjs.png" width="200">
    </div>
    <!-- <Hello :greeting="message"></Hello> -->
    <!-- <Date></Date> -->
    <TodoList></TodoList>

  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Hello from './Hello.vue'
import Date from './Date.vue'
import TodoList from './TodoList.vue'

@Component({
  components: {
    Hello,
    Date,
    TodoList
  }
})
export default class extends Vue {
  message = 'Welcome to Your Vue.js App'
}
</script>



<style lang="stylus" scoped>
.banner{
  // margin 0 auto
  text-align center
}
</style>
