<template>
  <h2>
    {{ getRslt }}
  </h2>
</template>
<script>
export default {
  data() {
    return {
      dollors: 100,
      rupeesV: 70,
      dis: 10,
    };
  },
  computed: {
    getRslt() {
      return this.dollors * this.rupeesV - this.dis;
    },
  },
};
</script>
<style scoped>
* {
  display: none;
}
</style>
