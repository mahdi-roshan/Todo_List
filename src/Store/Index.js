import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './Slices/TodoSlice'
export  const store = configureStore({
    reducer: {
        todos: todosReducer
    },
})

