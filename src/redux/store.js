import { configureStore } from '@reduxjs/toolkit';
import { test } from './test';



// redux store
export const store = configureStore({
    reducer: { test}
});

