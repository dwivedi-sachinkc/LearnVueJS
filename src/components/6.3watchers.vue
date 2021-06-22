<template>
  <p>{{ count }}</p>
  <button @click="count = count + 1">plus</button>
  <button @click="count = count - 1">minus</button>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count() {
      console.warn("value chnaged");
    },
  },
};
</script>
<style scoped>
* {
  display: none;
}
</style>
