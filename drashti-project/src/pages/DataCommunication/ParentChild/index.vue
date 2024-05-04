<template>
  <div>
    <router-link to="/DataCommunication">
      <i class="fas fa-arrow-left"></i>
    </router-link>

    <ChildComponent :message="parentMessage" @childEvent="handleChildEvent" />

    <div v-if="showMessage">
      {{ showMessage }}
    </div>
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: 'Hello from parent!',
      showMessage: ''
    }
  },
  methods: {
    handleChildEvent(message) {
      ;(this.showMessage = message), console.log('Received message from child:', message)
    }
  }
}
</script>
