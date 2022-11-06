import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
    
    const store = useStore()
    const currenTab = ref('all')

    return {
        currenTab,
        pendingTodos: computed(() => store.getters['pendingTodos']),
        getTodosByTab: computed(() => store.getters['getTodosByTab'](currenTab.value)),
        toggleTodo: (id) => { store.commit('toggleTodo', id) }
    }
}

export default useTodos