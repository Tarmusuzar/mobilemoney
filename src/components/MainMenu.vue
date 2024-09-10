<template>
    <div >
      <nav class="navbar">
        <div class="navbar-left">
          <h1>Billionare Momo Ltd</h1>
        </div>
        <div class="navbar-right">
            <i class="fas fa-bars"></i>

        </div>
      </nav>
  
      <div class="card-balance">
        <h2>Current Sales</h2>
        <p>{{ cardBalance }}</p>
      </div>
  
      <div class="search-bar">
        <input type="text" placeholder="Search..." v-model="searchQuery" />
        <i class="fas fa-search"></i>
      </div>
  
      <!-- Services Section -->
      <h2 style="margin-left: 20px;">Services</h2>

      <div class="services">
        <div class="service-card" v-for="service in filteredServices" :key="service.name" @click="openPopup(service)">
          <i :class="['fas', `fa-${service.icon}`]"></i>
          <p>{{ service.name }}</p>
        </div>
      </div>
  
      <!-- History of Transactions Section -->
      <div class="history">
        <h2>Recent Transactions</h2>
        <div class="transaction" v-for="transaction in transactions" :key="transaction.id">
          <p>{{ transaction.details }}</p>
          <p>{{ transaction.date }}</p>
        </div>
      </div>
  
      <!-- Popup -->
      <div v-if="showPopup" class="popup-overlay" @click="closePopup">
        <div class="popup-conten" @click.stop>
          <momo-entry @cancel="closePopup" v-if="selectedService.name =='Mobile Money'"></momo-entry>
          <under-development @cancel="closePopup" v-if="selectedService.name !='Mobile Money'"></under-development>
        
        </div>
      </div>
    </div>
  </template>
  
  <script>
import MomoEntry from './MomoEntry.vue';
import UnderDevelopment from './UnderDevelopment.vue'
  export default {
    components:{
        MomoEntry,
        UnderDevelopment
    },
    data() {
      return {
        isDarkMode: false,
        cardBalance: 'UGX 1,234,567',
        searchQuery: '',
        services: [
          { name: 'Mobile Money', icon: 'dollar' },
          { name: 'Beverages', icon: 'cocktail' },
          { name: 'Electronics', icon: 'tv' },
          { name: 'Charging', icon: 'battery' },
          { name: 'Inventory', icon: 'clipboard-list' },
          
        ],
        transactions: [
          { id: 1, details: 'Mtn Mobile Money', date: '2024-09-01' },
          { id: 2, details: 'Yaka', date: '2024-09-05' },
          { id: 3, details: 'Airtel Money', date: '2024-09-10' },
        ],
        showPopup: false,
        selectedService: null,
      };
    },
    computed: {
      filteredServices() {
        return this.services.filter(service => service.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
    },
    methods: {
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        // Optionally store user preference in localStorage
        localStorage.setItem('darkMode', this.isDarkMode);
      },
      openPopup(service) {
        this.selectedService = service;
        this.showPopup = true;
      },
      closePopup() {
        this.showPopup = false;
        this.selectedService = null;
      },
      confirmAction() {
        alert(`Confirmed action for ${this.selectedService.name}`);
        this.closePopup();
      }
    },
    mounted() {
      // Retrieve and apply user preference from localStorage
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      this.isDarkMode = savedDarkMode;
    }
  }
  </script>
  
  <style scoped>
  .explore-page {
    font-family: Arial, sans-serif;
    color: #000;
    background-color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition: background-color 0.3s, color 0.3s; /* Smooth transition */
  }
  
  .darkmode {
    color: #fff;
    background-color: #333;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #007bff; /* Blue */
    color: white;
  }
  
  .navbar-left h1 {
    margin: 0;
  }
  
  .navbar-right {
    cursor: pointer;
  }
  
  .card-balance {
    background-color: #4caf50; /* Green */
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
    margin: 20px;
    
  }
  
  .search-bar input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .search-bar .fas {
    margin-left: 10px;
  }
  
  .services {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .service-card {
    background-color: #f5f5f5; /* Light gray */
    border: 1px solid #ddd;
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    flex-grow: 1;

  }
  
  .service-card:hover {
    background-color: #e0e0e0; /* Slightly darker gray */
  }
  
  .history {
    padding: 20px;
    background-color: #f1f1f1; /* Light gray */
  }
  
  .transaction {
    background-color: white;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background-color: #fff;
    border-radius: 10px;
    width: 90%;
    max-width: 400px;
    text-align: center;
  }
  
  .popup-content button {
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
  }
  
  .popup-content button:first-of-type {
    background-color: #4caf50; /* Green */
    color: white;
  }
  
  .popup-content button:last-of-type {
    background-color: #f44336; /* Red */
    color: white;
  }
  </style>
  