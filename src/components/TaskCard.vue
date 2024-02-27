<script setup lang="ts">
import { useTaskStore } from '../stores/task';
  
interface Task {
    id: string;
    text: string;
    done: boolean;
  }
const props = defineProps<{
    taskCard: Task
    }>()

const store = useTaskStore()
  const {  deleteTask } = store

</script>

<template>
    <div class="cardBox">
        <p>{{ taskCard.text }}</p>
        <button class="button" @click="()=>deleteTask(taskCard.id)"> 
        Delete
        </button>
     </div>
</template>

<style scoped>
.cardBox{
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background-color: #f5f5f5;
    padding: 10px;
    cursor: move;
    margin-bottom: 10px;
}
.button {
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
}
p{
    margin: 0;
}
</style>