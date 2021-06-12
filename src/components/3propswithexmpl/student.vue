<template>
  <div>
    <h3>stdnt {{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "student",
  props: {
    name: String,
  },
};
</script>

<style scoped>
* {
  display: none;
}
</style>
