<template>
  <div v-html="tag"></div>
  <div v-html="tag2"></div>
  <button @click="chnageTxt">chng</button>
</template>

<script>
export default {
  name: "child",
  props: {},
  data() {
    return {
      tag: "<h4>Sachin</h4>",
      tag2: "<p>s.dwi@gmail.com</p>",
    };
  },
  methods: {
    chnageTxt() {
      this.tag2 = "<p>changed</p>";
    },
  },
};
</script>

<style scoped>
* {
  display: none;
}
</style>
