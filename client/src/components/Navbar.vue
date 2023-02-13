<template>
  <header class="site-header">
    <div class="navbar-logo">
      <a href="">High-Fitness</a>
    </div>
    <!-- <input id="menu-toggle" type="checkbox" /> -->
    <label class="menu-button-container" for="menu-toggle">
      <div class="menu-button"></div>
    </label>

    <ul class="navbar-menu">
      <li><router-link to="/">首頁</router-link></li>
      <li><router-link to="/about">關於</router-link></li>
      <li><router-link to="/">商城</router-link></li>
      <li><router-link to="/">計算機</router-link></li>
      <li><router-link to="/">APP</router-link></li>
      <li><router-link to="/login">登入</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
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

.site-header .navbar-menu li a {
  color: #eeeeee;
  font-weight: 300;
  font-family: 'Noto Sans HK', sans-serif;
}

.navbar-menu li:hover {
  transition: 0.3s;
  transform: scale(1.1);
  color: #ffd369;
}
</style>
