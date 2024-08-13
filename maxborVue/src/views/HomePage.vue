<template>
  <Slogan></Slogan>
  <div class="flex justify-center mt-10">
    <Slider />
  </div>
</template>
<script>
import Slogan from "../components/Slogan.vue";
import Slider from "../components/Slider.vue";
export default {
  name: "HomePage",
  components: {
    Slogan,
    Slider,
  },
};
</script>
<style></style>
