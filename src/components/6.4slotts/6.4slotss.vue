<template>
  <Slotchild><h1>sasas</h1></Slotchild>
  <Slotchild><a href="">sachin</a></Slotchild>
  <Slotchild
    ><img
      src="https://froala.com/wp-content/uploads/2019/11/post41.svg"
      alt=""
      height="100"
      width="100"
  /></Slotchild>
</template>
<script>
import Slotchild from "./child.vue";
export default {
  name: "child",
  components: {
    Slotchild,
  },
};
</script>
<style scoped>
* {
  display: none;
}
</style>
