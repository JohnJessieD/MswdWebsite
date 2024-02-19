<template>
    <navbar />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import navbar from '../components/navbar.vue';
  
  export default defineComponent({
    name: 'HomeView',
  
    components: {
      navbar,
    },
  });
  </script>
  