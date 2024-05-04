<template>
  <div class="container">
    <BackComponent to="/DataCommunication" class="back-component" />

    <ChildComponent
      :message="parentMessage"
      @childEvent="handleChildEvent"
      style="margin-top: 20px"
    />

    <div v-if="showMessage" class="message">
      {{ showMessage }}
    </div>
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'
import BackComponent from '@/components/BackComponent.vue'

export default {
  components: {
    ChildComponent,
    BackComponent
  },
  data() {
    return {
      parentMessage: 'Hello from parent!',
      showMessage: ''
    }
  },
  methods: {
    handleChildEvent(message) {
      this.showMessage = message
      console.log('Received message from child:', message)
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  padding: 20px;
}

.back-component {
  position: absolute;
  top: 0;
  left: 0;
}

.message {
  margin-top: 20px;
}
</style>
