import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';
import filterReducer from './features/filters/filtersSlice';

const store = configureStore({
    reducer: {
        // Define a top-kevel state field named `todos`, handled by `todosReducer`
        todos: todosReducer,
        filters: filterReducer,
    },
})

export default store;