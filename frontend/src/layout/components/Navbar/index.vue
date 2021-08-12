<template>
  <div class='navbar'>
    <el-row class='main-navbar'>
      <el-col :span='4' class='logo-box'>
        <img src='../../../../public/logo.png' alt='job tracker' class='logo'>
      </el-col>
      <el-col :span='20' class='menu-box'>
        <el-menu class='el-menu-demo' mode='horizontal'>
          <el-menu-item>
            <router-link to='/' class='link'>Home Page</router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link to='job' class='link'>Job List</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Navbar'
})
export default class extends Vue {
}
</script>

<style lang='scss' scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #fff;
  text-align: center;

  .logo-box {

    .logo {
      display: block;
      height: 50px;
      margin: 0 auto;
    }
  }

  .menu-box {
    background-color: #fff;
  }

  .link {
    font-size: 16px;
    font-weight: bold;
    color: #dd6161;
  }

  .main-navbar {
    width: 300px;
    margin: 0 auto;
  }
}
</style>
