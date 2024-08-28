<template>
  <Slogan></Slogan>
  <div class="flex flex-col justify-center mt-10">
    <Slider />
    <Forms />
  </div>
</template>
<script>
import Slogan from "../components/Slogan.vue";
import Slider from "../components/Slider.vue";
import Forms from "../components/Forms.vue";
export default {
  name: "HomePage",
  components: {
    Slogan,
    Slider,
    Forms,
  },
};
</script>
<style></style>
