<template>
  <div class="login">
    <div class="bg">
    </div>
    <Modal class="login-modal" v-model="loginModal" width="360" :closable="false" :mask-closable="false">
      <div>
        <h2 style="margin:10px;color:#abcdef;text-align:center">
          <img :src="require('@/assets/img/logo.png')" alt="" height="50"></h2>
        <Form ref="riskUser" :model="riskUser" :rules="ruleValidate">
          <Form-item prop="name">
            <Input v-model="riskUser.username" placeholder="请输入姓名"></Input>
          </Form-item>
          <Form-item prop="password">
            <Input v-model="riskUser.password" type="password" placeholder="请输入密码"></Input>
          </Form-item>

          <Row>
            <Col span="12">
            <Checkbox-group >
              <Checkbox label="记住我"></Checkbox>
            </Checkbox-group>
            </Col>
            <Col span="12">
            <a style="float:right" @click="toRegister">新用户注册</a>
            </Col>
          </Row>

        </Form>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long :loading="modal_loading" @click="handleSubmit('riskUser')">登录</Button>
        <small style="text-align: center;display:block" class="subText">@copyright by Artiely</small>
      </div>
    </Modal>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        loginModal: true,
        modal_loading: false,
        riskUser: {
          username: '',
          password: ''
        },
        ruleValidate: {
          username: [
            {required: true, message: '姓名不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码错误', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) { // login
        this.$refs[name].validate((valid) => {
//          this.modal_loading = true
//          this.$api.login(this.riskUser).then((response) => {
//            console.log(response)
//          }, (response) => {
//            console.log(response)
//          })
//          var params = new URLSearchParams()
//          params.append('username', this.riskUser.username)
//          params.append('password', this.riskUser.password)
//          console.log(params)
//          var loginValue = {username: this.riskUser.username, password: this.riskUser.password}
//          this.$axios({
//            method: 'get',
//            url: '/login/getIntoLogin1',
//            params: loginValue
//          }).then((res) => {
//            console.log(res)
//          })
//          this.$api.login('/login/getIntoLogin2', loginValue).then((response) => {
//            console.log(response)
//          }, (response) => {
//            console.log(response)
//          })
          this.$api.postMethodBody('/login/getIntoLogin', this.riskUser).then((response) => {
            console.log(response)
            this.$router.push('/')
          }, (response) => {
            console.log(response)
          })
//          setTimeout(() => {
//            this.modal_loading = false
//            if (valid) {
//              this.$Message.success('登录成功!')
//              this.$router.push('/')
//            } else {
//              this.$Message.error('表单验证失败!')
//              this.$Notice.warning({
//                title: '登录提示',
//                desc: '用户名/密码 随意输入...'
//              })
//            }
//          }, 2000)
        })
      },
      toRegister () {
        this.$router.push('/register')
      }
    }
  }
</script>


