<template>
  <div class="container">
    <BackComponent to="/DataCommunication" class="back-component" />

    <ChildComponent @childEvent="handleChildEvent" style="margin-top: 20px" />
    <p>Message from child: {{ childMessage }}</p>
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
</style>
