<template>
  <form>
    <label for="">Email</label>
    <input type="text" name="" id="" v-model="form.email" />
    <br />
    <label for="">password</label>
    <input type="password" name="" id="" v-model="form.password" />
    <br />
    <button type="button" @click="login">submit</button>
  </form>
  <p>{{ form }}</p>
</template>
<script>
export default {
  setup() {
    function login() {
      console.warn("hehe", this.form);
    }
    return {
      form: {
        email: "",
        password: "",
      },
      login,
    };
  },
};
</script>
