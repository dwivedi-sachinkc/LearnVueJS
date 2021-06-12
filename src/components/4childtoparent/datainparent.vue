<template>
  <h1>{{ childUser }}</h1>
  <Child :getUser="getUserName" />
</template>

<script>
import Child from "./childdata.vue";

export default {
  name: "child",
  components: {
    Child,
  },
  data() {
    return {
      childUser: "",
    };
  },
  methods: {
    getUserName(name) {
      this.childUser = name;
    },
  },
};
</script>

<style scoped>
* {
  display: none;
}
</style>
