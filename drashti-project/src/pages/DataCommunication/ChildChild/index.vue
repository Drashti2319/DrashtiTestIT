<template>
  <div>
    <router-link to="/DataCommunication">
      <i class="fas fa-arrow-left"></i>
    </router-link>

    <ChildComponentA :message="parentMessage" @childEvent="handleChildEvent" />
    <ChildComponentB :childBData="childAData" />
  </div>
</template>

<script>
import ChildComponentA from './components/ChildComponentA.vue'
import ChildComponentB from './components/ChildComponentB.vue'

export default {
  components: {
    ChildComponentA,
    ChildComponentB
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