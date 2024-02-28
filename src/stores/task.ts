// import { ref } from 'vue'
// import { defineStore } from 'pinia'

// interface Task {
//   id: string
//   text: string
//   categoryId: number
// }

// export const useTaskStore = defineStore('task', () => {
//   const todoTasks = ref([] as Task[])
//   const doneTasks = ref([] as Task[])

//   function addTask(text: string) {
//     const newTask: Task = { id: String(Math.random()), text, categoryId: 0 }
//     todoTasks.value.push(newTask)
//   }

//   function deleteTask(id: string) {
//     todoTasks.value = todoTasks.value.filter((task) => task.id !== id)
//     doneTasks.value = doneTasks.value.filter((task) => task.id !== id)
//   }

//   return { todoTasks, doneTasks, addTask, deleteTask }
// })

import { defineStore } from 'pinia'
import type ITask from '@/interfaces/ITask'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as ITask[],
    categories: [
      { id: 0, title: 'To do' },
      { id: 1, title: 'In progress' },
      { id: 2, title: 'Done' }
    ]
  }),
  getters: {
    getTasksByCategoryId: (state) => (categoryId: number) => {
      return state.tasks.filter((task) => task.categoryId === categoryId)
    }
  },
  actions: {
    addTask(text: string) {
      const newTask: ITask = { id: String(Math.random()), text, categoryId: 0 }
      this.tasks.push(newTask)
    },
    deleteTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
    moveTaskToCategory(itemId: string, newCategoryId: number) {
      const taskIndex = this.tasks.findIndex((task) => task.id === itemId)
      if (taskIndex !== -1) {
        this.tasks[taskIndex].categoryId = newCategoryId
      }
    }
  },
  persist: true
})
