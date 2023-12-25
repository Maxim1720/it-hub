<script>
import "./style.scss";
import Btn from "./components/Btn.vue";
export default {
  components: { Btn },
  data() {
    return {
      message: "Сообщения",
      message2: "Сообщения 2",
      rawhtml: "<hr>",
      disabled: false,
      counter: 1,
      isActive: false,
      cars: ["Mercedes", "BMW", "Toyota"],
    };
  },
  methods: {
    isDisabled() {
      this.disabled = !this.disabled;
    },
    incriment(toIncrement) {
      toIncrement ? this.counter++ : this.counter--;
    },
  },
  watch: {
    counter(newValue, oldValue) {
      if (newValue > 10) {
        this.counter = 0;
      }
    },
  },
};
</script>


<template>
  <div class="container">
    <header class="header">
      <h1>{{ message2 }}</h1>
      <div v-html="rawhtml"></div>
    </header>

    <input
      type="text"
      v-model="message2"
      v-bind:disabled="disabled"
      :class="{ active: disabled }"
    />
    <button v-on:click="isDisabled">Нажми</button>

    <div>
      <div v-if="disabled">
        <h2>{{ counter }}</h2>
        <button @click="incriment(true)">Увеличить!</button>
        <button @click="incriment(false)">Уменьшить!</button>
      </div>

      <div v-else>Тут пусто...</div>
    </div>

    <div class="cars">
      <!-- <h3 v-for="item in cars" :key="item">Название авто: {{ item }}</h3> -->
      <h3>Выберите авто</h3>
      <select name="cars-select" id="cars-select">
        <option v-for="item in cars" :key="item">{{ item }}</option>
      </select>
    </div>

    <Btn v-bind:title="'Кнопочка!'" v-on:clickBtn="incriment(true)"/>
  </div>
</template>


<style scoped lang="scss">
</style>