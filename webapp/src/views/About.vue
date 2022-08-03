<template>
  <div class="container text-center">
    <div class="p-10">About Page</div>
    <div>
      <router-link to="/">
        <button class="btn btn-primary btn-sm">Go to Index</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue';

onMounted(async () => {
  console.log('Page - <About> is mounted.');
});
</script>