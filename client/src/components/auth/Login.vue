<template>
  <div class="container m-5">
    <form @submit.prevent="userLogin">
      <h3>登入</h3>

      <div class="form-group">
        <label>郵件地址</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="user.email"
        />
      </div>

      <div class="form-group">
        <label>密碼</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="user.password"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">登入</button>
      <button class="btn btn-dark btn-lg btn-block">
        <router-link to="/register"> 註冊 </router-link>
      </button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">忘記密碼?</router-link>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        token: '',
      },
    };
  },
  methods: {
    handleLogin() {
      const token = 'asdsadsafASFadfsaf';
      let username = this.loginForm.username;
      let password = this.loginForm.password;
      if (username !== '' && password !== '') {
        this.loginForm.token = token;
      } else {
        alert('帳號密碼不能為空');
      }
    },
  },
};
</script>
