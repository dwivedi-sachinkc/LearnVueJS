<template>
  <div>
    <h1>get the value</h1>
    <label for="java">Java</label>
    <input type="checkbox" name="java" id="java" value="java" v-model="javas" />
    <label for="js">js</label>
    <input type="checkbox" name="js" id="js" value="js" v-model="javas" />
    <label for="node">node</label>
    <input type="checkbox" name="node" id="node" value="node" v-model="javas" />

    <br />

    <label for="student">student</label>
    <input type="radio" value="student" name="who" id="student" v-model="who" />
    <label for="dev">dev</label>
    <input type="radio" value="dev" name="who" id="dev" v-model="who" />
    <h4>Java technology: {{ javas }}</h4>
    <h4>JS technology: {{ javaTech }}</h4>
    <h4>NOde technology: {{ javaNode }}</h4>

    <h5>who i am : {{ who }}</h5>
    <button @click="getIndividualVal">Click me</button>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      javaTech: "",
      javas: [],
      javaNode: "",
      technology: [],
      who: null,
    };
  },
  methods: {
    getIndividualVal: function () {
      this.javaTech = this.javas.join();
    },
  },
};
</script>

<style scoped>
* {
  display: none;
}
</style>
