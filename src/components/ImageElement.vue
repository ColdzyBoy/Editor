<script setup lang="ts">
    import { ref } from 'vue';

    const isImageClicked = ref(false);

    // Props 선언
    interface Props {
        image: HTMLImageElement;
    }

    const props = defineProps<Props>();

    const imageClicked = () => {
        isImageClicked.value = true;
    }
</script>

<template>
    <ul v-if="isImageClicked">
        <li>
            <button 
                type="button"
                class="image-edit-button"
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