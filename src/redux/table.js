import { createSlice } from '@reduxjs/toolkit'

function createData(todo) {
    return { todo };
}

const initialState = {
    rows: [],
}

export const tableDataSlice = createSlice({
    name: 'tableData',
    initialState,
    reducers: {
        addRow: (state, action) => {
            state.rows = [createData(action.payload), ...state.rows];
        },

        deleteRow: (state, action) => {
            state.rows = state.rows.filter((_, index) => index !== action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addRow, deleteRow } = tableDataSlice.actions

export default tableDataSlice.reducer
