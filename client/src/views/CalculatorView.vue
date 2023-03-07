<template>
  <div class="calculator">
    <div class="calculator-first">
      <div class="bmi-first">
        <h1>身體質量指數BMI介紹</h1>
        <p>
          身體質量指數BMI又稱體質指數，是由一個人的質量(體重)和身高計算出的一個數值。
        </p>
        <h2>BMI公式</h2>
        <p>BMI=W/H^2</p>
        <p>W為體重(kg)，H為身高(m)</p>
        <h2>BMI意義</h2>
        <img src="../assets/bmi2.jpg" />
      </div>

      <div class="bmi-second">
        <h2>BMI計算機</h2>
        <div class="bmi-cal">
          <div class="bmi-w">
            <label for="weight">體重(KG): </label>
            <input
              type="number"
              id="weight"
              v-model="weight"
              placeholder="請輸入您的體重"
            />
          </div>
          <div class="bmi-h">
            <label for="height">身高(CM): </label>
            <input
              type="number"
              id="height"
              v-model="height"
              placeholder="請輸入您的身高"
            />
          </div>
          <div class="bmi-b">
            <Button type="button" v-on:click="calculateBMI">計算</Button>
          </div>
          <div v-if="result" class="result">
            <h3>您的 BMI 值為 {{ result.toFixed(2) }}</h3>
            <p>評估結果：{{ evaluateResult }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: null,
      weight: null,
      result: null,
    };
  },
  computed: {
    evaluateResult() {
      if (this.result < 18.5) {
        return '體重過輕';
      } else if (this.result >= 18.5 && this.result < 24) {
        return '正常範圍';
      } else if (this.result >= 24 && this.result < 27) {
        return '過重';
      } else if (this.result >= 27 && this.result < 30) {
        return '輕度肥胖';
      } else if (this.result >= 30 && this.result < 35) {
        return '中度肥胖';
      } else {
        return '重度肥胖';
      }
    },
  },
  methods: {
    calculateBMI() {
      if (!this.height || !this.weight) {
        alert('請輸入身高和體重');
        return;
      }
      const heightInMeters = this.height / 100;
      const result = this.weight / (heightInMeters * heightInMeters);
      this.result = result;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200&display=swap');
.calculator {
  display: flex;
  height: 800px;
  width: 100%;
  max-height: 1024px;
  justify-content: center;
  padding-bottom: 100px;
}
.calculator .calculator-first .bmi-first h1 {
  color: #eeeeee;
}
.calculator .calculator-first .bmi-first p {
  color: #eeeeee;
}
.calculator .calculator-first .bmi-first h2 {
  color: #eeeeee;
}
.calculator .calculator-first .bmi-first img {
  width: 100%;
  height: 100%;
}
.calculator .calculator-first .bmi-second {
  padding-top: 10px;
}
.calculator .calculator-first .bmi-second h2 {
  color: #eeeeee;
}
.calculator .calculator-first .bmi-second .bmi-cal .bmi-w {
  padding-bottom: 10px;
}

.calculator .calculator-first .bmi-second .bmi-cal .bmi-w label {
  color: #eeeeee;
}
.calculator .calculator-first .bmi-second .bmi-cal .bmi-h {
  padding-top: 10px;
}
.calculator .calculator-first .bmi-second .bmi-cal .bmi-h label {
  color: #eeeeee;
}
.calculator .calculator-first .bmi-second .bmi-cal .bmi-b {
  padding-top: 20px;
}
.calculator .calculator-first .bmi-second .bmi-cal .bmi-b Button {
  border: none;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 10px;
  margin-left: 80px;
  font-weight: bold;
}

.calculator .calculator-first .bmi-second .bmi-cal .bmi-b Button:hover {
  background-color: rgb(196, 248, 185);
  transform: scale(1.05);
  transition: 0.2s;
}
.calculator .calculator-first .bmi-second .bmi-cal .result {
  color: #eeeeee;
  padding-bottom: 50px;
}
</style>
