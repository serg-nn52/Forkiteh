<template>
  <page-header />
  <div class="wrapper">
    <slot></slot>
  </div>
  <page-footer />
</template>

<script>
import PageFooter from './PageFooter.vue';
import PageHeader from './PageHeader.vue';
export default {
  components: { PageFooter, PageHeader },
};
</script>

<style lang="scss" scoped>
@import '../styles/media';

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 45px);
  @include media-breakpoint-down(lg) {
    min-height: calc(100vh - 45px);
  }
}
</style>
