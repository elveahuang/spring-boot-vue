<template>
  <div class="container text-center">
    <div class="p-10">Dashboard Page</div>
    <div>
      <router-link to="/workbench">
        <button class="btn btn-primary btn-sm">Go to Workbench</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue';

onMounted(async () => {
  console.log('Page - <Dashboard> is mounted.');
});
</script>