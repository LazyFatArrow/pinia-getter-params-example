import { defineStore } from 'pinia'

const customers = [
  {
    name: 'John Doe',
    payments: [
      {
        amount: 523,
      },
    ],
    active: true,
  },
  {
    name: 'Jame Doe',
    payments: [
      {
        amount: 420,
      },
    ],
    active: true,
  },
  {
    name: 'Jason Doe',
    payments: [
      {
        amount: 620,
      },
    ],
    active: true,
  },
  {
    name: 'Jane Doe',
    payments: [
      {
        amount: 600,
      },
    ],
    active: false,
  },
]

export const useCustomersStore = defineStore('customers', {
  state: () => ({ customers }),
  getters: {
    activeCustomersWithPaymentThreshold(state) {
      const activeCustomers = state.customers.filter(
        (customer) => customer.active,
      )

      return (minAmount: number) => {
        return activeCustomers.filter((customer) =>
          customer.payments.every((payment) => payment.amount >= minAmount),
        )
      }
    },
  },
})
