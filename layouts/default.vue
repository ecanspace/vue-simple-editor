<template>
  <el-container class="default-layout">
    <el-header height="auto">
      <div class="application-header">
        <div class="application-header__inner">
          <h1 class="application-title">
            <a href="/">Smartable Editor</a>
          </h1>
          <el-menu class="application-top-menu" mode="horizontal" active-text-color="#409EFF" :default-active="activeIndex" @select="handleSelect">
            <el-menu-item index="/">视图管理</el-menu-item>
            <el-menu-item index="/editor">画布平台</el-menu-item>
          </el-menu>
          <div class="application-author">
            <el-divider direction="vertical"></el-divider>
            <strong>Powered by tzcloud FE</strong>
          </div>
        </div>
      </div>
    </el-header>
    <el-main>
      <Nuxt />
    </el-main>
    <el-footer height="auto">
      <div class="copyright">倍施特科技（集团）股份有限公司 ©2022</div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path
    }
  },

  watch: {
    $route(route) {
      this.activeIndex = route.path
    }
  },

  methods: {
    handleSelect(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
.default-layout > .el-header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.application-header {
  display: block;
  width: 62.5vw;
  margin: 0 auto;
  position: relative;
}
.application-header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;
}
.application-title {
  display: inline-block;
  height: 60px;
  margin-right: 20px;
  font-size: 24px;
  font-weight: bold;
  line-height: 60px;
  text-align: center;
}
.application-title a {
  color: #409EFF;
}
.el-menu.application-top-menu {
  border-bottom: none;
  margin: 0 40px;
}
.application-top-menu .el-menu-item {
  height: 60px;
  line-height: 60px;
  padding: 0 40px;
  user-select: none;
}
.application-top-menu .el-menu-item.is-active {
  background-color: #ecf5ff !important;
}
.application-author {
  padding: 10px 20px;
  line-height: normal;
  display: flex;
  align-items: center;
}
.application-author .el-divider--vertical {
  margin: 0 20px;
}
.application-author strong {
  font-size: 14px;
  color: #909399;
}
.copyright {
  padding: 8px 0;
  color: #909399;
  font-size: 12px;
  text-align: center;
}
</style>