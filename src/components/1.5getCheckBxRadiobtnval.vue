<template>
  <div>
    <h1>get the value</h1>
    <label for="java">Java</label>
    <input type="checkbox" name="java" id="java" value="java" v-model="technology" />
    <label for="js">js</label>
    <input type="checkbox" name="js" id="js" value="js" v-model="technology" />
    <label for="node">node</label>
    <input type="checkbox" name="node" id="node" value="node" v-model="technology" />

    <br />

    <label for="student">student</label>
    <input type="radio" value="student" name="who" id="student" v-model="who" />
    <label for="dev">dev</label>
    <input type="radio" value="dev" name="who" id="dev" v-model="who" />
    <h4>selected technology: {{ technology }}</h4>
    <h5>who i am : {{ who }}</h5>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      technology: [],
      who: null,
    };
  },
  methods: {},
};
</script>

<style scoped>
h1 {
}
</style>
