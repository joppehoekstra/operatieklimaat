<template>
  <span v-for="(button, index) in buttons" :key="index">
    <q-btn :to="button.link" color="primary">
      {{ button.label }}
    </q-btn>
  </span>
</template>
<script>
export default {
  props: ["buttons"],
};
</script>
