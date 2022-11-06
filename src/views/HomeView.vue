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
      <h2>¿Está seguro?</h2>
    </template>
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos porro, sit cupiditate hic maxime magnam! Soluta voluptates delectus.</p>
    </template>
    <template v-slot:footer>
      <button @click="closeModal" type="button" class="btn btn-danger">Salir</button>
    </template>
    <template v-slot:exposed="{ newTitle }">
      <h2>{{ newTitle }}</h2>
    </template>
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

    const { pendingTodos, currenTab, getTodosByTab, toggleTodo, isOpen, openModal, closeModal } = useTodos()

    return {
      pendingTodos,
      currenTab,
      getTodosByTab,
      toggleTodo,
      isOpen,
      openModal,
      closeModal
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
