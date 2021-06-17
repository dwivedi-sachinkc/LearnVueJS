<template>
  <div class="add">
    <h3>Addition Calculator</h3>
    <form id="sum">
      <input type="text" class="form-control" v-model="data" />
    </form>
    <p>data is {{ data }}</p>
  </div>
</template>
<script>
export default {
  name: "Add",
  setup() {
    return {
      data: " ",
    };
  },
};
</script>

<style scoped>
* {
  display: none;
}
</style>
