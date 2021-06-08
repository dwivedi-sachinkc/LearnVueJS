<template>
  <div>
    <h3>child compo</h3>
    name:
    <h4>{{ name }}</h4>
    email: {{ user.email }} username: {{ user.name }}
    <button @click="getData">call fun</button>
  </div>
</template>

<script>
export default {
  name: "child",
  props: {
    name: String,
    user: Object,
    getData: Function,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
h1 {
}
</style>
