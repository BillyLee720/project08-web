<template>
  <div>
    <h1>重置密码</h1>
    <form @submit.prevent="resetPassword">
      <label>Email:</label>
      <input type="email" v-model="email" />
      <br />
      <label>新密码:</label>
      <input type="password" v-model="newPassword" required />
      <br />
      <label>确认密码:</label>
      <input type="password" v-model="confirmPassword" required />
      <br />
      <button type="submit">提交</button>
    </form>
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
      newPassword: '',
      confirmPassword: '',
    };
  },
  created() {
    const params = new URLSearchParams(window.location.search);
    this.email = params.get('email');
  },
  methods: {
    showResetPasswordSuccess() {
      toast.success('密碼重置成功，請重新登入!!', {
        autoClose: 3000,
        limit: 1,
        position: 'top-center',
        onclose: () => {
          this.$router.push('/login');
        },
      });
    },
    showResetPasswordError(error) {
      toast.error(error, {
        autoClose: 2500,
        theme: 'colored',
        limit: 3,
      });
    },
    async resetPassword() {
      if (this.newPassword !== this.confirmPassword) {
        this.errorMessage = '兩次輸入的密碼不一致';
        return;
      }
      try {
        const response = await AuthenticationService.resetPassword({
          newPassword: this.newPassword,
          confirmPassword: this.confirmPassword,
          email: this.email,
        });
        console.log(newPassword, confirmPassword, this.email);
        this.showResetPasswordSuccess();
      } catch (error) {
        this.showResetPasswordError(error);
      }
    },
  },
};
</script>

<style>
.error-message {
  color: red;
}
.success-message {
  color: green;
}
</style>
