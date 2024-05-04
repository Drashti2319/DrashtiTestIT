<template>
  <div>
    <h1>Data Communication</h1>

    <ul>
      <li>
        <router-link :to="{ name: 'parentChild' }">Parent to Child Communication</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'childParent' }">Child to Parent Communication</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'childChild' }">Child to Child Communication</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>