<template>
  <el-container class="home-container">
    <el-header>
      <div class="header-container">
        <img class="header-nav-img" src="../assets/logo.png" alt="无" />
        <span>电商后台系统</span>
      </div>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu
          background-color="#373d41"
          text-color="#ffffff"
          active-text-color="#409e2ff"
          :unique-opened="true"
          router
          :default-active="this.$route.path"
        >
          <el-submenu
            popper-append-to-body
            :index="item.path"
            v-for="item in menuList"
            :key="item.id"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item
              popper-append-to-body="false"
              v-for="subitem in item.children"
              :key="subitem.id"
              :index="subitem.path"
            >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{subitem.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      menuList: [
        {
          id: 1,
          name: '用户管理',
          path: '/Welcome',
          children: [{ id: 6, name: '用户列表', path: '/Welcome' }]
        },
        {
          id: 2,
          name: '权限管理',
          path: '/quanxian',
          children: [{ id: 7, name: '222', path: '/quanxian' }]
        },
        {
          id: 3,
          name: '商品管理',
          path: '/Welcome',
          children: [{ id: 8, name: '333', path: '/Welcome' }]
        },
        {
          id: 4,
          name: '订单管理',
          path: '/Welcome',
          children: [{ id: 9, name: '111', path: '/Welcome' }]
        },
        {
          id: 5,
          name: '数据统计',
          path: '/Welcome',
          children: [{ id: 10, name: '222', path: '/Welcome' }]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped >
.home-container {
  height: 100%;
}
.header-nav-img {
  height: 80%;
}
.el-header {
  .header-container {
    margin-left: 0;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 25px;
    color: #ffffff;
    .header-nav-img {
      height: 80%;
    }
    span {
      margin-left: 15px;
    }
  }
  padding-left: 0;
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
}
.el-aside {
  background-color: #333744;
  el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
</style>
