import { configureStore } from '@reduxjs/toolkit'
import tableDataReducer from './table';

export const store = configureStore({
	reducer: {
		tableData: tableDataReducer,
	},
})
