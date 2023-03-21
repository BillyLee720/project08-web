<template>

  <div class="member-nav">
    <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <a href="#"><li>首頁</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Info</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>
        </div>
    </nav>
    <div class="navbar-logo" click>
      <router-link to="/">High-Fitness</router-link>
    </div>
    <div class="btn-container" >
        <button @click="isAdmin = !isAdmin">
            <a href="#">第8組</a>
            <img src="../assets/211614_down_b_arrow_icon.svg" alt="" srcset="" >
        </button>
        <div class="drop-down"  v-show="isAdmin">
            <button>
                <a href="">Logout</a>
            </button>
        </div>
    </div>
  </div>
    


</template>

<script>
export default {
  data() {
    return {
      isAdmin: false,
      
    };
   }
 }
</script>


<style>
#menuToggle{
  display: block;
  position: relative;
  top: 25px;
  left: 50px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a{
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
   font-weight: bold;
}

#menuToggle a:hover{
  color: tomato;
}

#menuToggle input{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0; 
  z-index: 2;
  -webkit-touch-callout: none;
}

#menuToggle span{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2){
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #23232398;
}

#menuToggle input:checked ~ span:nth-last-child(3){
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
#menuToggle input:checked ~ span:nth-last-child(2){
  transform: rotate(-45deg) translate(0, -1px);
}

#menu{
  position: absolute;
  width: 200px;
  height: 100vh;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li{
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul{
  transform: none;
}

.member-nav {
    display: flex;
    justify-content: space-between;
    background-color: #393e46;
    padding: 20px 0px;
}
.navbar-logo {
  text-align:center;
  padding-bottom: 20px;
  padding-top: 10px;
}

.navbar-logo a {
  color: #ffd369;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: 'Babylonica', cursive;
  text-shadow: 0.5px 1px 0.2em #eeeeee73;
}

.btn-container {
  padding-top: 20px;  
  text-align: right;
  padding-right: 20px;
  }

.btn-container button {
   border: none;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 10px;
  font-weight: bold;

}

.btn-container button:hover {
 background-color: rgb(196, 248, 185);
    transform: scale(1.05);
    transition: 0.2s;

}

.btn-container button a{
   padding-bottom: 10px;
   color: #000;
   
}


.btn-container .drop-down{
  padding-top: 15px;
}
</style>