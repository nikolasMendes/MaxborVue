<template>
  <div class="w-full overflow-hidden flex justify-center">
    <Carousel
      :itemsToShow="3.2"
      :autoplay="3000"
      :wrapAround="true"
      :transition="500"
      ref="feedCarrousel"
      :breakpoints="this.breakpoints"
    >
      <slide class="rounded-2xl" v-for="item in images" :key="item">
        <div
          class="rounded-2xl shadow-xl active:shadow-2xl relative mx-2 flex justify-center"
        >
          <img class="rounded-2xl" :src="item.url" />
          <div class="absolute flex flex-col justify-start gap-2 top-11 left-8">
            <p class="font-extrabold font-sans text-3xl">{{ item.title }}</p>
            <button class="p-2 bg-red-600 rounded-lg w-min">
              <p class="text-white w-max text-lg">Saiba mais</p>
            </button>
          </div>
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
      images: [
        {
          title: "Piso de Borracha",
          url: "../../static/1.png",
          link: "",
        },

        {
          title: "Espuma Adesiva",
          url: "../../static/2.png",
          link: "",
        },
        {
          title: "Peça Técnica",
          url: "../../static/3.png",
          link: "",
        },
        {
          title: "Peça Técnica",
          url: "../../static/4.png",
          link: "",
        },
        {
          title: "Lençol de borracha",
          url: "../../static/5.png",
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
  min-height: 450px;
  align-items: end;
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
  opacity: 10;
  filter: blur(3px);
}

.carousel__slide--next {
  opacity: 10;
  filter: blur(3px);
}

.carousel__slide--active {
  position: relative;
  transform: translateY(-40px);
}
</style>
