<template>
  <div>
    <p>Data received from ChildA: {{ childBData }}</p>
  </div>
</template>

<script>
export default {
  props: ['childBData']
}
</script>