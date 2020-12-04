<template>
   <el-header class="header" >
        <el-row type="flex" class="row-bg" >
       <el-col >
           <div class="logo_block" >
             <div class="circle"></div>
             <p>Purchases</p>
           </div>
       </el-col>
       <el-col >
         <el-menu default-active="1" class="el-menu-demo" mode="horizontal" >
           <el-menu-item index="1">My Purchases</el-menu-item>
           <el-menu-item index="2" >Help</el-menu-item>
           <el-menu-item index="3"> <i class="el-icon-search"></i> </el-menu-item>
         </el-menu>
       </el-col>
       <el-col >
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
   </el-header>
</template>



<script lang="ts">

import {Vue, Component} from 'vue-property-decorator'

@Component
export default class Header extends Vue {

}

</script>
