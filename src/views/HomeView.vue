<template>
  <div class="main">
    <section class="section-first">
      <div class="main-content">
        <div class="main-intro">
          <h1>Welecome to this Page</h1>
        </div>
        <div class="intro-text">
          <h4>這裡是一個提供紀錄健身狀況以及討論健身相關的網站</h4>
        </div>
        <div class="intro-button">
          <ul>
            <li>
              <a href="">註冊</a>
            </li>
            <li>
              <a href="">登入</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-second">
      <div class="second-widget">
        <img
          src="https://i.picsum.photos/id/400/600/450.jpg?hmac=RY6wJQv-Bziej3kqplEOeN43W_EE0kG47InQSyCKDmc"
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
              src="https://i.picsum.photos/id/12/500/500.jpg?hmac=eDPFWf-MrW9y-NrkWpEFk3Ogo9qpZ985kimtQNMNm94"
            />
            <div class="con-text">
              <li><a href="">關於我</a></li>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="con">
          <div class="con-pic">
            <img
              src="https://i.picsum.photos/id/482/200/300.jpg?hmac=sZqH9D718kRNYORntdoWP-EehCC83NaK3M-KTWvABIg"
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
              src="https://i.picsum.photos/id/432/200/300.jpg?hmac=S0muAtaN6T0PXbBlf5O-UL0chTPM6i9FReOIs0IJlDU"
            />
            <div class="con-text">
              <li><a href="">APP</a></li>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-fourth">
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
    </section>
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
          src="https://i.picsum.photos/id/866/600/450.jpg?hmac=39CtuIS6xnl7zH2eH3Y54hJacaYeEc2YpPe6_0uL__M"
          width="100%"
          height="100%"
        />
      </div>
    </section>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>

<style>
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
  height: 700px;
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
  background-image: url('../assets/cover.jpg');
  background-position: center;
  background-size: cover;
}

.main .section-first .main-content {
  margin: auto;
}

.main .section-first .main-content .main-intro h1 {
  font-size: 45px;
  font-style: oblique;
}

.main .section-first .main-content .intro-text {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

.main .section-first .main-content .intro-text h4 {
  font-weight: bold;
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
  margin: auto;
}

.main .section-first .main-content .intro-button ul li {
  margin: 15px;
  font-size: 1.2rem;
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
