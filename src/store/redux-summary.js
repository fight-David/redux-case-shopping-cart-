// 引入 RTK
import { createSlice } from '@reduxjs/toolkit';

// thunk函数允许执行异步逻辑, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
export const getMovieData = createAsyncThunk();

// 创建一个 Slice（切片）
export const counterSlice = createSlice({
    // 命名空间，name会作为action type的前缀
    name: 'counter',

    // 初始化状态
    initialState: {},

    // 1、定义reducer更新状态的函数
    // 2、组件中dispatch使用的action函数
    reducers: {
        xxx: (state, action) => { },
    },
    // extraReducers 字段让 slice 可以处理在别处定义的 actions， 
    // 包括由 createAsyncThunk或其他slice生成的actions。
    extraReducers() { },
});

// 导出action函数
export const { xxx } = counterSlice.actions;

// 导出reducer，创建store
export default counterSlice.reducer;

