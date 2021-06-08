<template>
  <div>
    <p>for loop</p>
    <ul>
      <li v-for="item in num" :key="item">{{ item }}</li>
    </ul>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      num: [1, 2, 3, 5, 6, 7, 8],
      todos: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
  methods: {
    toggleBtn: function () {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
h1 {
}
</style>
