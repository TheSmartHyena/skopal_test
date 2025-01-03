import { defineStore } from 'pinia'
import type { Task } from '~/types/Task'

type State = {
  item: Task | null
  create: boolean
  update: boolean
  delete: boolean
  refetchTrigger: number
}

export const useTasksStore = defineStore('tasks', {
  state: (): State => ({ create: false, update: false, delete: false, item: null, refetchTrigger: 0 }),
  actions: {
    showCreate() {
      this.create = true
    },
    hideCreate() {
      this.create = false
      this.item = null
    },

    showUpdate(task: Task) {
      this.item = task
      this.update = true
    },
    hideUpdate() {
      this.update = false
      this.item = null
    },

    showDelete(task: Task) {
      this.item = task
      this.delete = true
    },
    hideDelete() {
      this.delete = false
      this.item = null
    },

    refetch() {
      this.refetchTrigger++
    },
  },
})
