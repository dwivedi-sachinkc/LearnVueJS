<template>
  <header>
    <slot name="header"></slot>
  </header>
  <content>
    <slot name="content"></slot>
  </content>
  <footer>
    <slot name="footer">
      <button>btn from child</button>
    </slot>
  </footer>
</template>
<script>
export default {
  name: "child",
};
</script>
