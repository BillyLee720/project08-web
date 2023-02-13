<template>
  <div>
    <div class="login-test">
      <!-- <div class="login-item">
        <form @submit.prevent="userLogin">
          <div class="login-account">
            <label>Account</label>
            <input type="email" v-model="user.email" />
          </div>
          <div class="login-password">
            <label>Password</label>
            <input type="password" v-model="user.password" />
          </div>
  
          <button type="submit">登入</button>
        </form> -->
      <div class="login-item">
        <div class="login-account">
          <label>帳號</label>
          <input type="email" name="email" v-model="email" size="25px" />
        </div>
        <div class="login-password">
          <label>密碼</label>
          <input
            type="password"
            name="password"
            v-model="password"
            size="25px"
            rules="usernameRules"
          />
        </div>
        <Button @click="register">登入</Button>
      </div>
      <div class="login-footer">
        <div>
          <p><a href="/LoginView/register">註冊</a></p>
        </div>
        <div>
          <p><a href="/LoginView/forgetPassword">忘記密碼</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
  data() {
    return {
      email: 'abc',
      password: '123',
    };
  },

  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
