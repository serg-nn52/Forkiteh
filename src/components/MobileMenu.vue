<template>
  <nav class="menu">
    <router-link class="link" :to="path.path" :key="path.id" v-for="path in menuPaths">{{ path.title }}</router-link>
  </nav>
</template>

<script>
import { menuPaths } from '../router/paths';
export default {
  data() {
    return {
      menuPaths,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/media';
.menu {
  display: none;
  width: 576px;
  max-width: 100%;
  min-height: calc(100vh - 90px);
  max-height: calc(100vh - 45px);
  padding: 8px 15px 24px 8px;
  margin-left: auto;
  background-color: var(--white);

  overflow-y: scroll;
  @include media-breakpoint-down(lg) {
    display: block;
  }
}

.link {
  display: block;
  margin-left: auto;
  padding: 16px 0;
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--mobile-menu);
  border-bottom: 1px var(--mobile-border) solid;
}
</style>
