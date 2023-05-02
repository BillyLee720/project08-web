<template>
  <div class="record">
    <div class="record-dashboard">
      <ul class="nav-tabs">
        <li class="nav-item">
          <router-link to="/member" class="nav-link">個人資料</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/record" class="nav-link">紀錄</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">選項3</a>
        </li>
      </ul>
      <section class="record-dashboard-in">
        <form class="record-form">
          <div class="record-word">
            <h3>{{ selectedItem }}</h3>
          </div>
          
          <div class="record-form-input">
          <select v-model="selectedItem" class="form-input">
            <option v-for="(item, index) in items" :key="index" :value="item.text">
              <img :src="item.imgSrc" alt="" />
              {{ item.text }}
            </option>
          </select>
          </div>
        </form>
      </section>

     <div class="chart-container">
      <canvas ref="chart"></canvas>
    </div>
    </div>
  </div>

</template>

<script >
import Chart from 'chart.js/auto';
export default {
  data() {
    return {
      selectedItem: '30天平均bmi',

      items: [
        { value: '1', imgSrc: '../assets/222.jpg', text: '30天平均bmi' },
        { value: '2', imgSrc: '../assets/222.jpg', text: '項目二' },
        { value: '3', imgSrc: '../assets/222.jpg', text: '項目三' },
      ]
    }
  },

  data1() {
    return {
      labels: [],
      data: []
    };
  },
  mounted() {
    this.generateChartData();
    this.renderChart();
  },
  methods: {
    generateChartData() {
      this.labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
      this.data1 = Array.from({ length: 30 }, () => this.generateRandomBMI());
    },
    generateRandomBMI() {
      return Math.floor(Math.random() * (30 - 18) + 18);
    },
    renderChart() {
      const ctx = this.$refs.chart.getContext('2d');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'BMI',
            data: this.data1,
            backgroundColor: '#ffd369',
            borderColor: '#ffd369',
            borderWidth: 1,
            
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
        
      });
    }
  }
}

</script>



<style>
.record {
display: flex;
  flex-direction: column;
  width: 800px;
  height: 500px;
  margin: 50px auto 100px auto;
}

.record-dashboard {
  border-radius: 5px;
  background: #ffffffad;
}

.record-dashboard .nav-tabs {
  display: inline-block;
  padding: 0;
  margin: 0;
}

.record-dashboard .nav-tabs .nav-item {
  display: inline;
}

.record-dashboard .nav-tabs .nav-item .nav-link {
  color: black;
  float: left;
  padding: 10px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid black;
  font-size: 16px;
  background-color: #ffffffad;
  border-radius: 5px;
  font-weight: bold;
}

.record-dashboard .nav-tabs .nav-item .nav-link:hover {
  background-color: rgb(97, 95, 95);
}

.record-dashboard .record-dashboard-in {
  width: 100%;
  padding: 0px 20px 20px;
  box-sizing: border-box;
}

.record-dashboard .record-dashboard-in .record-form  {
 display: flex;
 justify-content: space-around;
}


.record-dashboard .record-dashboard-in .record-form  .record-word{
 padding-right: 100px;
}

.record-dashboard .record-dashboard-in .record-form h3 {
  
  font-size: 30px;
}

.record-dashboard .record-dashboard-in .record-form .record-form-input {
  padding-top: 30px;
}

.record-dashboard .record-dashboard-in .record-form .form-input {
  /* width: 50px; */
  border: 1px solid var(--grey-200);
  font-size: 100%;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
}

.chart-container {
  width: 800px;
  height: 400px;
  margin: 0 auto;
  color: black;
}
</style>