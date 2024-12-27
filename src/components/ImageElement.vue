<script setup lang="ts">
  import ImageEditor from './ImageEditor.vue';

  import { ref } from 'vue';

  const isImageClicked = ref(false);

  const isEditorOpen = ref(false);

  // Props 선언
  interface Props {
    image: HTMLImageElement;
  }

  const props = defineProps<Props>();

  const imageClicked = () => {
    isImageClicked.value = true;
  }

  const editorOpenHandler = (booleanValue: boolean) => {
    isEditorOpen.value = booleanValue;
  }
</script>

<template>
  <ImageEditor v-if="isEditorOpen" :editorOpenHandler="editorOpenHandler"/>
    <ul v-if="isImageClicked">
      <li>
        <button
          type="button"
          class="image-edit-button"
          @click="editorOpenHandler(true)"
        >
        imageEdit
        </button>
      </li>
    </ul>
    <img
      :src="props.image.src"
      alt="Uploaded image"
      @click="imageClicked"
    >
</template>

<style>

</style>
