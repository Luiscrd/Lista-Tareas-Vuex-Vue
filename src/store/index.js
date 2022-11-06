import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, text: 'Realizar el curso de Nest', completed: true},
      { id: 2, text: 'Realizar el curso de Angular Avanzado', completed: false},
      { id: 3, text: 'Realizar el curso de React', completed: false},
      { id: 4, text: 'Realizar el curso de React Avanzado', completed: false},
      { id: 5, text: 'Realizar el curso de React Native', completed: false},
    ]
  },
  getters: {
    pendingTodos(state) {
      return state.todos.filter( todo => !todo.completed )
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
