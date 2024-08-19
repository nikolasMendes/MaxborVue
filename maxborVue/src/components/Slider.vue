<template>
  <div>
    <!-- <div
        v-for="(item, index) in images"
        :key="item"
        class="relative h-[480px] w-[850px] rounded-xl mb-10"
      >
        <img class="h-full rounded-xl" :src="item.url" />
        <div class="absolute top-72 left-10">
          <p class="text-white text-3xl mb-3">
            {{ item.title }}
          </p>
          <button
            class="transition rounded-lg ease-in-out delay-150 px-4 py-2 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300"
          >
            <p class="text-white">Saiba mais</p>
          </button>
        </div>
      </div> -->
    <Carousel
      :value="images"
      :numVisible="1"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
    >
      <template #item="item">
        <div>
          <img :src="item.data.url" />
        </div>
      </template>
    </Carousel>
  </div>
</template>
<script>
import Carousel from "primevue/carousel";

export default {
  name: "Slider",
  data() {
    return {
      img: "../../static/isolantesEletricos.png",
      images: [
        {
          title: "Espuma Adesiva",
          url: "../../static/espumasAdesivas.png",
          link: "",
        },
        {
          title: "Isolante Elétrico",
          url: "../../static/isolantesEletricos.png",
          link: "",
        },
        {
          title: "Lençol de Borracha",
          url: "../../static/lencolBorracha.png",
          link: "",
        },
        {
          title: "Piso de Borracha",
          url: "../../static/pisosBorracha.png",
          link: "",
        },
        {
          title: "Peça Técnica",
          url: "../../static/pecasTecnicas.png",
          link: "",
        },
      ],
      responsiveOptions: [
        {
          breakpoint: "1400px",
          numVisible: 1,
          numScroll: 1,
        },
        {
          breakpoint: "1199px",
          numVisible: 1,
          numScroll: 1,
        },
        {
          breakpoint: "767px",
          numVisible: 1,
          numScroll: 1,
        },
        {
          breakpoint: "575px",
          numVisible: 1,
          numScroll: 1,
        },
      ],

      timer: null,
      currentIndex: 0,
    };
  },
  components: {
    Carousel,
  },
  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length].url;
    },
    currentTitle() {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
        .title;
    },
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next(), 4000);
    },
    next() {
      this.index += 1;
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
<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
} */
</style>
