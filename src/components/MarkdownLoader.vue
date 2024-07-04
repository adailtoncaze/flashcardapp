<template>
  <div>
    <input type="file" id="file-input" @change="loadMarkdown" />
    <flashcard-list
      v-if="flashcards.length"
      :flashcards="flashcards"
      @reset="resetFlashcards"
    />
  </div>
</template>

<script>
import { marked } from 'marked';
import FlashcardList from './FlashcardList.vue';

export default {
  components: { FlashcardList },
  data() {
    return {
      flashcards: [],
    };
  },
  methods: {
    loadMarkdown(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const markdownContent = e.target.result;
          this.flashcards = this.parseMarkdown(markdownContent);
        };
        reader.readAsText(file);
      }
    },
    parseMarkdown(content) {
      const cards = [];
      const sections = content.split('---');
      sections.forEach(section => {
        const [front, ...backParts] = section.trim().split('\n').filter(line => line.trim() !== '');
        const back = backParts.join('\n');
        if (front && back) {
          cards.push({ front: marked(front), back: marked(back) });
        }
      });
      return cards;
    },
    resetFlashcards() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>
#file-input {
  display: block;
  margin: 20px auto;
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
</style>
