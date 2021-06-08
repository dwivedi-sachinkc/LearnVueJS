<template>
  <div>
    <input type="text" v-model="email" />
    <br />
    <input type="password" v-model="password" />
    <br />
    <button @click="getdata">get the data</button>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      email: "Email here",
      password: "Passord here",
    };
  },
  methods: {
    getdata() {
      console.log("values: ", this.email, this.password);
    },
  },
};
</script>

<style scoped>
h1 {
}
</style>
