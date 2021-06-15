<template>
  <div class="add">
    <h3>Addition Calculator</h3>
    <form id="sum">
      <input type="text" class="form-control" v-model.lazy="data" />
    </form>
    <p>data is {{ data }}</p>
  </div>
</template>
<script>
export default {
  name: "Add",
  data() {
    return {
      data: "",
    };
  },
  methods: {},
};
</script>
