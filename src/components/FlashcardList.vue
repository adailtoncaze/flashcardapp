<template>
  <div>
    <flashcard
      v-if="currentCardIndex >= 0 && currentCardIndex < flashcards.length"
      :frontContent="flashcards[currentCardIndex].front"
      :backContent="flashcards[currentCardIndex].back"
    />
    <div class="navigation">
      <button @click="prevCard" :disabled="currentCardIndex <= 0">Anterior</button>
      <button @click="nextCard" :disabled="currentCardIndex >= flashcards.length - 1">Próximo</button>
      <button @click="resetCards">Resetar</button>
    </div>
  </div>
</template>

<script>
import Flashcard from './Flashcard.vue';

export default {
  components: { Flashcard },
  props: {
    flashcards: Array,
  },
  data() {
    return {
      currentCardIndex: 0,
    };
  },
  methods: {
    prevCard() {
      if (this.currentCardIndex > 0) {
        this.currentCardIndex--;
      }
    },
    nextCard() {
      if (this.currentCardIndex < this.flashcards.length - 1) {
        this.currentCardIndex++;
      }
    },
    resetCards() {
      this.$emit('reset');
    },
  },
};
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
button:disabled {
  background-color: #ccc;
}
</style>
