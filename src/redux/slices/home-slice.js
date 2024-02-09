import { createSlice } from "@reduxjs/toolkit"


const initialState = []

const homeSlice = createSlice({
    initialState: initialState,
    name: 'homeSlice',
    reducers: {
        ACTIVE: (state, action) => {
        }
    }
})

export default homeSlice