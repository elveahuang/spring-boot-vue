<template>
  <router-view/>
</template>
<script lang="ts" setup>
import {onMounted} from 'vue';

onMounted(async () => {
  console.log('Page - <Admin> is mounted.');
});
</script>
