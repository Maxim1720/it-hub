<template>
  <nav class="nav">
    <div class="nav-task">
      <router-link to="/" class="nav-link" active-class="nav-link-active">Мои проекты</router-link>
      <router-link to="/public" class="nav-link" active-class="nav-link-active">Публичные проекты</router-link>
    </div>
    <div class="nav-auth">
      <router-link to="/sign-up" class="nav-link" active-class="nav-link-active">Регистрация</router-link>
      <router-link to="/sign-in" class="nav-link" active-class="nav-link-active">Авторизация</router-link>
    </div>
  </nav>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
a{
    text-decoration: none;
}
.nav {
  display: flex;
  height: 69px;
  padding: 10px 16px;
  justify-content: flex-end;
  align-items: center;
  gap: 38px;
  flex: 1 0 0;

  &-task {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;
    flex: 1 0 0;
    align-self: stretch;

    
  }
  &-auth{
    display: flex;
    gap: 38px;
    height: 100%;
  }

  &-link {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    color: var(--primary, #676f9d);
    text-align: center;
    font-family: 'Lato';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;

    &-active{
        color: #fff;
        text-shadow: 0px 2px 4px #fff;
        // text-shadow: #fff;
        // text-shadow:5px 10px;
    }

    // border-right: 1px solid white;
    // border-left: 1px solid white;
    // padding: 0px 12px;
  }
}
</style>