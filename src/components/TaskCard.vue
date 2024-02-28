<script setup lang="ts">
import { useTaskStore } from '../stores/task'
import { DeleteOutlined } from '@ant-design/icons-vue';
import type ITask from '../interfaces/ITask';

const props = defineProps<{
  taskCard: ITask
}>()

const store = useTaskStore()
const { deleteTask } = store
</script>

<template>
  <div class="cardBox">
    <p>{{ taskCard.text }}</p>
    <a-button class="button" @click="() => deleteTask(taskCard.id)"  danger>
        <delete-outlined/>
        Delete
    </a-button>
  </div>
</template>

<style scoped>
.cardBox {
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 10px;
  width: 100%;

  background-color: #cfe9d7;
  cursor: move;
}
.button {
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items: center;
}

p {
  margin: 0;
  color: #262f25;
}
</style>
