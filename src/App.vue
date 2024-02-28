<script setup lang="ts">
import AddingForm from './components/AddingForm.vue'
import TaskColumn from './components/TaskColumn.vue'
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#00b96b',
      },
    }"
  > 
  <main>
    <AddingForm />
    <TaskColumn />
  </main>
</a-config-provider>
  
</template>
