<template>
  <div class="menu">
    <nav class="container">
      <router-link class="link" :to="path.path" :key="path.id" v-for="path in menuPaths">{{ path.title }}</router-link>
    </nav>
  </div>
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
  width: 100%;
  background-color: var(--white);
  border-bottom: 1px solid var(--white);
  @include media-breakpoint-down(lg) {
    display: none;
  }
}

.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  width: 1140px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  border-bottom: 1px var(--light-grey) solid;
}

.link {
  display: flex;
  font-size: 1.4rem;
  color: var(--dark-grey);
  transition: hover 0.3s;
  padding: 15px 0;
  &:hover {
    color: var(--grey);
  }
}
.router-link-active {
  color: var(--black);
  border-bottom: 2px var(--black) solid;
  padding: 15px 0 13px 0;
  &:hover {
    color: var(--black);
  }
}
</style>
