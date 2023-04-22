<template>
  <div class="burger">
    <BurgerIcon class="svg" v-if="!isOpen" />
    <CloseIcon class="svg" v-else />
  </div>
</template>

<script>
import BurgerIcon from '../assets/burger.svg';
import CloseIcon from '../assets/Close.svg';
export default {
  components: {
    BurgerIcon,
    CloseIcon,
  },
  props: ['isOpen'],
};
</script>

<style lang="scss" scoped>
@import '../styles/media';
.burger {
  width: 25px;
  height: 25px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @include media-breakpoint-down(lg) {
    display: flex;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      .svg {
        fill: var(--grey);
      }
    }
  }
}
.svg {
  fill: var(--white);
  transition: 0.3s;
}
</style>
