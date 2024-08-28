<template>
  <div class="w-full overflow-hidden flex justify-center">
    <Carousel
      :itemsToShow="1.95"
      :autoplay="2000"
      :wrapAround="true"
      :transition="500"
      ref="feedCarrousel"
      :breakpoints="this.breakpoints"
    >
      <slide v-for="item in images" :key="item">
        <div class="carousel__item mx-2 flex justify-center">
          <img :src="item.url" />
        </div>
      </slide>
      <template #addons>
        <!-- <navigation /> -->
        <pagination />
      </template>
    </Carousel>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

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
      breakpoints: {
        1300: {
          itemsToShow: 1,
          snapAlign: "start",
        },
        1560: {
          itemsToShow: 1,
          snapAlign: "start",
        },

        1920: {
          itemsToShow: 1,
          snapAlign: "start",
        },

        2260: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },

      timer: null,
      currentIndex: 0,
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
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
    nextStorie() {
      this.$refs["feedCarrousel"].next();
    },
    backStorie() {
      this.$refs["feedCarrousel"].prev();
    },
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
<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
