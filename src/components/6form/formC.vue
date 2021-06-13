<template>
  <form>
    <label for="">Email</label>
    <input type="text" name="" id="" v-model="form.email" />
    <br />
    <label for="">password</label>
    <input type="password" name="" id="" v-model="form.password" />
    <br />
    <select v-model="form.country">
      <option>india</option>
      <option>US</option>
      <option>Australia</option>
    </select>
    <br />
    <h4>technology</h4>
    <label for="">java</label>
    <input type="checkbox" v-model="form.technology" value="java" />
    <label for="">js</label>
    <input type="checkbox" v-model="form.technology" value="js" />
    <br />
    <h4>gender</h4>
    <label for="">Male</label>
    <input type="checkbox" v-model="form.gender" value="M" />
    <label for="">Female</label>
    <input type="checkbox" v-model="form.gender" value="F" />
    <br /><br />
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
        country: "",
        technology: [],
        gender: "",
      },
      login,
    };
  },
};
</script>
