<template>
  <div>
    <h3>Methods</h3>
    <p>Name: {{ getName("sddd") }}</p>
    <p>get al data: {{ getAllData() }}</p>
    <p>get name: {{ getAllData().name }}</p>
    <p>get aaddress: {{ getAllData().address }}</p>
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
      show: true,
      address: "blr",
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
  },
};
</script>

<style scoped>
* {
  display: block;
}
</style>
