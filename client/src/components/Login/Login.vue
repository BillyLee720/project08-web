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
