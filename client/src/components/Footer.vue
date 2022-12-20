<template>
  <footer>
    <div class="footer-warper">
      <div class="footer-padding">
        <div class="footer-items">
          <div class="footer-item">
            <p class="text-title">關於我們</p>
            <p><a href="">關於我們</a></p>
            <p><a href="">會員制度</a></p>
            <p><a href="">聯絡我們</a></p>
          </div>
          <div class="footer-item">
            <p class="text-title">顧客服務</p>
            <p><a href="">常見問題</a></p>
            <p><a href="">退換貨政策</a></p>
            <p><a href="">條款與細則</a></p>
          </div>
          <div class="footer-item">
            <p class="text-title">聯絡我們</p>
            <p><a href="">電話/02-5562-9865</a></p>
            <p><a href="">電郵/209410694@gms.tku.edu.tw</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style>
footer {
  border-top: 1px solid;
  width: 80%;
  margin: 50px auto;
}

footer .footer-items {
  padding: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  color: #ffd369;
}

footer .footer-items .footer-item {
  width: 33%;
  padding: 15px;
}

footer .footer-items .footer-item a {
  color: #eeeeee;
}
</style>
