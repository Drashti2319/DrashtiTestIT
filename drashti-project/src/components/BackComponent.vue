<template>
  <router-link :to="to" class="back-link">
    <svg class="back-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.back-link {
  display: inline-flex;
  align-items: center;
  color: #007bff; /* Change the color as per your design */
  text-decoration: none;
  cursor: pointer;
}

.back-icon {
  width: 24px;
  height: 24px;
}
</style>
