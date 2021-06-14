<template>
  modifier
  <input type="text" v-model="data" />
  <h2>data is: {{ data }}</h2>
</template>
<script>
export default {
  name: "modif",
  setup() {
    return {
      data: " ",
    };
  },
};
</script>
