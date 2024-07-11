<template>
  <div class="flashcard mx-auto my-4 p-6 rounded-lg shadow-lg bg-white transform hover:scale-105 transition-transform duration-300" @click="flipCard">
    <div class="card relative w-full h-full" :class="{ flipped: isFlipped }">
      <div class="front absolute w-full h-full flex items-center justify-center bg-green-custom rounded-lg p-4" v-html="frontContent"></div>
      <div class="back absolute w-full h-full flex items-center justify-center bg-neutral-custom rounded-lg p-4 transform rotateY-180" v-html="backContent"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fashcard-view",
  props: {
    frontContent: String,
    backContent: String,
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<style scoped>
.flashcard {
  width: 500px;
  height: 350px;
  perspective: 1000px;
}
.card {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.card.flipped {
  transform: rotateY(180deg);
}
.front, .back {
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media screen and (max-width: 600px) {
    padding-left: 60px;
    padding-right: 60px;
}
}
.back {
  transform: rotateY(180deg);
}
</style>
