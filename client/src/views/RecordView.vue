<template>
  <div class="record">
    <div class="record-dashboard">
      <ul class="nav-tabs">
        <li class="nav-item">
          <router-link to="/member" class="nav-link">個人資料</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/changepassword" class="nav-link">修改密碼</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/record" class="nav-link">紀錄</router-link>
        </li>
        
      </ul>
      <section class="record-dashboard-in">
        <form class="record-form">
          <div class="record-word">
            <h3>{{ selectedItem }}</h3>
          </div>

          <div class="record-form-input">
            <select v-model="selectedItem" class="form-input">
              <option
                v-for="(item, index) in items"
                :key="index"
                :value="item.text"
                
                >
                {{ item.text }}
              </option>
            </select>
          </div>
        </form>
      </section>

     <div class="chart-container">
        <canvas v-if="selectedItem === '30天平均bmi'" id="bmiChart"></canvas>
        <canvas v-else-if="selectedItem === '項目二'" id="chart2"></canvas>
        <canvas v-else-if="selectedItem === '項目三'" id="chart3"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import axios from 'axios';
import AuthenticationService from '@/services/AuthenticationService';

export default {

  // data() {
  //   return {
  //     weightData: [],
  //     fetchedData: null,
  //   };
  // },
  // mounted() {
  //   this.fetchData();
  // },
  // methods: {
  //   fetchData() {
  //     const userId = this.$store.state.user.userid; // 從 Vuex 中獲取使用者 ID
  //     console.log(userId);
  //     AuthenticationService.getWeightData(userId)
  //       .then((response) => {
  //         this.fetchedData = response.data.weight;
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   },
  // },
  data() {
    return {
       selectedItem: '30天平均bmi',

      items: [
       { value: '1', id: 'bmiChart', text: '30天平均bmi' },
        { value: '2', id: 'chart2', text: '項目二' },
        { value: '3', id: 'chart3', text: '項目三' },
      ],
      weightData: [],
     fetchedData: null,
    
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const userId = this.$store.state.user.userid; // 從 Vuex 中獲取使用者 ID
      console.log(userId);
      AuthenticationService.getWeightData(userId)
      
        .then((response) => {
          const weightData = response.data.weight.slice(0, 10);;

          // 建立日期數組
          const dates = response.data.date.slice(0, 10);;

          // 建立 BMI 數值數組
          // const bmiValues = weightData.map((item) => item.bmi);

          console.log(dates);
          // 繪製圖表
          this.drawChart(dates, weightData);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    drawChart(dates, weightData) {
      const ctx = document.getElementById('bmiChart').getContext('2d');

      this.bmiChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              label: '30-Day WEIGHT',
              data: weightData,
              backgroundColor: 'yellow',
              borderColor: 'yellow',
              borderWidth: 2,
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },

  
};
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

.record-dashboard .record-dashboard-in .record-form {
  display: flex;
  justify-content: space-around;
}

.record-dashboard .record-dashboard-in .record-form .record-word {
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
