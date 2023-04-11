<template>
  <header class="site-header">
    <div class="navbar-logo">
      <router-link to="/">High-Fitness</router-link>
    </div>
    <!-- <input id="menu-toggle" type="checkbox" /> -->
    <label class="menu-button-container" for="menu-toggle">
      <div class="menu-button"></div>
    </label>

    <ul class="navbar-menu">
      <li>
        <router-link to="/"><span>首頁</span></router-link>
      </li>
      <li>
        <router-link to="/about"><span>關於</span></router-link>
      </li>
      <li>
        <router-link to="/Shop"><span>商城</span></router-link>
      </li>
      <li>
        <router-link to="/Calculator"><span>計算機</span></router-link>
      </li>
      <li>
        <router-link to="/"><span>APP</span></router-link>
      </li>
      <li v-if="!$store.state.isUserLoggedIn">
        <router-link to="/login"><span>登入</span></router-link>
      </li>
      <li v-if="$store.state.isUserLoggedIn">
        <router-link to="/member"><span>會員資料</span></router-link>
      </li>
      <li v-if="$store.state.isUserLoggedIn">
        <router-link to="/" @click="logout"><span>登出</span></router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'Home',
      });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Babylonica&display=swap');
.site-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  text-align: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 10px 25px;
  background-color: #393e46;
  -webkit-box-shadow: 0px 4px white;
  box-shadow: 0px 1px white;
}

.site-header .navbar-logo a {
  color: #ffd369;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: 'Babylonica', cursive;
  text-shadow: 0.5px 1px 0.2em #eeeeee73;
}

.site-header .navbar-menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

.site-header .navbar-menu li {
  margin: 0px 10px;
}

.site-header .navbar-menu li span {
  color: #eeeeee;
  font-weight: 300;
  font-family: 'Noto Sans HK', sans-serif;
}

.navbar-menu li span:hover {
  transition: 0.1s;
  color: #ffd369;
  border-bottom: #eeeeee 1px solid;
}
.navbar-menu li:hover {
  transition: 0.5s;
  transform: scale(1.1);
}
</style>
