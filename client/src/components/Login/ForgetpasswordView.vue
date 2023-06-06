<template>
  <div class="forget-page">
    <div class="forget-item">
      <div class="forget-account"></div>
      <h1>請輸入你的帳號</h1>
      <div class="forget-password">
        <label>帳號</label>
        <input size="25px" placeholder="Email" v-model="email" type="email" />
      </div>
      <div class="submit-button">
        <Button class="forget-button" @click="validateEmail">送出</Button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    async validateEmail() {
      try {
        console.log(this.email);
        const response = await AuthenticationService.forgotPassword({
          email: this.email,
        });
        console.log(response);
        toast.success('請檢察信箱中的郵件');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200&display=swap');
.forget-page {
  display: flex;
  justify-content: center; /*水平置中*/
  align-items: center;
  background: #ffffffad;
  width: 400px;
  height: 800px;
  margin: 80px auto;
  max-height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px #eeeeee;
}

.forget-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 500px;
}

.forget-account {
  margin: 10px;
}
.forget-password {
  margin: 10px;
}
.forget-item label {
  /* font-weight: bold; */
  font-family: 'Noto Serif TC', Sans-serif;
}
.forget-item input {
  border: none;
  box-sizing: border-box;
  padding: 8px 5px;
  margin: 0 10px;
  border-radius: 5px;
}
.forget-button {
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

.forget-button:hover {
  background-color: rgb(196, 248, 185);
  transform: scale(1.05);
  transition: 0.2s;
}
</style>
