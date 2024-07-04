<template>
  <div class="flashcard" @click="flipCard">
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="front" v-html="frontContent"></div>
      <div class="back" v-html="backContent"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flashcard-view",
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
  perspective: 1000px;
  width: 400px;
  height: 300px;
  margin: 20px auto;
  cursor: pointer;
}
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.card.flipped {
  transform: rotateY(180deg);
}
.front, .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.back {
  transform: rotateY(180deg);
}
</style>
