<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useCustomersStore } from './store/customers'

  const customersStore = useCustomersStore()
  const minAmount = ref(500)
  const topCustomers = computed(() => {
    return customersStore.activeCustomersWithPaymentThreshold(
      Number(minAmount.value),
    )
  })
</script>

<template>
  <div>
    <input v-model="minAmount" />
    <hr />
    <ui>
      <li v-for="customer in topCustomers">
        {{ customer.name }}
      </li>
    </ui>
  </div>
</template>
