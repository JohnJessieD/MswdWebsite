<!-- TemplateComponent.vue -->
<template>
    <div>
      <!-- Navbar Component -->
      <navbar />
      <Admin />
      <!-- Main Content -->
      <div class="main-content">
        <!-- Other sections or components can go here -->
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  // Import navbar component
  import navbar from './navbar.vue';
  import Admin from './Admin.vue';
  export default {
    name: 'TemplateComponent',
    components: {
      Admin,navbar,
    }
  }
  </script>
  
  <style>
  /* Add your custom styles here */
  .main-content {
    padding: 20px;
  }
  </style>
  