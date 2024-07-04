<template>
  <div class="flex flex-col items-center justify-center">
    <div class="text-center">
      <input type="file" id="file-input" accept=".md" @change="handleFileUpload" class="max-w-md py-2 px-4 rounded-full border-2 border-green-custom bg-neutral-custom text-white hover:bg-slate-600 hover:border-green-300 focus:outline-none focus:border-green-400 transition duration-150 ease-in-out" />
      <flashcard-list
        v-if="flashcards.length"
        :flashcards="flashcards"
        @reset="resetFlashcards"
      />
      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </div>
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
      error: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      
      const extension = file.name.split('.').pop().toLowerCase();
      if (extension !== 'md') {
        this.error = 'Formato de arquivo inválido. Por favor, selecione um arquivo .md.';
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const markdownContent = e.target.result;
        this.error = '';
        this.flashcards = this.parseMarkdown(markdownContent);
      };
      reader.readAsText(file);
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
      this.flashcards = [];
      this.error = '';
    },
  },
};
</script>

<style scoped>
</style>
