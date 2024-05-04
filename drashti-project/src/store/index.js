import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      users: [],
      filteredUsers: [],
      searchQuery: '',
      currentPage: 1,
      totalPages: 1,
      itemsPerPage: 5
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
      state.filteredUsers = users
      state.totalPages = Math.ceil(users.length / state.itemsPerPage)
    },
    setSearchQuery(state, query) {
      state.searchQuery = query
      state.currentPage = 1
    },
    setCurrentPage(state, page) {
      state.currentPage = page
    },
    setFilteredUsers(state, filteredUsers) {
      state.filteredUsers = filteredUsers
      state.totalPages = Math.ceil(filteredUsers.length / state.itemsPerPage)
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      commit('setUsers', data)
    },
    searchUsers({ state, commit }) {
      const query = state.searchQuery.toLowerCase()
      const filteredUsers = state.users.filter(
        (user) =>
          user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)
      )
      commit('setFilteredUsers', filteredUsers)
    }
  }
})

export default store
