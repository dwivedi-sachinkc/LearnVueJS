<template>
  <div>
    <p>
      binding a prop with vue and model is callled 2 way binding so when you make any
      change in vue model value get change and vice versa
    </p>
    <input type="text" v-model="count" />
    {{ count }}
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      count: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
h1 {
}
</style>
