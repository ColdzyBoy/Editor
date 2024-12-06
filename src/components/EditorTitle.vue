<script setup lang="ts">

</script>

<template>
  <div class="title-area">
    <textarea id="post-title" placeholder="제목을 입력하세요"></textarea>
  </div>
</template>

<style scoped>
  .title-area {
    margin: 30px;
  }
  textarea {
    width: 100%;
    height: 40px;
    padding-bottom: 15px;
    border: none;
    border-bottom: 1px solid #e8e8e8;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Pretendard GOV Variable', sans-serif;
    outline: none;
    resize: none;
    background-color: transparent;
  }
  textarea::placeholder {
    color: #bdbdbd;
    font-weight: 300;
  }
</style>
