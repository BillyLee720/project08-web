<template>
  <div class="login-page">
    <!-- <div class="login-title"></div> -->

    <div class="login-item">
      <div class="login-username">
        <label>暱稱</label>
        <input
          type="userName"
          name="userName"
          v-model="userName"
          size="25px"
          rules="usernameRules"
          placeholder="UserName"
        />
      </div>
      <div class="login-name">
        <label>姓名</label>
        <input
          type="Name"
          name="Name"
          v-model="Name"
          size="25px"
          rules="nameRules"
          placeholder="Name"
        />
      </div>
      <div class="login-account">
        <label>帳號</label>
        <input
          type="email"
          name="email"
          v-model="email"
          size="25px"
          placeholder="Email"
        />
      </div>
      <div class="login-password">
        <label>密碼</label>
        <input
          type="password"
          name="password"
          v-model="password"
          size="25px"
          rules="usernameRules"
          placeholder="Password"
        />
      </div>

      <div class="submit-button">
        <Button class="register-button" @click="register">註冊</Button>
      </div>
      <div class="register-foot">
        <router-link to="/login">已經有會員?</router-link>
      </div>
    </div>
    <!-- <div class="login-footer">
        <div>
          <p><a href="/LoginView/register">註冊</a></p>
        </div>
        <div>
          <p><a href="/LoginView/forgetPassword">忘記密碼</a></p>
        </div>
      </div> -->
    <div class="error" v-html="error" />
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
  data() {
    return {
      email: '',
      password: '',
      userName: '',
      error: null,
      // name: '',
    };
  },

  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
          username: this.userName,
          // error: null,
        });
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200&display=swap');
.login-page {
  display: flex;
  justify-content: center; /*水平置中*/
  align-items: center;
  background: #ffffffad;
  width: 400px;
  height: 800px;
  margin: 80px auto;
  max-height: 550px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px #eeeeee;
}

.login-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 550px;
}

/* .login-page .login-title {
  height: 250px;
  width: 400px;
  background-color: #c7f010;
  background-image: url(https://i.picsum.photos/id/111/400/100.jpg?hmac=AAt4fvlqHDjQ4cMMxHBL_VEAMi5CkxNc1_UREu4EkOk);
  border-radius: 10px 10px 0 0;
  background-size: cover;
  background-position: center, center;
}

.login-page .login-test {
  background-image: url(https://i.picsum.photos/id/548/400/300.jpg?hmac=qbq1qvAWillWzKmmvS7KxGR7yDmTeeB49cDCCrR6fKU);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  background-size: cover;
  background-position: center, center;
  width: 400px;
  height: 100%;
  border-radius: 0 0 10px 10px;
} */

.login-page .login-test .login-item {
  margin: 2px;
}
.login-username {
  margin-top: 15px;
  margin: 10px;
}
.login-name {
  margin-top: 15px;
  margin: 10px;
}

.login-account {
  margin-top: 15px;
  margin: 10px;
}

.login-password {
  margin-top: 15px;
  margin: 10px;
}

.login-page .login-test .login-item Button {
  margin-top: 15px;
}

.login-page .login-test .login-footer a {
  font-size: 15px;
}

.login-item label {
  /* font-weight: bold; */
  font-family: 'Noto Serif TC', Sans-serif;
}
.login-item input {
  border: none;
  box-sizing: border-box;
  padding: 8px 5px;
  margin: 0 10px;
  border-radius: 5px;
}
.register-button {
  border: none;
  padding: 10px 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  border-radius: 10px;
  margin-top: 20px;
  font-weight: bold;
}

.register-button:hover {
  background-color: rgb(196, 248, 185);
  transform: scale(1.05);
  transition: 0.2s;
}
.register-foot {
  margin-top: 15px;
}
.register-foot a {
  color: #393e46;
  font-family: 'Noto Serif TC', Sans-serif;
  font-weight: bold;
}
.register-foot a:hover {
  border-bottom: white 1px solid;
}
</style>
