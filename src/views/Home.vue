<template>
  <div class="home">
    <div class="filter_header">
          <div >
                <p class="title">Purchases <span class="p_value">4</span> </p>
                <p class="archive">Archive <span>3</span> </p>
          </div>
          <div class="buttons_section">
            <el-button class="is-active" type="plain" round>All Orders</el-button>
            <el-button type="plain" round>Digital Products</el-button>
            <el-button type="plain" round>Physical Products</el-button>
          </div>
          <div class="search" >
            <p>Search Purchases</p>
          </div>

    </div>
    <div class="card_container">
        <Card  :item.sync="order" v-for="(order, i) in orders" :key="i" />
    </div>


  </div>
</template>

<script lang="ts">
  import axios from 'axios'
  import Card from '@/components/Card'

  import {Component, Provide, Vue} from 'vue-property-decorator';

  const orders: object = []



  @Component({
    components:{
      Card,

    }
  })

  export default class Home extends Vue {

  @Provide()
  orders = orders

  created() {
    axios.get('/api/orders')
        .then(response => {
          this.orders = response.data
        })
        .catch(error => {
          console.log(error.response)
    })
  }

}
</script>
