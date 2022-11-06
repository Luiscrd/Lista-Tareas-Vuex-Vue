<template>
  <div class="container mt-5">
    <h1>Lista de tareas</h1>
    <hr>
    <h4>Pendientes: {{ pendingTodos.length }}</h4>
    <hr>
    <button type="button" class="btn btn-warning m-2" :class="{ 'active': currenTab === 'all' }"
      @click="currenTab = 'all'">Todos</button>
    <button type="button" class="btn btn-warning m-2" :class="{ 'active': currenTab === 'pending' }"
      @click="currenTab = 'pending'">Pendientes</button>
    <button type="button" class="btn btn-warning m-2" :class="{ 'active': currenTab === 'completed' }"
      @click="currenTab = 'completed'">Completados</button>
    <hr>
    <ul>
      <li v-for="todo in getTodosByTab" :class="{ 'completed': todo.completed }" :key="todo.id"
        @dblclick="toggleTodo(todo.id)">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'HomeView',
  setup() {
    const store = useStore()
    const currenTab = ref('all')

    return {
      currenTab,
      pendingTodos: computed(() => store.getters['pendingTodos']),
      getTodosByTab: computed(() => store.getters['getTodosByTab'](currenTab.value)),
      toggleTodo: (id) => { store.commit('toggleTodo', id) }
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
  font-size: 1.2em;
}

.active {
  color: white;
  background-color: #750e26;
}

.completed {
  text-decoration: line-through;
}
</style>
