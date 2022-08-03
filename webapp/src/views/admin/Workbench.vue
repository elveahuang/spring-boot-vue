<template>
  <div class="container text-center">
    <div class="p-10">Workbench Page</div>
    <div>
      <router-link to="/">
        <button class="btn btn-primary btn-sm">Go to Dashboard</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue';

onMounted(async () => {
  console.log('Page - <Workbench> is mounted.');
});
</script>