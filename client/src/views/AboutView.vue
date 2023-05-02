<template>
  <div class="about">
    <section class="about-section-second">
      <div class="about-second-widget">
        <img
          src="../assets/concentrated-young-woman-boxing-with-her-sparring-2022-12-16-14-06-08-utc.jpg"
          width="100%"
          height="100%"
        />
      </div>
      <div class="about-second-widget">
        <div class="about-second-text">
          <h3>
            我們是一群就讀資工系的大學生，大三專題方向是架設網站的部分，而我們有人也有在接觸健身相關，於是嘗試自架一個健身平台以及APP。方便記錄平時飲食或者是運動狀態的情況。
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200&display=swap');
.about-section-second {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 600px;
  padding: 0 50px;
  margin: 50px 0;
  
}

.about-section-second .about-second-widget {
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

.about-section-second .about-second-widget h3 {
  font-family: 'Noto Serif TC', Sans-serif;
  margin: 20px 20px;
  color: #eeeeee;
}

@media (max-width:768px) {
.about-section-second {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 600px;
  padding: 0 50px;
  margin: 50px 0;
  flex-direction: column;
}

.about-section-second .about-second-widget {
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

.about-section-second .about-second-widget h3 {
  font-family: 'Noto Serif TC', Sans-serif;
  margin: 20px 20px;
  color: #eeeeee;
}


}
</style>
