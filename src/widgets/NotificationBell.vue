<template>
  <div class="notification-box">
    <span class="notification-count"></span>
    <div class="notification-bell">
      <span class="bell-top"></span>
      <span class="bell-middle"></span>
      <span class="bell-bottom"></span>
      <span class="bell-rad"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.notification-box {
  position: relative;
  width: 18px;
  height: 18px;
  text-align: center;
}
.notification-bell {
  animation: bell 1s 1s both infinite;
}
.notification-bell * {
  display: block;
  margin: 0 auto;
  background-color: #fff;
}
.bell-top {
  width: 3px;
  height: 3px;
  border-radius: 3px 3px 0 0;
}
.bell-middle {
  width: 12px;
  height: 13px;
  margin-top: -1px;
  border-radius: 12.5px 12.5px 0 0;
}
.bell-bottom {
  position: relative;
  z-index: 0;
  width: 18px;
  height: 2px;
}
.bell-bottom::before,
.bell-bottom::after {
  content: '';
  position: absolute;
  top: -4px;
}
.bell-bottom::before {
  left: 1px;
  border-bottom: 4px solid #fff;
  border-right: 0 solid transparent;
  border-left: 4px solid transparent;
}
.bell-bottom::after {
  right: 1px;
  border-bottom: 4px solid #fff;
  border-right: 4px solid transparent;
  border-left: 0 solid transparent;
}
.bell-rad {
  width: 8px;
  height: 4px;
  border-radius: 0 0 4px 4px;
  animation: rad 1s 2s both infinite;
}
.notification-count {
  position: absolute;
  z-index: 1;
  top: 2px;
  right: -1px;
  width: 10px;
  height: 10px;
  line-height: 30px;
  font-size: 6px;
  border-radius: 50%;
  background-color: var(--blue);
  animation: zoom 3s 3s both infinite;
}
@keyframes bell {
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate(30deg);
  }
  20% {
    transform: rotate(0);
  }
  80% {
    transform: rotate(0);
  }
  90% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(0);
  }
}
@keyframes rad {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(6px);
  }
  20% {
    transform: translateX(0);
  }
  80% {
    transform: translateX(0);
  }
  90% {
    transform: translateX(-6px);
  }
  100% {
    transform: translateX(0);
  }
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
</style>