<template>
  <div :style="`background-image: url('${imageURL}');`" ref="coverImage">
    <!-- <h1>{{ title }}</h1> -->
  </div>
</template>
<script>
export default {
  props: ["image"],
  data() {
    return {
      imageURL: null,
    };
  },
  mounted() {
    console.log(window.devicePixelRatio);

    const width =
      Math.round(
        (this.$refs.coverImage.offsetWidth * window.devicePixelRatio) / 50
      ) * 50;
    const height =
      Math.round(
        (this.$refs.coverImage.offsetHeight * window.devicePixelRatio) / 50
      ) * 50;
    this.imageURL = `http://localhost:8055/assets/${this.image}?fit=outside&width=${width}&height=${height}&quality=50`;
  },
};
</script>
<style lang="scss" scoped>
div {
  min-height: 128px;
  // background-image: url("https://milieudefensie.nl/stuur-shell-een-kaartje/stuur-een-kaartje/@@images/6e1706a6-eb14-4a67-9e87-e2b8254cbcca.jpeg");
  background-size: cover;
  color: white;
  border-radius: 0 0 60% 60%/40px;
  overflow: hidden;
  padding-top: 20%;
  padding-bottom: 128px;
}
</style>
