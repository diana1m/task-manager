<template>
    <div class="container">
      <draggable v-model:todoTasks="todoTasks" @end="onDragEnd" class="box">
        <p>To do</p>
        <TaskCard v-for="(task) in todoTasks" :key="task.id" :taskCard="task"/>
      </draggable>
  
      <draggable v-model:doneTasks="doneTasks" @end="onDragEnd" class="box">
        <p>Done</p>
        <TaskCard v-for="(task) in doneTasks" :key="task.id" :taskCard="task"/>
      </draggable>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useTaskStore } from '../stores/task';
  import { storeToRefs } from 'pinia' 
  import TaskCard from './TaskCard.vue';
  
  const store = useTaskStore()
  const { todoTasks, doneTasks } = storeToRefs(store)
  const { toggleTaskStatus } = store
  
  function onDragEnd(e: any) {
    console.log(e)
    // toggleTaskStatus()
    // Оновлюємо стор після перетягування
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    gap: 20px;
    width: 100%;
    min-height: 200px;
  }
  
  .task {
    margin: 5px;
    padding: 10px;
    background-color: #f0f0f0;
    cursor: move;
  }
.box{
    width: 100%;
    background-color: rgba(165, 177, 204, 0.945);
    border-radius: 20px;
    padding: 20px;
}
.title{
    text-align: center;
    font-size: 26px;
}
</style>