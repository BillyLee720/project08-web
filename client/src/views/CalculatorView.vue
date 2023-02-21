<template>
  <div class="calculator">
    <div class="calculator-first">
      <div class="bmi-first">
        <h1>身體質量指數BMI介紹</h1>
        <p>身體質量指數BMI又稱體質指數，是由一個人的質量(體重)和身高計算出的一個數值。</p>
        <h2>BMI公式</h2>
        <p>BMI=W/H^2</p>
        <p>W為體重(kg)，H為身高(m)</p>
        <h2>BMI意義</h2>
        <img src="../assets/bmi.jpg" >
      </div>
      <div class="bmi-second">
        <h2>BMI計算機</h2>
        <div class="bmi-cal">
          <div class="bmi-w">
            <label >體重(kg): </label>
            <input type="text">
          </div>
          <div class="bmi-h">
            <label>身高(m):  </label>
            <input type="text">
          </div>
          <div class="bmi-b">
            <Button>計算</Button>
          </div>
          <div class="bmi-a">
            <label>你的BMI為: </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200&display=swap');
.calculator {
  display: flex;
  height: 800px;
  width: 800px;
  padding: 50px 350px;
  max-height: 1024px;
  
}
.calculator .calculator-first .bmi-first h1{
  color: #eeeeee;
}
.calculator .calculator-first .bmi-first p{
  color: #eeeeee;
}
.calculator .calculator-first .bmi-first h2{
  color: #eeeeee;
}
.calculator .calculator-first .bmi-first img{
  width: 100%;
  height: 100%;
}
.calculator .calculator-first .bmi-second{
  padding-top: 50px;
}
.calculator .calculator-first .bmi-second h2{
  color: #eeeeee;
}
.calculator .calculator-first .bmi-second .bmi-cal .bmi-w label{
 color: #eeeeee;
}
.calculator .calculator-first .bmi-second .bmi-cal .bmi-h{
 padding-top: 10px;
}
.calculator .calculator-first .bmi-second .bmi-cal .bmi-h label{
  color: #eeeeee;
}
.calculator .calculator-first .bmi-second .bmi-cal .bmi-b{
 padding-top: 20px;
}
.calculator .calculator-first .bmi-second .bmi-cal .bmi-b Button{
  border: none;
  padding: 10px 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  border-radius: 10px;
  margin-left: 90px;
  font-weight: bold;
}
.calculator .calculator-first .bmi-second .bmi-cal .bmi-a{
 padding-top: 10px;
}
.calculator .calculator-first .bmi-second .bmi-cal .bmi-a label{
 color: #eeeeee;
}
</style>
