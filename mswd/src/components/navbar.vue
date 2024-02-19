<template>
    <div class="government-website">
      <header>
        <div class="header-content">
          <h1 class="logo">MSWD Admin</h1>
          <nav>
            <ul>
              <li><router-link to="/admin/settings">Settings</router-link></li>
              <li><router-link to="/admin/logs">Logs</router-link></li>
              <!-- Add more navigation links as needed -->
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div class="admin-dashboard">
          <div class="sidebar">
            <ul>
              <li><router-link to="/Dashboard"><i class="fas fa-tachometer-alt"></i> Dashboard</router-link></li>
              <li><router-link to="/admin/users"><i class="fas fa-users"></i> Users</router-link></li>
              <li><router-link to="/admin/products"><i class="fas fa-box"></i> Products</router-link></li>
              <li class="dropdown" :class="{ 'active': !officeDropdownHidden }">
                <a href="#" class="dropdown-toggle" @click="toggleOfficeDropdown">
                  <i class="fas fa-building"></i> Offices
                  <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="dropdown-menu" :class="{ 'hidden': officeDropdownHidden }">
                  <li><router-link to="/Offices">PWD</router-link></li>
                  <li><router-link to="/admin/offices/office2">Senior</router-link></li>
                  <!-- Add more office links as needed -->
                </ul>
              </li>
            </ul>
          </div>
          <div class="main-content">
            <router-view></router-view>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GovernmentWebsite',
    data() {
      return {
        officeDropdownHidden: true
      };
    },
    methods: {
      toggleOfficeDropdown() {
        this.officeDropdownHidden = !this.officeDropdownHidden;
      }
    }
  }
  </script>
  
  <style scoped>
  .government-website {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  header {
    background-color: #004d99; /* Government color palette */
    color: #fff;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  
  .logo {
    margin: 0;
    font-size: 24px;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    display: inline-block;
    margin-left: 20px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
  
  nav ul li a:hover {
    color: #cce6ff; /* Lighter shade for hover */
  }
  
  .admin-dashboard {
    flex: 1;
    display: flex;
  }
  
  .sidebar {
    width: 250px;
    background-color: #f0f0f0;
    padding: 20px;
    border-right: 1px solid #ccc;
    font-size: 16px; /* Consistent font size */
    position: sticky;
    top: 0;
    height: calc(100vh - 64px); /* Subtract header height */
    overflow-y: auto; /* Add scroll if content exceeds height */
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar li {
    padding: 12px 0; /* Adjusted padding for better spacing */
    transition: background-color 0.3s ease; /* Smooth transition */
  }
  
  .sidebar li a {
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
  }
  
  .sidebar li a i {
    margin-right: 10px; /* Spacing between icon and text */
  }
  
  .sidebar li a:hover {
    background-color: #e6e6e6; /* Subtle hover effect */
  }
  
  .sidebar li.active {
    background-color: #cce0ff; /* Highlight active link */
  }
  
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
    transition: opacity 0.3s ease; /* Smooth transition */
    opacity: 0;
  }
  
  .dropdown-menu.hidden {
    display: none;
  }
  
  .dropdown-menu li {
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
  }
  
  .dropdown-menu li:last-child {
    border-bottom: none;
  }
  
  .dropdown-menu li a {
    text-decoration: none;
    color: #333;
    display: block;
  }
  
  .dropdown-menu li a:hover {
    color: #004d99;
  }
  
  .dropdown.active .dropdown-menu {
    display: block;
    opacity: 1; /* Show dropdown with smooth fade-in effect */
  }
  </style>
  