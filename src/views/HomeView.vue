<template>
  <div class="container mt-5">
    <h1>Lista de tareas</h1>
    <hr>
    <h4>Pendientes: {{ pendingTodos.length }}</h4>
    <hr>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'HomeView',
  setup () {
    const store = useStore()

    return {
      pendingTodos: computed(() => store.getters['pendingTodos']),
    }
  }
}
</script>
