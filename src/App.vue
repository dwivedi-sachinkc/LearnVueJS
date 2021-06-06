<template>
  <Home />
  <hr />
  <Event />
  <hr />
  <Binding />
  <hr />
  <GetIPV />
  <hr />
  <GetICBRV />
  <hr />
  <ifElse />
  <hr />
  <vFor />
  <hr />
  <PToC />
</template>

<script>
import Home from "./components/1.1methods.vue";
import Event from "./components/1.2events.vue";
import Binding from "./components/1.3TwoWayBinding.vue";
import GetIPV from "./components/1.4getInputfieldValue.vue";
import GetICBRV from "./components/1.5getCheckBxRadiobtnval.vue";
import ifElse from "./components/1.6ifElse.vue";
import vFor from "./components/1.7vFor.vue";
import PToC from "./components/2.1parentToChild.vue";

export default {
  name: "App",
  components: {
    Home,
    Event,
    Binding,
    GetIPV,
    GetICBRV,
    ifElse,
    vFor,
    PToC,
  },

  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
