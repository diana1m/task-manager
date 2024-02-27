
import { ref} from 'vue'
import { defineStore } from 'pinia';

interface Task {
  id: string;
  text: string;
  done: boolean;
}

export const useTaskStore = defineStore('task', ()=> {
  
  const todoTasks = ref([]as Task[])
  const doneTasks = ref([] as Task[])

  function addTask(text: string) {
      const newTask: Task = { id: String(Math.random()), text, done: false };
      todoTasks.value.push(newTask);
    }

  function deleteTask(id: string) {
      todoTasks. value = todoTasks.value.filter(task => task.id !== id);
      doneTasks.value = doneTasks.value.filter(task => task.id !== id);
    }

  function toggleTaskStatus(id: string) {
      const task = todoTasks.value.find(task => task.id === id) || doneTasks.value.find(task => task.id === id);
      if (task) {
        task.done = !task.done;
      }
    }
  return {todoTasks, doneTasks, addTask, deleteTask, toggleTaskStatus}
});

