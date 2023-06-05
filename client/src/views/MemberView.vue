<template>
  <div class="member">
    <div class="dashboard">
      <ul class="nav-tabs">
        <li class="nav-item">
          <router-link to="#" class="nav-link">個人資料</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/changepassword" class="nav-link"
            >修改密碼</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/record" class="nav-link">紀錄</router-link>
        </li>
      </ul>
      <section class="dashboard-in">
        <div class="form-div">
          <h3>個人資料</h3>
          <div class="form-center">
            <div class="form-row">
              <label for="name" class="form-label">姓名</label>
              <input
                type="text"
                class="form-input"
                v-model="user.username"
                :disabled="disabled"
              />
            </div>
            <div class="form-row">
              <label for="birth" class="form-label">生日</label>
              <input
                type="date"
                class="form-input-date"
                v-model="user.birth"
                @change="updateBirth"
                :disabled="disabled"
              />
            </div>
            <div class="form-row">
              <label for="mail" class="form-label">email</label>
              <input
                type="text"
                class="form-input"
                v-model="user.email"
                readonly
                disabled
              />
            </div>
            <div class="form-row">
              <label for="phone" class="form-label">手機</label>
              <input
                type="text"
                class="form-input"
                v-model="user.phone"
                v-bind:readonly="isReadOnly"
                :disabled="disabled"
              />
            </div>
            <div class="form-row">
              <label for="height" class="form-label">身高(cm)</label>
              <input
                type="text"
                class="form-input"
                v-model="user.height"
                v-bind:readonly="isReadOnly"
                :disabled="disabled"
              />
            </div>
            <div class="form-row">
              <label for="gender" class="form-label">性別</label>
              <select
                class="form-input-gender"
                v-model="user.gender"
                :disabled="disabled"
              >
                <option value="">請選擇</option>
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
            </div>
            <!-- <div class="edit-button"> -->

            <button v-if="!disabled" class="btn" @click="SaveChanges">
              儲存
            </button>
            <button v-if="!disabled" class="btn" @click="toggleCancel">
              取消
            </button>

            <!-- </div> -->
          </div>
        </div>
        <button v-if="disabled" class="btn-c" @click="EditData">
          修改資料
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import axios from 'axios';
import { router } from '@/router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'MemberPage',
  data() {
    return {
      email: '',
      username: '',
      phone: '',
      height: '',
      disabled: true,
      gender: '',
      birth: '',
      user: {},
    };
  },
  created() {
    this.user = JSON.parse(JSON.stringify(this.$store.state.user));
    this.originalUser = JSON.parse(JSON.stringify(this.user));
    this.chenckToken();
  },
  computed: mapState(['user']),
  methods: {
    chenckToken() {
      const token = this.$store.state.token;
      if (token === null) {
        this.$router.push('/login');
      }
    },
    showLoginSuccess(successinfo) {
      toast.success(successinfo, {
        autoClose: 3000,
        limit: 1,
        position: 'top-center',
      });
    },
    toggleChange() {
      this.isReadOnly = !this.isReadOnly;
      this.disabled = false;
    },
    EditData() {
      this.disabled = !this.disabled;
    },
    async SaveChanges() {
      try {
        const response = await AuthenticationService.updateUser({
          email: this.user.email,
          password: this.user.password,
          username: this.user.username,
          phone: this.user.phone,
          height: this.user.height,
          gender: this.user.gender,
          birth: this.user.birth,
        });

        console.log(response);
        // this.$store.dispatch('updateUser', response.data.userData);
        console.log('User updated successfully!');
        toast.success('資料更新成功!!', {
          autoClose: 1500,
          position: 'top-center',
        });
        await this.fetchUserData();
        this.disabled = true;
      } catch (error) {
        console.error('Failed to update user:', error);
      }
    },
    async fetchUserData() {
      const userId = this.$store.state.user.userid;
      try {
        const response = await AuthenticationService.getUser(userId);
        this.user = response.data;
      } catch (err) {
        console.log('Fail to fetch user data:', error);
      }
    },
    toggleCancel() {
      this.user = JSON.parse(JSON.stringify(this.originalUser));
      this.disabled = true;
      this.isReadOnly = true;
    },
    updateBirth(event) {
      this.user.birth = event.target.value;
      console.log(this.user.birth);
    },
  },
};
</script>

<style>
.member {
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 500px;
  margin: 50px auto 100px auto;
}

.dashboard {
  border-radius: 5px;
  background: #ffffffad;
}

