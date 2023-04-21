<script>
import PageLayout from './components/PageLayout.vue';
export default {
  components: { PageLayout },
};
</script>

<template>
  <page-layout>
    <router-view />
  </page-layout>
</template>
