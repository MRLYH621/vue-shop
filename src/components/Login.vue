<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 表单区域 -->
      <el-form :model="form" ref="logininstance" :rules="rules" class="inputarea">
        <el-form-item  prop="account">
          <el-input v-model="form.account" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item label prop="password">
          <el-input v-model="form.password" prefix-icon="iconfont icon-suo" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.logininstance.resetFields()
      this.$message.success('111')
    },
    login () {
      this.$refs.logininstance.validate((OK) => {
        console.log(OK)
      })
    }
  }
}
</script>
<style lang="less" scoped >
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 3px;
  position: absolute;
  top: 20%;
  left: 35%;
}
.avatar_box {
  height: 130px;
  width: 130px;
  padding: 10px;
  box-shadow: 0px 0px 10px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  img {
    height: 100%;
    width: 100%;
    border-style: 1px solid #eee;
    border-radius: 50%;
    background-color: #eee;
  }
}
.inputarea {
  position: absolute;
  width: 100%;
  bottom: 0px;
  padding: 0px 20px;
  box-sizing: border-box;
}
</style>
