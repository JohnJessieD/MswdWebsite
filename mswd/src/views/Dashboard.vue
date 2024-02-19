<template>
    <div class="dashboard">
      <navbar></navbar> <!-- Include the NavBar component -->
      <h1>Dashboard</h1>
      <div class="metrics">
        <div class="metric" v-for="(metric, index) in metrics" :key="index">
          <h2>{{ metric.name }}</h2>
          <p>{{ metric.value }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import navbar from './navbar.vue'; // Import the navbar component
  
  export default {
    components: {
      navbar // Register the NavBar component
    },
    data() {
      return {
        metrics: [
          { name: 'Users', value: 1000 },
          { name: 'Revenue', value: '$50,000' },
          { name: 'Orders', value: 500 }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .dashboard {
    padding: 20px;
  }
  
  .metrics {
    display: flex;
    justify-content: space-around;
  }
  
  .metric {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    flex: 1;
    margin: 0 10px;
  }
  </style>
  