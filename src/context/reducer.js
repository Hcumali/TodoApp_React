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
    
        default:
            return {
                ...state,
            }
            break;
    }
}

export default reducer;