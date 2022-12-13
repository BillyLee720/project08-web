<template>
  <header class="site-header">
    <div class="navbar-logo">
      <a href="">No.8專題</a>
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
  box-shadow: 0px 4px white;
}

.site-header .navbar-logo a {
  color: #eeeeee;
  font-weight: bold;
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
  font-weight: bold;
}
</style>
