import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    title: 'redux toolkit pre'
}

// 创建 一个 slice
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // 定义 reducers 并生成关联的操作
    reducers: {
        increment: (state, { payload }) => {
            state.value += payload.value
        },
        decrement: (state) => {
            state.value -= 1
        },
    }
})

// 导出 加减的方法
export const { increment, decrement } = counterSlice.actions

// 默认导出
export default counterSlice.reducer