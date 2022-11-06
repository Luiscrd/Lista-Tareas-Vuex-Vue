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
    <button type="button" class="btn btn-outline-danger m-2" @click="openModal">Crear Todo</button>
    <hr>
    <ul>
      <li v-for="todo in getTodosByTab" :class="{ 'completed': todo.completed }" :key="todo.id"
        @dblclick="toggleTodo(todo.id)">{{ todo.text }}</li>
    </ul>
  </div>
  <modal v-if="isOpen" title="Hola mundo" @on:close="closeModal">

    <template v-slot:header>
      <h2 class="mb-5">Nueva tarea</h2>
    </template>

    <template v-slot:body>
      <form @submit.prevent="createTodo(text), isOpen = false, text = ''">
        <input class="form-control mb-5" type="text" placeholder="Crear todo" v-model="text">
        <button type="submit" class="btn btn-danger">Guardar</button>
      </form>
    </template>
    <template v-slot:footer>

    </template>
    <!-- <template v-slot:exposed="{ newTitle }">
      <h2>{{ newTitle }}</h2>
    </template> -->
  </modal>
</template>

<script>
import useTodos from '@/composables/useTodos'
import Modal from '@/components/Modal.vue'

export default {

  name: 'HomeView',
  components: {
    Modal
  },

  setup() {

    const {
      pendingTodos,
      currenTab,
      getTodosByTab,
      toggleTodo,
      isOpen,
      openModal,
      closeModal,
      createTodo,
      text
    } = useTodos()

    return {
      pendingTodos,
      currenTab,
      getTodosByTab,
      toggleTodo,
      isOpen,
      openModal,
      closeModal,
      createTodo,
      text
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
