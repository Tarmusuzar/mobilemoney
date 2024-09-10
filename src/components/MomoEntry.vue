<!-- src/components/PosScreen.vue -->

<template>
  <div class="pos-container">
    <h2>Mobile Money POS</h2>

    <section >
      <!-- Select Service -->
      <label for="service">Select Service:</label>
      <select v-model="selectedService" id="service" name="service" required>
        <option value="">--Choose a service--</option>
        <option value="airtel_money">Airtel Money</option>
        <option value="mtn_money">MTN Money</option>
        <option value="airtime">Airtime</option>
        <option value="yaka">Yaka</option>
        <option value="stanbic">Stanbic</option>
        <option value="nwsc">NWSC</option>
      </select>

      <!-- Last 4 digits of receipt -->
      <label for="receipt">Last 4 digits of Receipt:</label>
      <input type="text" v-model="receipt" id="receipt" maxlength="4" pattern="\d{4}" placeholder="Enter last 4 digits" required>

      <!-- Transaction amount -->
      <label for="amount">Transaction Amount (UGX):</label>
      <input type="number" v-model.number="amount" id="amount" placeholder="Enter amount" required>

      <!-- Calculated VAT -->
      <label for="vat">VAT (18%):</label>
      <input type="text" v-model="vat" id="vat" readonly placeholder="VAT will be calculated here">

      <!-- Total Amount -->
      <label for="total">Total Amount (UGX):</label>
      <input type="text" v-model="total" id="total" readonly placeholder="Total will be calculated here">

      <!-- Submit Button -->
      <button @click="submitTransaction">Submit Transaction</button>
      <button @click="$emit('cancel')" style="margin-top: .2rem ; background-color: red;"  >Cancel</button>
    </section>
  </div>
</template>

<script>
export default {
  emits:['cancel'],
  data() {
    return {
      selectedService: '',
      receipt: '',
      amount: 0,
      vat: 0,
      total: 0,
    };
  },
  methods: {
    calculateVAT() {
      this.vat = (this.amount * 0.18).toFixed(2);
      this.total = (this.amount + parseFloat(this.vat)).toFixed(2);
    },
    submitTransaction() {
      // Here you would handle form submission, e.g., sending data to a server
      alert('Transaction submitted successfully!');
    }
  },
  watch: {
    amount: 'calculateVAT'
  }
};
</script>

<style scoped>
.pos-container {
  width: 90%;
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: #000; /* Black */
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  color: white;
}

h2 {
  text-align: center;
  color: #00aaff; /* Blue */
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #ccc; /* Light Gray */
}

input, select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  background-color: #333; /* Dark Gray */
  color: white;
  font-size: 1rem;
}

input[readonly] {
  background-color: #444; /* Slightly lighter gray */
  color: #bbb; /* Light Gray */
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50; /* Green */
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
}

button:hover {
  background-color: #45a049; /* Darker Green */
}
</style>
