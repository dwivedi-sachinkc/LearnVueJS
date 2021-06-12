<template>
  <h1>children</h1>
  <button @click="getUser(userName)">send user name</button>
</template>

<script>
export default {
  name: "child",
  props: {
    getUser: Function,
  },
  setup() {
    return {
      userName: "peter",
    };
  },
};
</script>
