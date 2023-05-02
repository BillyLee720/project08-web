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
      <el-dialog title="Error" :visible.sync="showEmailEmptyDialog">
        Please enter your email address.
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      showEmailEmptyDialog: false,
    };
  },
  methods: {
    validateEmail() {
      if (!this.email) {
        this.showEmailEmptyDialog = true;
        setTimeout(() => {
          this.showEmailEmptyDialog = false;
        }, 5000);
      } else {
        // do something else
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
