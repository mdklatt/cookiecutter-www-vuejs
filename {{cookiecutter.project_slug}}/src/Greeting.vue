<template>
  <div class="greeting">
    <p>Hello, {% raw %}{{ name }}{% endraw %}</p>
  </div>
</template>


<script lang="ts">
export default {
    name: "Greeting",
    data: function () {
        // Component data must be a function.
        return {
            name: "Vue.js",
        }
    },
}
</script>


<style scoped></style>
