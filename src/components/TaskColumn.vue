<template>
  <div class="container">
    <div
      v-for="category in categories"
      :key="category.id"
      @drop="onDrop($event, category.id)"
      class="droppable"
      @dragover.prevent
      @dragenter.prevent
    >
      <h4>{{ category.title }}</h4>
      <TaskCard
        v-for="task in getTasksByCategoryId(category.id)"
        @dragstart="onDragStart($event, task)"
        draggable="true"
        :key="task.id"
        :taskCard="task"
      >
      </TaskCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskCard from './TaskCard.vue'
import { useTaskStore } from '../stores/task'
import type ITask from '@/interfaces/ITask'

export default defineComponent({
  name: 'App',
  components: { TaskCard },
  setup() {
    const taskStore = useTaskStore()
    

    function onDragStart(e: DragEvent, task: ITask) {
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = 'move'
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('taskId', task.id.toString())
      }
    }

    function onDrop(e: DragEvent, categoryId: number) {
      if (e.dataTransfer) {
      const taskId = e.dataTransfer.getData('taskId')
      taskStore.moveTaskToCategory(taskId, categoryId)
      }
    }

    return {
      categories: taskStore.categories,
      getTasksByCategoryId: (categoryId: number) => taskStore.getTasksByCategoryId(categoryId),
      onDragStart,
      onDrop
    }
  }
})
</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
  width: 100%;
}
.droppable {
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  background: #629671;
}

.droppable h4 {
  color: white;
}
</style>
