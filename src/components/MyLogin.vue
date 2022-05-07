<template>
  <div class="bg">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">基于知识图谱的教学系统用户登录</span>
        <el-button style="float: right; padding: 5px 10px" type="text"
          >注册</el-button
        >
      </div>
      <div class="left"></div>
      <div class="right">
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
export default {
  data() {
    let checkUsername = (rule, value, callback) => {
        if(!value){
            callback(new Error('用户名不能为空'))
        }
        else if(value.search(/[!@#$%^&*()<>?]/) != -1){
            callback(new Error('用户名的特殊字符只能存在_'))
        }
        else{
            callback()
        }
    };
    let checkPassword = (rule, value, callback) => {
        if(!value){
            callback(new Error('密码不能为空'))
        }
        else if(value.length < 6){
            callback(new Error('密码不能小于6位'))
        }
        else{
            callback();
        }
    };

    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: checkUsername, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit(formName) {
        this.$refs[formName].validate((valid, obj)=>{
            console.log(valid)
            if(valid){
                console.log("前端过滤通过，调接口")
            }
            else{
                console.log('未通过字段', obj)
            }
        })
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

.left {
  flex: 1 1 400px;
  height: 100%;
  background-image: url(../assets/loginLeft.webp);
  background-size: contain;
  background-position: 50px;
  background-repeat: no-repeat;
}

.right {
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