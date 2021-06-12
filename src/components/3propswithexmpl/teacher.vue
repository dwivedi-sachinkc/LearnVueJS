<template>
  <div>
    <h3>tchr {{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "teacher",
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
