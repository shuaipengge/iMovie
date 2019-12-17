<template>
  <div class="login">
    <van-nav-bar title="登录dilidili" />
    <van-cell-group class="from-group">
      <van-field v-model="loginFrom.email" label="账号" placeholder="你的邮箱" />
      <van-field v-model="loginFrom.password" type="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>
    <div class="box-text">
      <a class="a-text" href>忘记密码</a>
    </div>
    <div class="box-button">
      <van-button class="button" plain hairline type="plan" @click="login">登录</van-button>
      <van-button class="button" type="info" @click="register">注册</van-button>
    </div>
    <p class="p-box">
      登录即代表你同意
      <a class="a-text">用户协议</a>和
      <a class="a-text">隐私政策</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginFrom: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      const { data: res } = await this.$http.post('login', this.loginFrom)
      console.log(res)
      if (res.code !== 200) return this.$toast.fail('用户名或密码错误')
      // console.log(res.account.userName)
      // console.log(res.account.id)
      // console.log(res.token)
      // 保存登录成功的token
      window.sessionStorage.setItem('token', res.token)
      window.sessionStorage.setItem('userName', res.account.userName)
      // 编程式导航
      this.$router.push('/home')
    },
    register() {
      this.$toast.fail('暂时不支持注册')
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background: rgb(244, 244, 244);
  height: 12rem;
}
.van-button--plain {
  color: #fb7299;
  border: 0.5px solid #fb7299;
}
.van-button--info {
  background-color: #fb7299;
  border: 1px solid #fb7299;
}
.from-group {
  margin-top: 0.4rem;
}
.box-text {
  text-align: right;
  padding-right: 0.2rem;
  width: 100%;
  height: 0.5rem;
  box-sizing: border-box;
}
.p-box {
  text-align: center;
  font-size: 0.25rem;
}
.a-text {
  font-size: 0.25rem;
  line-height: 0.5rem;
  color: #fb7299;
}
.box-button {
  margin: 0.5rem;
}
.button {
  width: 3rem;
  margin-left: 0.2rem;
}
</style>
