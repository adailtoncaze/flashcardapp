<template>
  <div class="text-center">
    <flashcard
      v-if="currentCardIndex >= 0 && currentCardIndex < flashcards.length"
      :key="currentCardIndex" 
      :frontContent="flashcards[currentCardIndex].front"
      :backContent="flashcards[currentCardIndex].back"
    />
    <div class="navigation flex justify-center space-x-4 mt-6">
      <button @click="prevCard" :disabled="currentCardIndex <= 0" class="btn btn-primary">Anterior</button>
      <button @click="nextCard" :disabled="currentCardIndex >= flashcards.length - 1" class="btn btn-primary">Próximo</button>
      <button @click="resetCards" class="btn btn-secondary">Resetar</button>
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
      window.location.reload(); // Reloads the page
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.btn-primary {
  background-color: #3FB27F;
  color: white;
}
.btn-primary:disabled {
  background-color: #ccc;
}
.btn-secondary {
  background-color: #32475B;
  color: white;
}
</style>
