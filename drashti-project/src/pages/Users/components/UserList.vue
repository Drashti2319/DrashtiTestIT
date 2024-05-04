<template>
  <div>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Search..." @input="search" />
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="paginatedUsers.length === 0">No users found</div>
      <div v-else>
        <div v-for="user in paginatedUsers" :key="user.id">
          <p>{{ user.name }}</p>
          <p>{{ user.email }}</p>
        </div>
      </div>
    </div>
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    currentPage: Number,
    totalPages: Number,
    paginatedUsers: Array // Pass paginatedUsers as a prop
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    itemsPerPage() {
      return this.$store.state.itemsPerPage
    }
  },
  methods: {
    search() {
      this.$store.commit('setSearchQuery', this.searchQuery)
      this.$store.dispatch('searchUsers')
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('next')
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('prev')
      }
    }
  }
}
</script>
