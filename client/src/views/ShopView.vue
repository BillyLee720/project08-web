<template>
  <div class="main">
    <section class="section-first">
      <div class="main-store">
          <h1 class="first-word">HIGH-FITNESS STORE</h1>
        </div>
    </section>

    <h2 class="first-item">項目一</h2>

    <div class="section-two">
        <div class="section-container">
            <div class="item">
                <img src="../assets/222.jpg" alt="" srcset="">
                <div class="details">
                    <h3>飲料</h3>
                    <h3>$25</h3>
                </div>
                <div class="b">
                    <button class="buttons">立即購買</button>
                </div>
            </div>
            <div class="item">
                <img src="../assets/222.jpg" alt="" srcset="">
                <div class="details">
                    <h3>飲料</h3>
                    <h3>$25</h3>
                </div>
                <div class="b">
                    <button class="buttons">立即購買</button>
                </div>
            </div>
            <div class="item">
                <img src="../assets/222.jpg" alt="" srcset="">
                <div class="details">
                    <h3>飲料</h3>
                    <h3>$25</h3>
                </div>
                <div class="b">
                    <button class="buttons">立即購買</button>
                </div>
            </div>
            <div class="item">
                <img src="../assets/222.jpg" alt="" srcset="">
                <div class="details">
                    <h3>飲料</h3>
                    <h3>$25</h3>
                    
                </div>
                <div class="b">
                    <button class="buttons">立即購買</button>
                </div>
            </div>
        </div>
    </div>

    <h2 class="second-item">項目二</h2>

    <div class="section-two">
        <div class="section-container">
            <div class="item">
                <img src="../assets/222.jpg" alt="" srcset="">
                <div class="details">
                    <h3>飲料</h3>
                    <h3>$25</h3>
                </div>
                <div class="b">
                    <button class="buttons">立即購買</button>
                </div>
            </div>
            <div class="item">
                <img src="../assets/222.jpg" alt="" srcset="">
                <div class="details">
                    <h3>飲料</h3>
                    <h3>$25</h3>
                </div>
                <div class="b">
                    <button class="buttons">立即購買</button>
                </div>
            </div>
            <div class="item">
                <img src="../assets/222.jpg" alt="" srcset="">
                <div class="details">
                    <h3>飲料</h3>
                    <h3>$25</h3>
                </div>
                <div class="b">
                    <button class="buttons">立即購買</button>
                </div>
            </div>
            <div class="item">
                <img src="../assets/222.jpg" alt="" srcset="">
                <div class="details">
                    <h3>飲料</h3>
                    <h3>$25</h3>
                    
                </div>
                <div class="b">
                    <button class="buttons" >立即購買</button>
                </div>
            </div>
        </div>
    </div>

  </div>

</template>

<style>
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

.main .section-first .main-store .first-word {
 font-size: 45px;
  font-family: 'Vogue', sans-serif;
  color: #eeeeee;
  letter-spacing: 0.5rem;
  padding-top: 350px;
}

.main .first-item {
    margin: 50px auto  auto  auto;
    width: 400px;
    text-align: center;
    letter-spacing: 10px;
    font-weight: bold;
    background-color: #f0bf5d;
    color: white;
    border: solid 2px;
    border-radius: 5px;
   
}

.main .section-two {
    max-width: 1234px;
    margin: 0 auto;
}

.main .section-two .section-container {
   display: grid;
    grid-template-columns: repeat(4, 230px);
    gap: 50px;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
    grid-auto-rows: 400px;
   

}

.main .section-two .section-container .item {
    border: 2px solid #f0bf5d;
    border-radius: 4px;
    justify-items: center;
}

.main .section-two .section-container .item .details {
  display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
   
}

.main .section-two .section-container .item .details h3{
  color: #eeeeee;
}

.main .section-two .section-container .item .b{
  display: flex;
  justify-content: center;
}

.main .section-two .section-container .item .buttons{
  font-size: 15px;
    font-weight: 700;
    letter-spacing: 2px;
    background-color: #ffffffad;
    border-radius: 5px;
    padding: 8px 20px;
    cursor: pointer;
}


.main .second-item {
    margin: 50px auto  auto  auto;
    width: 400px;
    text-align: center;
    letter-spacing: 10px;
    font-weight: bold;
    background-color: #f0bf5d;
    color: white;
    border: solid 2px;
    border-radius: 5px;
   
}

</style>
