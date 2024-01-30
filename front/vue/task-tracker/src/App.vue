<script setup lang="ts">
import NavPanel from "./components/nav/Nav.vue";
import Logo from "./components/nav/Logo.vue";
import Tasks from "./components/task/Tasks.vue";
</script>

<template>
  <div class="app">
    <header class="header">
      <Logo />
      <NavPanel />
    </header>
    <!-- <main> -->
      <transition name="router" tag="main">
        <router-view></router-view>
      </transition>
    <!-- </main> -->
  </div>
</template>

<style lang="scss" scoped>
.router {
  &-enter {
    &-active {
      transition: all 0.2s;
    }
    &-from{
      opacity: 0;
      transform: translateX(10px);
    }
  }

  &-leave {
    &-active {
      transition: all 0.2s ease-in-out;
    }
    &-to{
      opacity: 0;
      width: 0px;
      transform: translateX(10px);
    }
  }
}

.header {
  display: flex;
  // width: 1420px;
  width: 100%;
  height: 89px;
  padding: 10px;
  align-items: center;
  gap: 36px;

  // border-bottom: 1px solid rgba(66, 71, 105, 0.75);
  box-shadow: 0px 4px 12px -9px #000;
}
main {
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  // height: 100%;
}
.app {
  display: flex;
  min-width: 1440px;
  min-height: 100svh;
  // padding: 38px 96px 0px 96px;
  padding: 13px 10px;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  background: #2d3250;
}
</style>
