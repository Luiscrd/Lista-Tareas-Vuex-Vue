import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {

    const store = useStore()
    const currenTab = ref('all')
    const isOpen = ref(false)
    const text = ref('')

    return {
        currenTab,
        pendingTodos: computed(() => store.getters['pendingTodos']),
        getTodosByTab: computed(() => store.getters['getTodosByTab'](currenTab.value)),
        toggleTodo: (id) => { store.commit('toggleTodo', id) },
        createTodo: (text) => { store.commit('createTodo', text)},
        openModal: () => isOpen.value = true,
        closeModal: () => isOpen.value = false,
        isOpen,
        text
    }
}

export default useTodos