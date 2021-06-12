<template>
  <div>
    <p>name:: {{ item.name }}</p>
    <p>mail:: {{ item.email }}</p>
    <button @click="getData(item.name)">click</button>
  </div>
</template>

<script>
export default {
  name: "child",
  props: {
    name: String,
    user: Object,
    item: Object,
    getData: Function,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
* {
  display: none;
}
</style>
