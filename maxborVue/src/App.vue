<template>
  <main class="bg-[url('./assets/images/background.png')] min-h-screen">
    <TopBar />

    <router-view />
  </main>
</template>
<script>
import TopBar from "./components/TopBar.vue";

export default {
  name: "App",
  components: {
    TopBar,
  },
};
</script>
<style></style>
