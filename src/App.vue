<template>
  <div id="app">
    <markdown-loader />
  </div>
</template>

<script>
import MarkdownLoader from './components/MarkdownLoader.vue';

export default {
  name: 'App',
  components: { MarkdownLoader },
};
</script>

<style>
@import 'tailwindcss/tailwind.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
