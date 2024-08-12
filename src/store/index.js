import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cart-slice'
import counterReducer from './features/counter-slice'
import movieReducer from "./features/movie-slice";

// configureStore创建一个redux数据
const store = configureStore({
    // 合并多个Slice
    reducer: {
        cart: cartReducer,
        counter: counterReducer,
        movie: movieReducer,
    }
})

export default store