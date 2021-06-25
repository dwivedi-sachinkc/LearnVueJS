<template>
  <Home />
  <Event />
  <Binding />
  <GetIPV />
  <GetICBRV />
  <ifElse />
  <vFor />
  <PToC />
  <HTMLBinding />
  <ClassLBinding />
  <Teacher :name="teacherName" />
  <Student name="bhadwa" />
  <Dad />
  <Reference />
  <Formm />
  <Modif />
  <Nonprops />
  <Comp />
  <Watchh />
  <Slotss />
  <NamedSlot />
  <ApiCall/>
  <SendApiData/>
</template>

<script>
import Home from "./components/1.1methods.vue";
import Event from "./components/1.2events.vue";
import Binding from "./components/1.3TwoWayBinding.vue";
import GetIPV from "./components/1.4getInputfieldValue.vue";
import GetICBRV from "./components/1.5getCheckBxRadiobtnval.vue";
import ifElse from "./components/1.6ifElse.vue";
import vFor from "./components/1.7vFor.vue";
import PToC from "./components/2ParentToChild/parent.vue";
import HTMLBinding from "./components/1.8htmlBinding.vue";
import ClassLBinding from "./components/1.9classBinding.vue";
import Teacher from "./components/3propswithexmpl/teacher.vue";
import Student from "./components/3propswithexmpl/student.vue";
import Dad from "./components/4childtoparent/datainparent.vue";
import Reference from "./components/5.1ref.vue";
import Formm from "./components/6form/formC.vue";
import Modif from "./components/5.2modifier.vue";
import Comp from "./components/6.2computed.vue";
import Watchh from "./components/6.3watchers.vue";
import Slotss from "./components/6.4slotts/6.4slotss.vue";
import NamedSlot from "./components/6.5namedslot/parent.vue";
import ApiCall from './components/6.4apicall.vue'
import SendApiData from './components/6.5sendapidata.vue'
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
    HTMLBinding,
    ClassLBinding,
    Teacher,
    Student,
    Dad,
    Reference,
    Formm,
    Modif,
    Comp,
    Watchh,
    Slotss,
    NamedSlot,
    ApiCall,
    SendApiData,
  },
  setup() {
    return {
      name: "sacin",
    };
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