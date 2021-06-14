<template>
  <ul>
    <li v-for="item in error" :key="item">{{ item }} not valid</li>
  </ul>
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
    <input type="checkbox" v-model="form.gender" value="M" id="gender" />
    <label for="">Femle</label>
    <input type="checkbox" v-model="form.gender" value="F" id="gender" />
    <br /><br />
    <button type="button" @click="login">submit</button>
  </form>
</template>
<script>
export default {
  setup() {
    function login() {
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.error.push(item);
        }
      }
      if (this.error.length === 0) {
        alert("data submitted");
      }
      console.warn(this.form, this.error);
    }
    return {
      form: {
        email: "",
        password: "",
        country: "",
        technology: [],
        gender: [],
      },
      error: [],
      login,
    };
  },
};
</script>
<style scoped>
* {
  display: none;
}
</style>
