<template>
  <Slotchild>
    <template v-slot:header>
      <h1>header</h1>
    </template>
    <template v-slot:content>
      <p>content</p>
    </template>
    <template v-slot:footer>
      <button>buy now</button>
    </template>
  </Slotchild>
  <Slotchild>
    <template v-slot:header>
      <h1>header</h1>
    </template>
    <template v-slot:content>
      <p>content</p>
    </template>
    <template v-slot:footer> </template>
  </Slotchild>
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
<style scoped></style>
