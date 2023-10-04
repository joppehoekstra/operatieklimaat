<template>
  <ContainerPlain>
    <div class="max-width-small">
      <h1 class="q-mb-md">
        {{ text.title }}
      </h1>
      <div v-html="text.text"></div>
    </div>
  </ContainerPlain>
</template>
<script>
import ContainerPlain from "../containers/ContainerPlain.vue";

export default {
  components: {
    ContainerPlain,
  },
  props: ["text"],
};
</script>
<style lang="scss" scoped></style>
