<script setup lang="ts">
import AddingForm from './components/AddingForm.vue'
import TaskColumn from './components/TaskColumn.vue'
</script>

<template>
  <header></header>

  <main>
    <AddingForm />
    <div class="tasksWrapper">
      <TaskColumn />
    </div>
  </main>
</template>
