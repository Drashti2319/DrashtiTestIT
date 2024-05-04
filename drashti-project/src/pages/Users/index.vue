<template>
  <div>
    <UserList
      :loading="loading"
      :currentPage="currentPage"
      :totalPages="totalPages"
      :paginatedUsers="paginatedUsers"
      @next="nextPage"
      @prev="prevPage"
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import UserList from './components/UserList.vue'

export default {
  components: {
    UserList
  },
  computed: {
    ...mapState(['loading', 'currentPage', 'totalPages', 'filteredUsers', 'itemsPerPage']),
    paginatedUsers() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.filteredUsers.slice(startIndex, endIndex)
    }
  },
  methods: {
    ...mapMutations(['setCurrentPage']),
    ...mapActions(['fetchUsers']),
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.setCurrentPage(this.currentPage + 1)
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.setCurrentPage(this.currentPage - 1)
      }
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>
