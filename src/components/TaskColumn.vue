<!-- <template>
  <div class="container">
    <draggable v-model:todoTasks="todoTasks" @end="onDragEnd" class="box">
      <p>To do</p>
      <TaskCard v-for="task in todoTasks" :key="task.id" :taskCard="task" />
    </draggable>

    <draggable v-model:doneTasks="doneTasks" @end="onDragEnd" class="box">
      <p>Done</p>
      <TaskCard v-for="task in doneTasks" :key="task.id" :taskCard="task" />
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '../stores/task'
import { storeToRefs } from 'pinia'
import TaskCard from './TaskCard.vue'

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
.box {
  width: 100%;
  background-color: rgba(165, 177, 204, 0.945);
  border-radius: 20px;
  padding: 20px;
}
.title {
  text-align: center;
  font-size: 26px;
}
</style> -->

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
        class="draggable"
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

export default defineComponent({
  name: 'App',
  components: { TaskCard },
  setup() {
    const taskStore = useTaskStore()

    function onDragStart(e: DragEvent, task) {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('taskId', task.id.toString())
    }

    function onDrop(e: DragEvent, categoryId) {
      const taskId = e.dataTransfer.getData('taskId')
      taskStore.moveTaskToCategory(taskId, categoryId)
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
  background: #2c3e50;
  margin-bottom: 10px;
}

.droppable h4 {
  color: white;
}

.draggable {
  background: white;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
}

.draggable h5 {
  margin: 0;
}
</style>
