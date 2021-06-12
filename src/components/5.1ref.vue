<template>
  <h1>ref</h1>
  <input type="text" ref="inputField" />
  <button @click="getData">click me</button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const inputField = ref(null);
    function getData() {
      inputField.value.focus();
      let val = inputField.value;
      console.warn(val);
      inputField.value.style.color = "red";
    }
    return {
      getData,
      inputField,
    };
  },
};
</script>
<style scoped></style>
