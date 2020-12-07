<template>
   <el-header class="header" >
     <el-row type="flex" class="header-container" >
       <el-col :sm="6">
           <div class="logo_block" >
             <div class="circle"></div>
             <p>Purchases</p>
           </div>
       </el-col>
       <el-col :sm="12">
         <el-menu default-active="1"  mode="horizontal" class="hidden-md-and-down">
           <el-menu-item index="1">My Purchases</el-menu-item>
           <el-menu-item index="2" >Help</el-menu-item>
           <el-menu-item index="3"> <i class="el-icon-search"></i> </el-menu-item>
         </el-menu>
       </el-col>
       <el-col :sm="6">
         <div class="profile_section" >
           <el-dropdown trigger="click" class="dropdown hidden-md-and-down">
              <span class="el-dropdown-link">
                <el-row>
                  <el-col :span="12">
                    <div class="element_container">
                      <p class="title">User Profile</p>
                      <p class="subtitle">Rockstone</p>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="avatar">
                         <el-avatar width="39" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                          <i class="el-icon-arrow-down el-icon--right"></i>
                    </div>
                  </el-col>
                </el-row>
              </span>
               <el-dropdown-menu slot="dropdown">
               <el-dropdown-item>Action 1</el-dropdown-item>
               <el-dropdown-item>Action 2</el-dropdown-item>
               <el-dropdown-item>Action 3</el-dropdown-item>
             </el-dropdown-menu>
           </el-dropdown>

         </div>

         <el-button @click="drawer = true"  icon="el-icon-menu"  class="hidden-md-and-up drawer-button" >

         </el-button>

       </el-col>
     </el-row>

     <el-drawer
         title="menu-drawer"
         :visible.sync="drawer"
         :with-header="false"
         size="40"
         class="menu-drawer"
     >
      <el-row>
        <el-col :col="24">
          <el-menu default-active="1"  mode="vertical" >
            <el-menu-item index="1">My Purchases</el-menu-item>
            <el-menu-item index="2" >Help</el-menu-item>
            <el-menu-item index="3"> <i class="el-icon-search"></i> </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :col="24">
          <div class="profile_section" >
            <el-dropdown trigger="click" class="dropdown">
              <span class="el-dropdown-link">
                <el-row>
                  <el-col :span="12">
                    <div class="element_container">
                      <p class="title">User Profile</p>
                      <p class="subtitle">Rockstone</p>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="avatar">
                         <el-avatar width="39" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                          <i class="el-icon-arrow-down el-icon--right"></i>
                    </div>
                  </el-col>
                </el-row>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </div>

        </el-col>
      </el-row>
     </el-drawer>
   </el-header>

</template>



<script lang="ts">

import {Vue, Component} from 'vue-property-decorator'

const drawer: boolean = false
@Component
export default class Header extends Vue {

  drawer = drawer
}

</script>
