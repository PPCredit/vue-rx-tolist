<template>
  <div>
    <h2 class="title">Output</h2>
    <Input placeholder="请输入...">
    <Button slot="append" icon="ios-search"></Button>
    </Input>

    <!-- <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
                      <span>0%</span>
                    </div>
                  </div> -->
    <!-- <ul class="list-group"></ul> -->
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class extends Vue {
  message = 'Welcome to Your Vue.js App'
}
</script>


<style lang="stylus" scpoed>
h2.title{
  text-align center
}

</style>

