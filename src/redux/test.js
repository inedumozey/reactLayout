import {createSlice} from '@reduxjs/toolkit';

const initialState = {name: 'benny'}

export const testReducer = createSlice({
    name: 'plans',
    initialState,
    reducers: {
        test(state){}        
    }
    
})

export const {test} = testReducer.actions
export default test.testReducer