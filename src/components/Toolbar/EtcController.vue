<script setup lang="ts">
  import { ref } from 'vue';
  import { setImage } from '../../function/imageData';

  const imageRef = ref();

  const clickImageUpload = () => {
    imageRef.value.click();
  }

  const settingImage = (event: Event) => {
    const fileReader = new FileReader();

    const fileData = (event.target as HTMLInputElement)?.files?.[0];

    if (!fileData) {
      alert('file is not select.');

      return;
    }

    fileReader.readAsDataURL(fileData);

    fileReader.onload = () => {
      const image = new Image();

      image.src = fileReader.result as string;

      setImage(image);
    }
  }


</script>

<template>
  <div class="toolbar etc-controller">
    <div class="button-box create-table">
      <button type="button" class="click-box">
        <span><font-awesome-icon :icon="['fas', 'table']" /></span>
      </button>
    </div>
    <div class="button-box create-calendar">
      <button type="button" class="click-box">
        <span><font-awesome-icon :icon="['fas', 'calendar']" /></span>
      </button>
    </div>
    <div class="button-box create-image">
      <button type="button" class="click-box" @click="clickImageUpload">
        <span><font-awesome-icon :icon="['fas', 'image']" /></span>
      </button>
      <input ref="imageRef" type="file" style="display: none;" @change="settingImage" accept="image/gif, image/jpeg, image/png, image/bmp, image/webp, image/svg+xml">
    </div>
    <div class="button-box create-list">
      <button type="button" class="click-box" >
        <span><font-awesome-icon :icon="['fas', 'list']" /></span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
