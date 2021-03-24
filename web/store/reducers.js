import C from '../constants.js'
//switch cases actions with constants parameters
export const todos = (state={}, action) => {
    switch (action.type) {
        case C.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    durum: action.durum
                }
            ]
        case C.DURUM_TODO:
            return state.map((todo, i) => {
                if (todo.id === action.id) {
                    return {
                        id: todo.id,
                        durum: action.durum
                    }
                }
                return todo
            })
        case C.REMOVE_TODO:  
            return state.filter(
                c => c.id !== action.id
            )
        case C.EDIT_TODO:
            return state.map((todo, i) => {
                if (todo.id === action.id) {
                    return {
                        id: todo.id,
                        title: action.title,
                    }
                }
                return todo
            })
        case C.SET_TODOS:
            return [...action.todos]
        default :
            return state
    }
}
