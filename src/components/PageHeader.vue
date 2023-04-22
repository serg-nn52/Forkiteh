<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <router-link :to="{ name: 'Main' }"><LogoIcon class="logo" /></router-link>
        <div class="header-right">
          <div class="search">
            <SearchIcon />
            Москва и область
          </div>
          <NotificationBell />
          <BurgerButton @click.stop="isOpen = !isOpen" :isOpen="isOpen" />
        </div>
      </div>
    </div>
    <DesktopMenu />
    <MobileMenu @click.stop="isOpen = true" ref="mobileMenu" v-if="isOpen" />
  </header>
</template>

<script>
import LogoIcon from '../assets/Logo.svg';
import BurgerIcon from '../assets/burger.svg';
import SearchIcon from '../assets/search.svg';
import BurgerButton from '../widgets/BurgerButton.vue';
import NotificationBell from '../widgets/NotificationBell.vue';
import DesktopMenu from '../components/DesktopMenu.vue';
import MobileMenu from './MobileMenu.vue';

export default {
  components: {
    LogoIcon,
    BurgerIcon,
    SearchIcon,
    BurgerButton,
    NotificationBell,
    DesktopMenu,
    MobileMenu,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    document.addEventListener('click', () => {
      this.isOpen = false;
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/media';

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
}

.header-top {
  width: 100%;
  height: 45px;
  background-color: var(--bg-header);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1140px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
}
.header-right {
  display: flex;
  gap: 37px;
  @include media-breakpoint-down(lg) {
    gap: 22px;
  }
}
.logo {
  fill: var(--white);
  transition: 0.3s;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      fill: var(--grey);
    }
  }
}
.search {
  color: var(--search-color);
  transition: 0.3s;
  cursor: pointer;
  font-size: 1.4rem;
  @include media-breakpoint-down(lg) {
    display: none;
  }
  svg {
    fill: var(--search-color);
    transition: 0.3s;
  }
  &:hover {
    svg {
      fill: var(--white);
    }

    color: var(--white);
  }
}
</style>
