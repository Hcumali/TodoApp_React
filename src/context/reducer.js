export const initialState = {
    todos: []
}

const reducer = (state, action) => {
    console.log("action: ", action);

    switch (action.type) {
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