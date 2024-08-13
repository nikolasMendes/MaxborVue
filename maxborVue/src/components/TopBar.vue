<template>
  <div
    class="flex flex-row justify-start items-center gap-20 h-36 pt-1 bg-transparent"
  >
    <img class="" src="../assets/images/logoMaxbor.png" />
    <div class="flex flex-row justify-between w-[35%]">
      <p class="text-2xl text-black" v-on:click="letsHome()">Home</p>
      <p class="text-2xl text-black" v-on:click="letsAboutUs()">Sobre nós</p>
      <p class="text-2xl text-black" v-on:click="letsProduct()">Produto</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    letsHome() {
      this.$router.push("/");
    },
    letsAboutUs() {
      this.$router.push({ path: "/aboutUs", name: "AboutUs" });
    },
    letsProduct() {
      this.$router.push({ path: "/products" });
    },
  },
};
</script>
<style></style>
