<template>
  <Slogan></Slogan>
  {{ console.log("oiiiii") }}
</template>
<script>
import Slogan from "../components/Slogan.vue";
export default {
  name: "HomePage",
  components: {
    Slogan,
  },
};
</script>
<style></style>
