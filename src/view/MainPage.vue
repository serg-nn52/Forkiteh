<template>
  <div class="wrapper">
    <div class="my-moon"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: calc(100vh - 45px);
  position: relative;
  font-size: 16px;
  background: linear-gradient(#160731 0%, #1b293c 100%);
  color: #333;
  overflow: hidden;
}
.my-moon {
  width: 120px;
  height: 120px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.04), 0 0 0 20px rgba(255, 255, 255, 0.04),
    0 0 0 30px rgba(255, 255, 255, 0.04), 0 0 50px 50px rgba(255, 255, 255, 0.02),
    0 0 100px 100px rgba(255, 255, 255, 0.02);
  animation: moon-moving 30s both infinite;
}

@keyframes zoom {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  10% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes moon-moving {
  0% {
    transform: translate(-200%, 600%);
  }
  100% {
    transform: translate(800%, -200%);
  }
}
</style>
