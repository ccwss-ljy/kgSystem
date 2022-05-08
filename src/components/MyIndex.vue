<template>
  <el-container class="outer">
    <!-- 顶部 -->
    <el-header>
      <!-- 标题 -->
      <div class="MyIndex_left">
        <div class="imageBox">
          <img src="../assets/schoolSkin.jpg" alt="" class="image" />
        </div>
        <span>基于知识图谱的教学系统</span>
      </div>
      <!-- 按钮框 -->
      <div class="MyIndex_right">
        <el-button>下载模板</el-button>
        <el-button>导入试题</el-button>
        <el-button>导入答题记录</el-button>
        <el-button type="text" style="color: white">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <!-- 导航栏 -->
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#e9eef3"
          router
        >
          <el-menu-item index="/home/answeranalysis">
            <template slot="title"> 答题分析 </template>
          </el-menu-item>
          <el-menu-item index="/home/exercisemark">
            <template slot="title"> 习题标注 </template>
          </el-menu-item>
          <el-submenu index="/home/viewexercise">
            <template slot="title"> 查看习题 </template>
            <el-menu-item index="3-1" class="subMenu" >所有试题</el-menu-item>
            <el-menu-item index="3-2" class="subMenu">未标注</el-menu-item>
            <el-menu-item index="3-3" class="subMenu">待审核</el-menu-item>
            <el-menu-item index="3-4" class="subMenu">审核通过</el-menu-item>
          </el-submenu>
          <el-submenu index="/home/behavioranalysis">
            <template slot="title"> 行为分析 </template>
            <el-menu-item index="4-1" class="subMenu">测试记录</el-menu-item>
            <el-menu-item index="4-2" class="subMenu">答题记录</el-menu-item>
            <el-menu-item index="4-3" class="subMenu">因果分析</el-menu-item>
          </el-submenu>
          <el-menu-item index="/home/viewexam">
            <template slot="title"> 查看试卷 </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 内容区 -->
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
/* 整体布局 */
.outer {
  height: 100%;
}
/* 顶部 */
.el-header {
  background-color: #409eff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 顶部标题 */
.MyIndex_left {
  display: flex;
  align-items: center;
  flex-basis: 350px;
  color: #fff;
  font-size: 24px;
  justify-content: space-around;
  margin-left: 40px;
}

/* 校徽 */
.imageBox {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

/* 顶部右边按钮 */
.MyIndex_right {
  display: flex;
  flex-basis: 450px;
  justify-content: space-evenly;
}

/* 导航栏 */
.el-aside {
  background-color: #e9eef3;
  text-align: center;
}

.subMenu{
    background-color:#fff;
}

/* 内容区 */
.el-main {
  background-color: #fff;
  text-align: center;
}
</style>