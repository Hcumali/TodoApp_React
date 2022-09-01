export const initialState = {
    todos: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_TODO":
            return {
                ...state,
                todos: action.payload
            }
            break;

        case "ADD_TODO":
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
            break;

        case "UPDATE_TODO":
            var todo = state.todos.find(todo => todo.id == action.payload.id);
            todo.isCompleted = action.payload.isCompleted;

            return {
                ...state
            }
            break;

        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != action.payload)
            }
            break;
    
        default:
            return {
                ...state,
            }
            break;
    }
}

export default reducer;