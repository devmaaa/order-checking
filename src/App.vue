<template>
  <div id="app">
      <Header/>
    <div class="container">
      <Home/>
    </div>
  </div>
</template>

<script lang="ts">
  import Header from '@/components/Header.vue'
  import Home from '@/views/Home'
  import {Vue,Component} from "vue-property-decorator"
  import 'element-ui/lib/theme-chalk/display.css';

  @Component({
    components: {
      Header ,
      Home
    },
  })


  export default class App extends Vue {

  }
</script>

<style lang="scss">
  @import "styles/abstracts/variables";
  @import "styles/abstracts/typography";
  @import "styles/abstracts/mixins";
  @import "styles/base/utilities";
  @import "styles/base/base";
  @import "styles/layout/header";
  @import "styles/components/card";
  @import "styles/pages/home";
</style>
