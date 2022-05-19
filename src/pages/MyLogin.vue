<template>
  <div class="bg">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">基于知识图谱的教学系统用户登录</span>
        <el-button style="float: right; padding: 5px 10px" type="text">
          注册
        </el-button>
      </div>
      <!-- 登录窗口左边图片 -->
      <div class="box-card_left"></div>
      <!-- 登录窗口右边表单 -->
      <div class="box-card_right">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="form.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="form.password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item style="margin: 60px">
            <el-button type="primary" @click="onSubmit('form')">登录</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import { login } from "../utils/api";

export default {
  name: "MyLogin",
  data() {
    // 名字检测
    let checkUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error("用户名不能为空"));
      } else if (value.search(/[!@#$%^&*()<>?]/) != -1) {
        callback(new Error("用户名的特殊字符只能存在_"));
      } else {
        callback();
      }
    };
    // 密码检测
    let checkPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("密码不能为空"));
      } else if (value.length < 3) { //密码限制位数
        callback(new Error("密码不能小于6位"));
      } else {
        callback();
      }
    };

    return {
      // 表单中属性
      form: {
        username: "",
        password: "",
      },
      // 检测规则
      rules: {
        username: [{ validator: checkUsername, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 提交表单
    onSubmit(formName) {
      this.$refs[formName].validate((valid, obj) => {
        if (valid) {
          console.log("前端过滤通过，调接口", this.form.username, this.form.password);
          login({  //登录接口
            username:this.form.username,
            password:this.form.password
          }).then((v) => {
            console.log(v)
            this.$router.push({
              path: "/home",
            });
          });
        } else {
          console.log("未通过字段", obj);
        }
      });
    },
  },
};
</script>

<style>
/* 背景图片 */
.bg {
  height: 100%;
  background-image: url(../assets/loginbkg.webp);
  background-size: cover;
  /* background-clip: content-box; */
  display: flex;
}

/* 登录界面 */
.box-card {
  width: 800px;
  height: 400px;
  margin: auto;
}

/* 登录标题 */
.title {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font: 20px Extra large;
}

/* 登录内容 */
.el-card__body {
  height: 300px;
  display: flex;
}

.box-card_left {
  flex: 1 1 400px;
  height: 100%;
  background-image: url(../assets/loginLeft.webp);
  background-size: contain;
  background-position: 50px;
  background-repeat: no-repeat;
}

.box-card_right {
  padding: 30px 0;
  flex: 1 1 400px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>