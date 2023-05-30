<template>
  <div class="changepassword">
    
<div class="changepassword-dashboard">
      <ul class="nav-tabs">
        <li class="nav-item">
          <router-link to="/member" class="nav-link">個人資料</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/changepassword" class="nav-link">修改密碼</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/record" class="nav-link">紀錄</router-link>
        </li>
        
      </ul>
      <section class="changepassword-dashboard-in">
        <div class="changepassword-form-div">
          <h3>修改密碼</h3>
          <div class="changepassword-form-center">
            <div class="changepassword-form-row">
              <label
                for="password"
                class="changepassword-form-label"
                v-bind:readonly="isReadOnly"
                >現在密碼</label
              >
              <input
                type="text"
                class="changepassword-form-input"
                v-model="user.password"
                :disabled="disabled"
              />
            </div>
            <div class="changepassword-form-row">
              <label for="phone" class="changepassword-form-label">更改密碼</label>
              <input
                type="text"
                class="changepassword-form-input"
                v-model="user.phone"
                v-bind:readonly="isReadOnly"
                :disabled="disabled"
              />
            </div>
            <div class="changepassword-form-row">
              <label for="height" class="changepassword-form-label">確認密碼</label>
              <input
                type="text"
                class="changepassword-form-input"
                v-bind:readonly="isReadOnly"
                :disabled="disabled"
              />
            </div>
            
            <!-- <div class="edit-button"> -->
            <button class="changepassword-btn" @click="SaveChanges">儲存</button>
            <button class="changepassword-btn" @click="toggleCancel">取消</button>
            <!-- </div> -->
          </div>
        </div>
      </section>
    </div>
    </div>

</template>

 <script>
import { mapActions, mapState } from 'vuex';
import axios from 'axios';

import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'MemberPage',
  data() {
    return {
      email: '',
      password: '',
      username: '',
      phone: '',
      height: '',
      disabled: false,
    };
  },
  created() {
    this.originalUser = JSON.parse(JSON.stringify(this.user));
  },
  computed: mapState(['user']),
  methods: {
    toggleChange() {
      this.isReadOnly = !this.isReadOnly;
      this.disabled = false;
    },
    async SaveChanges() {
      try {
        const response = await AuthenticationService.updateUser({
          email: this.user.email,
          password: this.user.password,
          username: this.user.username,
          phone: this.user.phone,
          height: this.user.height,
        });
        console.log(response);
        // this.$store.dispatch('updateUser', response.data.userData);
        console.log('User updated successfully!');
        this.disabled = true;
      } catch (error) {
        console.error('Failed to update user:', error);
      }
    },
    toggleCancel() {
      this.user = JSON.parse(JSON.stringify(this.originalUser));
      this.disabled = true;
      this.isReadOnly = true;
    },
  },
};
</script>

<style>
.changepassword {
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 500px;
  margin: 50px auto 150px auto;
}

.changepassword-dashboard {
  border-radius: 5px;
  background: #ffffffad;
}

.changepassword-dashboard .nav-tabs {
  display: inline-block;
  padding: 0;
  margin: 0;
}

.changepassword-dashboard .nav-tabs .nav-item {
  display: inline;
}

.changepassword-dashboard .nav-tabs .nav-item .nav-link {
  color: black;
  float: left;
  padding: 10px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid black;
  font-size: 16px;
  background-color: #ffffffad;
  border-radius: 5px;
  font-weight: bold;
}

.changepassword-dashboard .nav-tabs .nav-item .nav-link:hover {
  background-color: rgb(97, 95, 95);
}

.changepassword-dashboard .changepassword-dashboard-in {
  width: 100%;
  padding: 0px 20px 20px;
  box-sizing: border-box;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div h3 {
  font-size: 30px;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div .changepassword-form-center {
  /* grid-template-columns: 1fr 1fr; */
  align-items: center;
  column-gap: 2rem;
  display: grid;
  row-gap: 0.5rem;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div .changepassword-form-center .changepassword-form-row {
  margin-bottom: 10px;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div .changepassword-form-center .changepassword-form-row .changepassword-form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 20px;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div .changepassword-form-center .changepassword-form-row .changepassword-form-input {
  width: 100%;
  border: 1px solid var(--grey-200);
  font-size: 100%;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
}





.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div .changepassword-form-center .changepassword-btn {
  border: none;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  font-weight: bold;
  height: 35px;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div .changepassword-form-center .changepassword-btn:hover {
  background-color: rgb(196, 248, 185);
  transform: scale(1);
  transition: 0.2s;
}

@media (max-width:768px) {
.changepassword {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 50px auto 100px auto;
}

.changepassword-dashboard {
  border-radius: 5px;
  background: #ffffffad;
}

.changepassword-dashboard .nav-tabs {
  display: inline-block;
  padding: 0;
  margin: 0;
}

.changepassword-dashboard .nav-tabs .nav-item {
  display: inline;
}

.changepassword-dashboard .nav-tabs .nav-item .nav-link {
  color: black;
  float: left;
  padding: 10px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid black;
  font-size: 16px;
  background-color: #ffffffad;
  border-radius: 5px;
  font-weight: bold;
}

.changepassword-dashboard .nav-tabs .nav-item .nav-link:hover {
  background-color: rgb(97, 95, 95);
}

.changepassword-dashboard .changepassword-dashboard-in {
  width: 100%;
  padding: 0px 20px 20px;
  box-sizing: border-box;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div h3 {
  font-size: 30px;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div .changepassword-form-center {
  grid-template-columns: 1fr;
  align-items: center;
  column-gap: 2rem;
  display: grid;
  row-gap: 0.5rem;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div .changepassword-form-center .changepassword-form-row {
  margin-bottom: 10px;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div .changepassword-form-center .changepassword-form-row .changepassword-form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 20px;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div .changepassword-form-center .changepassword-form-row .changepassword-form-input {
  width: 100%;
  border: 1px solid var(--grey-200);
  font-size: 100%;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div .changepassword-form-center .changepassword-btn {
  border: none;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  font-weight: bold;
  height: 35px;
}

.changepassword-dashboard .changepassword-dashboard-in .changepassword-form-div .changepassword-form-center .changepassword-btn:hover {
  background-color: rgb(196, 248, 185);
  transform: scale(1);
  transition: 0.2s;
}

}
</style>
