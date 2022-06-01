import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        list: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        doneTodo: (state, action) => {
            state.list = state.list.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
            })

        },
        editTodo: (state, action) => {
            state.list = state.list.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        text: action.payload.text
                    }
                }
            })
        }
    }
})

export const { addTodo, deleteTodo, doneTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer