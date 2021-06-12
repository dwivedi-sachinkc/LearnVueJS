<template>
  <div :class="{ green: green, red: red }">green</div>
  <div :class="apllyCss">green</div>

  <button @click="greenfn">chng clr</button>
</template>

<script>
export default {
  name: "clsbind",
  data() {
    return {
      green: true,
      red: false,
    };
  },
  methods: {
    greenfn: function () {
      this.green = !this.green;
      this.red = !this.red;
    },
  },
  computed: {
    apllyCss() {
      {
        return {
          green: this.green,
          red: true,
          err: true,
        };
      }
    },
  },
};
</script>

<style scoped>
.green {
  background: green;
  width: 100px;
}
.red {
  background: red;
  width: 100px;
}
.err {
  font: 20px sans-serif;
}

* {
  display: none;
}
</style>
