<template>
  <div class="container">
    <BackComponent to="/DataCommunication" class="back-component" />

    <ChildComponentA
      :message="parentMessage"
      @childEvent="handleChildEvent"
      style="margin-top: 20px"
    />
    <ChildComponentB :childBData="childAData" />
  </div>
</template>

<script>
import ChildComponentA from './components/ChildComponentA.vue'
import ChildComponentB from './components/ChildComponentB.vue'
import BackComponent from '@/components/BackComponent.vue'

export default {
  components: {
    ChildComponentA,
    ChildComponentB,
    BackComponent
  },
  data() {
    return {
      parentMessage: 'Hello from parent!',
      childAData: ''
    }
  },
  methods: {
    handleChildEvent(dataFromChildA) {
      this.childAData = dataFromChildA
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
