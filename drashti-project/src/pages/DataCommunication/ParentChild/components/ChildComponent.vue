<template>
  <div>
    <button @click="sendMessageToParent">Send Message to Parent</button>
  </div>
</template>

<script>
export default {
  props: ['message'],
  methods: {
    sendMessageToParent() {
      this.$emit('childEvent', 'Hello from child!')
    }
  }
}
</script>