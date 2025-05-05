<template>
  <div class="max-w-xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Checkout</h2>
    <form @submit.prevent="submitOrder" class="space-y-4">
      <input
        v-model="form.name"
        type="text"
        placeholder="Full Name"
        class="input"
        required
      />
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        class="input"
        required
      />
      <input
        v-model="form.address"
        type="text"
        placeholder="Shipping Address"
        class="input"
        required
      />

      <select v-model="form.paymentMethod" class="input" required>
        <option disabled value="">Select Payment Method</option>
        <option value="credit_card">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
        Place Order
      </button>

      <div v-if="successMessage" class="text-green-600 mt-4">
        {{ successMessage }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  name: '',
  email: '',
  address: '',
  paymentMethod: ''
})

const successMessage = ref('')

const submitOrder = async () => {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/items/orders`, form.value)
    successMessage.value = 'Order placed successfully!'
    form.value = { name: '', email: '', address: '', paymentMethod: '' }
  } catch (e) {
    console.error('Order submission failed:', e)
  }
}
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
</style>
