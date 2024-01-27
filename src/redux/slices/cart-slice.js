import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    idUser: null,
    cart: []
}

const cartSlice = createSlice({
    initialState: initialState,
    name: 'cartSlice',
    reducers: {

    }
})

export default cartSlice.reducer