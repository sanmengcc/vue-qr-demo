<template>

    <div class="hello">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <h1>Login</h1>
        <el-form-item label="账号" prop="username">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="loginbtn">登录</el-button>
<!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
        </el-form-item>
      </el-form>
    </div>

</template>
//这是个登录页
<script>
import axios from 'axios'
export default {
  name:'Login',
  data () {
    var checkUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    var validatePassWord = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: 'admin',
        password: '12345'
      },
      rules: {
        username: [
          { validator: checkUserName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassWord, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        var self = this
        axios.get('/user/login', {
          params: {
            username: self.ruleForm.username,
            password: self.ruleForm.password
          }
        }).then(function (response) {
          if (response.data.code === 1) {
            // alert(response.data.data.dispaly_name)
            let that;
            that.$router.push({name:'ptable'});
          } else {
            // alert(response.data.msg)
            alert('登陆失败')
          }
        }).catch(function (error) {
          console.log(error.message)
        })
      })
    },
    // resetForm (formName) {
    //   this.$refs[formName].resetFields()
    // }
  }
}

</script>

<style scoped>
.hello{
  width: 400px;
  height: 500px;
  margin: 160px 380px;
}
.loginbtn{
  width: 130px;
  height: 40px;
}
</style>
