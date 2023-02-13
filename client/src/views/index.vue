<template>
  <div class="main">
    <section class="section-first">
      <div class="main-content">
        <div class="main-intro">
          <h1>Welecome to High-Fitness</h1>
        </div>
        <div class="intro-text">
          <h4>這裡是一個提供紀錄健身狀況以及討論健身相關的網站</h4>
        </div>
        <div class="intro-button">
          <ul>
            <li>
              <router-link to="/register">註冊</router-link>
            </li>
            <li>
              <router-link to="/login">登入</router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-second">
      <div class="second-widget">
        <img
          src="../assets/exercising-in-gym-2022-03-30-20-23-45-utc.jpg"
          width="100%"
          height="100%"
        />
      </div>
      <div class="second-widget">
        <div class="second-text">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            unde impedit sit eaque veritatis possimus ipsam obcaecati omnis
            totam voluptate! Natus enim dicta laborum error consequatur hic.
            Quod, commodi corrupti!
          </h3>
        </div>
      </div>
    </section>

    <section class="section-third">
      <div class="col">
        <div class="con">
          <div class="con-pic">
            <img
              src="../assets/couple-with-kettlebells-in-cross-training-gym-2022-03-04-01-53-33-utc.jpg"
            />
            <div class="con-text">
              <router-link to="/about">關於我們</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="con">
          <div class="con-pic">
            <img
              src="../assets/young-arab-guy-drinking-protein-shake-from-bottle-2022-12-16-08-10-45-utc.jpg"
            />
            <div class="con-text">
              <li><a href="">商城</a></li>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="con">
          <div class="con-pic">
            <img
              src="../assets/woman-using-phone-at-gym-2021-08-26-15-34-40-utc.jpg"
            />
            <div class="con-text">
              <li><a href="">APP</a></li>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="section-fourth">
      <div class="fourth-widget">
        <div class="fourth-text">
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur consectetur, quidem perspiciatis sit laboriosam quaerat
            nemo distinctio ex dolores voluptatem maiores molestias quod qui.
            Unde sunt vero quod sit eveniet.
          </h3>
        </div>
      </div>
    </section> -->
    <section class="section-fifth">
      <div class="fifth-widget">
        <div class="fifth-text">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quae veniam quis sequi, numquam similique pariatur
            placeat, laborum expedita ipsam, sed consequatur in nostrum tempora.
            Perspiciatis reiciendis modi maxime quaerat?
          </h3>
        </div>
      </div>
      <div class="fifth-widget">
        <img
          src="../assets/confident-young-woman-exercising-with-battle-rope-2022-12-16-13-57-14-utc.jpg"
          width="100%"
          height="100%"
        />
      </div>
    </section>
  </div>
</template>

<!-- <script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script> -->

<style>
@import url('https://fonts.cdnfonts.com/css/vogue');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@300&family=Noto+Serif+TC:wght@200&display=swap');
.main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.main h1 {
  color: #ffd369;
}

.main .section-first {
  height: 850px;
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
  background-image: url('../assets/athlete-in-gym-2021-09-24-03-26-55-utc.jpg');
  /* opacity: 0.85; */
  background-position: center;
  background-size: cover;
  top: 100px;
}

.main .section-first .main-content {
  margin: auto;
}

.main .section-first .main-content .main-intro h1 {
  font-size: 45px;
  font-family: 'Vogue', sans-serif;
  color: #eeeeee;
  letter-spacing: 0.5rem;
}

.main .section-first .main-content .intro-text {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

.main .section-first .main-content .intro-text h4 {
  font-family: 'Noto Serif TC', Sans-serif;
  font-size: 16px;
  color: #eeeeee;
  letter-spacing: 5px;
}

.main .section-first .main-content .intro-button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.main .section-first .main-content .intro-button ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: center;
}

.main .section-first .main-content .intro-button ul li {
  margin: 15px;
  font-size: 1.2rem;
  font-family: 'Noto Serif TC', Sans-serif;
  letter-spacing: 0.3rem;
  border-style: solid;
  border-width: 0 0 2px;
  border-color: #eeeeee;
}

.intro-button li:hover {
  transition: 0.3s;
  transform: scale(1.1);
  opacity: 0.8;
}
.main .section-first .main-content .intro-button ul li a {
  color: #ffd369;
  font-weight: bold;
}

.main .section-second {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 600px;
  padding: 0 50px;
  margin: 50px 0;
}

.main .section-second .second-widget {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 50%;
  flex: 1 1 50%;
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
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #393e46;
}

.main .section-second .second-widget h3 {
  margin: 20px 20px;
  color: #eeeeee;
}

.main .section-third {
  height: 600px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.main .section-third .col {
  margin: 10px 10px;
}

.main .section-third .col .con {
  height: 500px;
  width: 25vw;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.main .section-third .col .con img {
  position: absolute;
  height: 500px;
  width: 25vw;
  object-fit: cover;
  border-radius: 10px;
}

.main .section-third .col .con .con-text {
  position: relative;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  margin: 230px auto;
  font-size: 40px;
}

.main .section-third .col .con .con-text a {
  background-color: #393e46;
  color: #eeeeee;
  opacity: 0.3;
}

.main .section-third .col .con:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.main .section-third .col .con:hover li {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.main .section-third .col .con:hover a:hover {
  opacity: 1;
}

.section-fourth {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 300px;
  padding: 0 50px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.section-fourth .fourth-widget {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 50vw;
  background-color: #ffd369;
}

.section-fourth .fourth-widget h3 {
  margin: 10px 10px;
  color: #eeeeee;
}

.section-fifth {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 600px;
  padding: 0 50px;
  margin: 50px 0;
}

.section-fifth .fifth-widget {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 50%;
  flex: 1 1 50%;
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
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #393e46;
}

.section-fifth .fifth-widget h3 {
  margin: 20px 20px;
  color: #eeeeee;
}
</style>
