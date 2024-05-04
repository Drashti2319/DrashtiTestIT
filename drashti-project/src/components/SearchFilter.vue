<template>
  <div>
    <input type="text" v-model="searchString" placeholder="Search..." @input="search" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchString: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', this.searchString)
    }
  }
}
</script>