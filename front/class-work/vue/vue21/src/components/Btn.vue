<template>
  <button @click="$emit('clickBtn')">{{ title }}</button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    title: {
      type: String,
      default: "Кнопка",
    },
    emits: ['click']
  },
};
</script>

<style>
</style>