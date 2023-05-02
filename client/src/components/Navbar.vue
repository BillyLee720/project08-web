<template>
  <header class="site-header">
    <div class="navbar-logo">
      <router-link to="/">High-Fitness</router-link>
    </div>
    <!-- <input id="menu-toggle" type="checkbox" /> -->
    <label class="menu-button-container" for="menu-toggle">
      <div class="menu-button"></div>
    </label>

    <ul class="menu">
      <li>
        <router-link to="/" @click="closeMenu"><span>首頁</span></router-link>
      </li>
      <li>
        <router-link to="/about" @click="closeMenu"><span>關於</span></router-link>
      </li>
      <li>
        <router-link to="/Shop" @click="closeMenu"><span>商城</span></router-link>
      </li>
      <li>
        <router-link to="/Calculator" @click="closeMenu"><span>計算機</span></router-link>
      </li>
      <li>
        <router-link to="/" @click="closeMenu"><span>APP</span></router-link>
      </li>
      <li v-if="!$store.state.isUserLoggedIn">
        <router-link to="/login" @click="closeMenu"><span>登入</span></router-link>
      </li>
      <li v-if="$store.state.isUserLoggedIn">
        <router-link to="/member" @click="closeMenu"><span>會員資料</span></router-link>
      </li>
      <li v-if="$store.state.isUserLoggedIn">
        <router-link to="/" @click="logout"><span>登出</span></router-link>
      </li>
    </ul>
     <a href="#" class="showmenu" @click.prevent="toggleMenu">☰</a>
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
      this.closeMenu();
    }, 
    toggleMenu() {
      document.body.classList.toggle('menu-show');
    },
    closeMenu() {
    document.body.classList.remove('menu-show');
  }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Babylonica&display=swap');

.site-header{
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
  padding: 15px 25px;
  background-color: #393e46;
  -webkit-box-shadow: 0px 4px white;
  box-shadow: 0px 1px white;
  /* max-width: 1280px; */
	margin: 0 auto;
}


.site-header .navbar-logo a {
  color: #ffd369;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: 'Babylonica', cursive;
  text-shadow: 0.5px 1px 0.2em #eeeeee73;
}

.site-header menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
 
}

.site-header menu li {
  margin: 0px 10px;
}

.menu li span:hover {
  transition: 0.1s;
  color: #ffd369;
  border-bottom: #eeeeee 1px solid;
}

.menu li:hover {
  transition: 0.5s;
  transform: scale(1.1);
} 

.menu li{
	float: left;
}

.menu li a{
	display: block;
	color: #eeeeee;
	text-decoration: none;
	padding: 1em;
}

.showmenu{
	display: none;
}

@media (max-width: 768px) {
	.menu{
		max-height: 0;
		overflow: hidden;
    transition: max-height 2.3s;
    margin-top: 1px;
    position: absolute;
    z-index: 100;
    top:80px;
    left: 0;
    right: 0;
    background: #0F222B;
    padding-left: 5px;
	}
	.menu li{
		float: none;
		border-bottom: 1px dashed #ffd369;
	}
	.menu li a{
    	transition: all 0.3s;
  	}

	.menu li a:hover{
    	/* background: #ffd369;
    	color: #fff; */
  	}
  
	.showmenu{
    display: block;
    	float: right;
      color: #fff;
      font-size: 30px;
      
  	}
  	.menu-show .menu{
  		max-height: 500px;
     
  	}
}


</style>
