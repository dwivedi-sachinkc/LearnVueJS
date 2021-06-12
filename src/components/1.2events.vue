<template>
  <div>
    <h1>Events</h1>
    <p>Name: {{ getName("sddd") }}</p>
    <p>get al data: {{ getAllData() }}</p>
    <p>get name: {{ getAllData().name }}</p>
    <p>get aaddress: {{ getAllData().address }}</p>
    <button @click="getBtnData">btn data</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    data: String,
    msg: String,
  },
  data() {
    return {
      address: "blr",
      count: 1,
      getName: function (a) {
        return a;
      },
    };
  },
  methods: {
    getAllData() {
      return {
        name: "Sachin",
        email: "tes@test.com",
        address: this.address,
      };
    },
    getBtnData() {
      console.log("heehehheheh");
      this.count = this.count + 1;
    },
  },
};
</script>

<style scoped>
* {
  display: none;
}
</style>
