<template>
  <div>
    <div
      v-for="item in this.images"
      :key="item"
      class="relative h-[480px] w-[850px] rounded-xl mb-10"
    >
      <img class="h-full rounded-xl" :src="getImage(item.url)" />
      <div class="absolute top-72 left-10">
        <p class="text-white text-3xl mb-3">{{ item.title }}</p>
        <button
          class="transition ease-in-out delay-150 px-4 py-2 bg-red-700 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
        >
          <p class="text-white">Saiba mais</p>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import "";
export default {
  name: "Slider",
  data() {
    return {
      imagem: "@/assets/images/espumas-adesivas.png",
      images: [
        {
          title: "Espuma Adesiva",
          url: "../assets/images/espumas-adesivas.png",
          link: "",
        },
        {
          title: "Isolante Elétrico",
          url: "../assets/images/isolantesEletricos.png",
          link: "",
        },
        {
          title: "Lençol de Borracha",
          url: "../assets/images/lencolBorracha.png",
          link: "",
        },
        {
          title: "Piso de Borracha",
          url: "../assets/images/pisosBorracha.png",
          link: "",
        },
        {
          title: "Peça Técnica",
          url: "../assets/images/pecasTecnicas.png",
          link: "",
        },
      ],

      timer: null,
      currentIndex: 0,
    };
  },
  computed: {
    // currentImg() {
    //   return this.images[Math.abs(this.currentIndex) % this.images.length].src;
    // },
  },
  mounted() {
    //this.startSlide();
  },
  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },
    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
    getImage(img) {
      return require(img);
    },
  },
};
</script>
<style></style>
