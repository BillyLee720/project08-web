<template>
    <div>
      <div class="login-test">
          <div class="login-item">
                <div class="login-account">
                    <label for="">帳號</label>
                    <input type="text" size="25px">
                </div>
                <div class="login-password">
                    <label for="">密碼</label>
                    <input type="text" size="25px" 
                    rules="usernameRules">
                </div>
                <Button >登入</Button>
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

<style scoped>
.login-page {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  text-align: center;
  background: #cacaca;
  width: 400px;
  height: 300px;
  margin: 80px auto;
  max-height: 500px;
  border-radius: 10px;
}

.login-page .login-logo {
  height: 100px;
  width: 400px;
  background-color: #c7f010;
  background-image: url(https://i.picsum.photos/id/111/400/100.jpg?hmac=AAt4fvlqHDjQ4cMMxHBL_VEAMi5CkxNc1_UREu4EkOk);
  border-radius: 10px 10px 0 0;
  background-size: cover;
  background-position: center,center;
}

.login-page .login-test {
  background-image: url(https://i.picsum.photos/id/548/400/300.jpg?hmac=qbq1qvAWillWzKmmvS7KxGR7yDmTeeB49cDCCrR6fKU);
  -webkit-backdrop-filter: blur(25px);
          backdrop-filter: blur(25px);
  background-size: cover;
  background-position: center,center;
  width: 400px;
  height: 100%;
  border-radius: 0 0 10px 10px;
}

.login-page .login-test .login-item {
  margin: 2px;
}

.login-page .login-test .login-item .login-account {
  margin-top: 15px;
}

.login-page .login-test .login-item .login-password {
  margin-top: 15px;
}

.login-page .login-test .login-item Button {
  margin-top: 15px;
}

.login-page .login-test .login-footer a {
  font-size: 15px;
}
</style>