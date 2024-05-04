<template>
  <div>
    <router-link to="/DataCommunication">
      <i class="fas fa-arrow-left"></i>
    </router-link>

    <ChildComponent @childEvent="handleChildEvent" />
    <p>Message from child: {{ childMessage }}</p>
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
      childMessage: ''
    }
  },
  methods: {
    handleChildEvent(message) {
      this.childMessage = message
    }
  }
}
</script>