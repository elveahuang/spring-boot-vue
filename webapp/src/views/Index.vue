<template>
  <div class="container text-center">
    <div class="p-10">Index Page</div>
    <div>
      <router-link to="/about">
        <button class="btn btn-primary btn-sm">Go to About</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue';

onMounted(async () => {
  console.log('Page - <Index> is mounted.');
});
</script>