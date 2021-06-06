<template>
  <div>
    <p v-if="show">if statement</p>
    <p v-else>else statement</p>
    <button @click="toggleBtn">toggle btn</button>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggleBtn: function () {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
h1 {
}
</style>
