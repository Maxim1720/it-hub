
<template>
  <TaskForm />

  <transition name="section">
    <div class="task-section" v-if="taskStore.undoneTasks.length">
      <hr />
      <h2>Активные</h2>
      <transition-group tag="div" name="list" class="tasks">
        <Task
          v-for="task in taskStore.undoneTasks"
          :key="task.id"
          :task="task"
        />
      </transition-group>
    </div>
  </transition>

  <transition name="section">
    <div class="task-section done" v-if="taskStore.doneTasks.length">
      <hr />
      <h2>Выполненные</h2>
      <transition-group name="list" tag="div" class="tasks">
        <!-- < name="list" tag="div"> -->
        <Task v-for="task in taskStore.doneTasks" :key="task.id" :task="task" />
        <!-- </> -->
      </transition-group>
    </div>
  </transition>

  <transition name="section">
    <h2 v-if="!taskStore.all.length">Задач нет!</h2>
  </transition>

  
</template>

<script lang="ts" setup>
import Task from "./TaskCard.vue";
import TaskForm from "./TaskForm.vue";
import { useTaskStore } from "../../stores/TaskStore";
const taskStore = useTaskStore();
</script>

<style scoped lang="scss">
.list {
  &-enter {
    &-active {
      transition: all 0.1s ease-in-out;
    }
    &-from {
      opacity: 0;
      transform: translateX(30px);
    }
  }
  &-leave {
    &-active {
      transition: all 0.1s ease-in-out;
    }
    &-to {
      opacity: 0;
      transform: translateX(30px);
    }
  }
}
.section {
  &-enter {
    &-active {
      transition: all 0.5s;
    }
    &-from {
      opacity: 0;
      // transform: translateY(30px);
      transform: scale(0);
    }
  }
  &-leave {
    &-active {
      transition: all 0.1s;
    }
    &-to {
      opacity: 0;
      // transform: translateX(30px);
      transform: scale(0.1);
      // scale: 50px;
    }
  }
}

.done {
  opacity: 75%;
  transition-duration: 0.3s;
  &:hover {
    opacity: 100%;
  }
}

hr {
  width: 120%;
  opacity: 75%;
  box-shadow: 0px 0px 14px 0px #000;
  background-color: #424769;
  height: 1px;
  border: none;
  z-index: 0;
}

.tasks {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  flex: 1 0 0;

  height: 100%;
}

.task-section {
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.drop-down {
  content: "+";
}

h2 {
  color: #fff;
  text-align: center;
}
</style>