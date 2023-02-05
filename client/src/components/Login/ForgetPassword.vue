<template>
    <div>
        <div class="login-test">
          <div class="login-item">
                <div class="login-password">
                    <label for="">Email</label>
                    <input type="text" size="25px" 
                    rules="usernameRules">
                </div>
                <button @click="goToLogin">送出</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Index",
  methods: {
    goToLogin() {
      this.$router.push({ name: "Captcha" });
    },
  },
};
</script>