.dashboard .nav-tabs {
  display: inline-block;
  padding: 0;
  margin: 0;
}

.dashboard .nav-tabs .nav-item {
  display: inline;
}

.dashboard .nav-tabs .nav-item .nav-link {
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

.dashboard .nav-tabs .nav-item .nav-link:hover {
  background-color: rgb(97, 95, 95);
}

.dashboard .dashboard-in {
  width: 100%;
  padding: 0px 20px 20px;
  box-sizing: border-box;
}

.dashboard .dashboard-in .form-div h3 {
  font-size: 30px;
}

.dashboard .dashboard-in .form-div .form-center {
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 2rem;
  display: grid;
  row-gap: 0.5rem;
}

.dashboard .dashboard-in .form-div .form-center .form-row {
  margin-bottom: 10px;
}

.dashboard .dashboard-in .form-div .form-center .form-row .form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 20px;
}

.dashboard .dashboard-in .form-div .form-center .form-row .form-input {
  width: 100%;
  border: 1px solid var(--grey-200);
  font-size: 100%;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
}

.dashboard .dashboard-in .form-div .form-center .form-row .form-input-date {
  width: 100%;
  border: 1px solid var(--grey-200);
  font-size: 100%;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
}

.dashboard .dashboard-in .form-div .form-center .form-row .form-input-gender {
  width: 100%;
  border: 1px solid var(--grey-200);
  font-size: 100%;
  height: 35px;
  border-radius: 5px;
  padding-left: 10px;
}

.dashboard .dashboard-in .form-div .form-center .btn {
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

.dashboard .dashboard-in .btn-c {
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  font-weight: bold;
  width: 364px;
  height: 35px;
  margin-left: 200px;
}

.dashboard .dashboard-in .form-div .form-center .btn:hover {
  background-color: rgb(196, 248, 185);
  transform: scale(1);
  transition: 0.2s;
}

.dashboard .dashboard-in .btn-c:hover {
  background-color: rgb(196, 248, 185);
  transform: scale(1);
  transition: 0.2s;
}

@media (max-width: 768px) {
  .member {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 800px;
    margin: 50px auto 100px auto;
  }

  .dashboard {
    border-radius: 5px;
    background: #ffffffad;
  }

  .dashboard .nav-tabs {
    display: inline-block;
    padding: 0;
    margin: 0;
  }

  .dashboard .nav-tabs .nav-item {
    display: inline;
  }

  .dashboard .nav-tabs .nav-item .nav-link {
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

  .dashboard .nav-tabs .nav-item .nav-link:hover {
    background-color: rgb(97, 95, 95);
  }

  .dashboard .dashboard-in {
    width: 100%;
    padding: 0px 20px 20px;
    box-sizing: border-box;
  }

  .dashboard .dashboard-in .form-div h3 {
    font-size: 30px;
  }

  .dashboard .dashboard-in .form-div .form-center {
    grid-template-columns: 1fr;
    align-items: center;
    column-gap: 2rem;
    display: grid;
    row-gap: 0.5rem;
  }

  .dashboard .dashboard-in .form-div .form-center .form-row {
    margin-bottom: 10px;
  }

  .dashboard .dashboard-in .form-div .form-center .form-row .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 20px;
  }

  .dashboard .dashboard-in .form-div .form-center .form-row .form-input {
    width: 100%;
    border: 1px solid var(--grey-200);
    font-size: 100%;
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;
  }

  .dashboard .dashboard-in .form-div .form-center .form-row .form-input-date {
    width: 100%;
    border: 1px solid var(--grey-200);
    font-size: 100%;
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;
  }

  .dashboard .dashboard-in .form-div .form-center .form-row .form-input-gender {
    width: 100%;
    border: 1px solid var(--grey-200);
    font-size: 100%;
    height: 35px;
    border-radius: 5px;
    padding-left: 10px;
  }

  .dashboard .dashboard-in .form-div .form-center .btn {
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

  .dashboard .dashboard-in .btn-c {
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    font-weight: bold;
    width: 460px;
    height: 35px;
    margin-left: 0px;
  }

  .dashboard .dashboard-in .form-div .form-center .btn:hover {
    background-color: rgb(196, 248, 185);
    transform: scale(1);
    transition: 0.2s;
  }

  .dashboard .dashboard-in .btn-c:hover {
    background-color: rgb(196, 248, 185);
    transform: scale(1);
    transition: 0.2s;
  }
}
</style>
