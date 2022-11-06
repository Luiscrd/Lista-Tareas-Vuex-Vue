import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {

    const store = useStore()
    const currenTab = ref('all')
    const isOpen = ref(false)

    return {
        currenTab,
        pendingTodos: computed(() => store.getters['pendingTodos']),
        getTodosByTab: computed(() => store.getters['getTodosByTab'](currenTab.value)),
        toggleTodo: (id) => { store.commit('toggleTodo', id) },
        openModal: () => isOpen.value = true,
        closeModal: () => isOpen.value = false,
        isOpen
    }
}

export default useTodos