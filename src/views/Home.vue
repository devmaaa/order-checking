<template>
  <div class="home">
    <div class="filter_header">

      <el-row type="flex" class="row-bg" >
        <el-col >
          <div class="block_2">
                <p class="title">Purchases <span class="p_value">4</span> </p>
                <p class="archive">Archive <span>3</span> </p>
          </div>
        </el-col>
        <el-col >
          <div class="buttons_section">
            <el-button class="is-active" type="plain" round>All Orders</el-button>
            <el-button type="plain" round>Digital Products</el-button>
            <el-button type="plain" round>Physical Products</el-button>
          </div>
        </el-col>
        <el-col >
          <div class="search" >
            <p>Search Purchases</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="card_container">
      <el-row >
        <el-col :span="12"   v-for="(order, i) in orders" :key="i">
          <Card  :item.sync="order"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Card from '@/components/Card'
import {Component, Provide, Vue} from 'vue-property-decorator';

let orders: any = []

@Component({
  components:{
    Card
  }
})

export default class Home extends Vue {

  @Provide()
  orders = orders


  created() {
    axios.get('/api/orders')
        .then(response => {
          this.orders = response.data
          console.log("from Home")
          console.log(orders)
          this.isLoading = false
        })
        .catch(error => {
          console.log(error.response)
    })
  }

}
</script>
