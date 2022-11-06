import { createStore } from 'vuex'
import { v4 as uuid } from 'uuid'

export default createStore({
  state: {
    todos: [
      { id: 1, text: 'Realizar el curso de Nest', completed: true },
      { id: 2, text: 'Realizar el curso de Angular Avanzado', completed: false },
      { id: 3, text: 'Realizar el curso de React', completed: false },
      { id: 4, text: 'Realizar el curso de React Avanzado', completed: false },
      { id: 5, text: 'Realizar el curso de React Native', completed: false },
    ]
  },
  getters: {
    pendingTodos(state) {
      return state.todos.filter(todo => !todo.completed)
    },
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed)
    },
    allTodos(state) {
      return state.todos
    },
    getTodosByTab: (_, getters) => (tab) => {
      switch (tab) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos
      }
    }
  },
  mutations: {
    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex(todo => todo.id === id)
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    },
    createTodo(state, text = '') {
      if (text.length <= 1) return
      state.todos.push({
        id: uuid(),
        text,
        completed: false
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
