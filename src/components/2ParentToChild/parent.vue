<template>
  <div>
    <h4>parent</h4>
    <Child name="Sachin" :user="user" :getData="getData" />
    <br />

    <ul>
      <li v-for="item in items" :key="item.email">
        <User :item="item" :getData="getData" />
      </li>
    </ul>
  </div>
</template>

<script>
import Child from "./child.vue";
import User from "./user.vue";
export default {
  name: "child",
  components: {
    Child,
    User,
  },
  props: {},
  data() {
    return {
      user: { name: "sachin", email: "test.com" },
      items: [
        { name: "sachin1", email: "1test.com" },
        { name: "sachin2", email: "2test.com" },
        { name: "sachin3", email: "3test.com" },
      ],
    };
  },
  methods: {
    getData(name) {
      alert(name);
    },
  },
};
</script>

<style scoped>
h1 {
}
</style>
