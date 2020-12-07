<template>

  <el-card class="box-card" shadow="hover"  >
        <div slot="header" class="block_2" style="justify-content: space-between">
          <div class="status block_2" >
            <!--<el-button type="success" circle icon="el-icon-check"></el-button>-->
            <div>
              <img :src="getIconUrl(itemData['status'].icon )"  alt="icon"  >
            </div>
            <!-- Delivered Today-->
            <p v-bind:style="'color:' + statusChecker(itemData['status'].type)">{{itemData['status'].name}}</p>
          </div>
          <el-dropdown trigger="click" class="card_dropdown">
            <div class="el-dropdown-link">
              <div class="circle"></div>
            </div>
            <el-dropdown-menu slot="dropdown" class="card_dropdown--list">
              <el-dropdown-item v-for="(item , i) in itemData['details'].menuItems" :key="i">{{item}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="card-body">
          <div class="block_2 card_item">
            <div class="card_item--image">
              <img :src="getImgUrl(itemData['details'].img)" alt="">
            </div>
            <div class="card_item--description">
              <p class="item_title">{{ itemData['details'].title }}</p>
              <p class="item_purchased--info">Purchased: {{itemData['details'].purchased}}</p>
              <p class="item_order--id">Order Reference: #{{itemData['details'].id}}</p>
              <p class="item_soldby">
                Sold By: <el-link href="#"  type="primary" >{{ itemData['details'].storeName }}</el-link>
              </p>
              <p class="item_price">${{itemData['details'].price}}</p>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="card-footer">

          <div class="card_buttons">
            <el-button class="is-active" type="plain" round>Get Support</el-button>

              <el-button v-if="itemData['status'].type == 'incomplete'" :class="itemData['status'].type ? 'incomplete' : '' " round>Complete Purchase</el-button>
              <template v-else>
                <el-button type="plain" round>Track Package</el-button>
                <el-button type="plain" round>Order Details</el-button>
              </template>


          </div>

        </div>
        <div class="order_details ">
          <div class="block_2">
            <p>{{itemData['details'].orderInfo }}</p>
            <p>${{itemData['details'].price }}</p>
          </div>
          <div class="block_2">
            <p> <el-link type="primary" :href="itemData['details']['disputeLink'] ">View Refund Details</el-link> </p>
            <p class="date"> {{itemData['details'].orderDate}}</p>
          </div>
        </div>
      </el-card>


</template>

<script lang="ts">

import {Vue, Component, PropSync} from 'vue-property-decorator'


@Component
export default class Card extends Vue{


  @PropSync('item', { type: Object })  itemData!: object


  public getImgUrl(src: string): string {
    if(src){
      let images = require.context('@/assets/img', false, /\.png$/)
      return images('./' + src)
    }
  }
  public getIconUrl(src: string): string {
    if(src) {
      let icons = require.context('@/assets/icons', false, /\.svg$/)
      return icons(`./` + src)
    }
  }

  public statusChecker(status: string): string {
         switch(status) {
           case 'delivered': {
             return '#0AD688'
           }
           case 'shipped': {
             return '#21455E;'
           }
           case 'awaiting': {
             return '#21455E'
           }
           case 'arriving': {
             return '#21455E'
           }
           case 'incomplete':{
             return '#F3923C'
           }
         }
   }





}
</script>

