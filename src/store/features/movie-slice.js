import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { increment } from "./counter-slice";

const initialState = {
    list: [],
    totals: 0
}


// 请求电影列表
const getMovieListApi = () => fetch('https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_ id=1&ret_ num=48').then(res => res.json())


// thunk 函数允许执行异步逻辑，通常用于发出异步请求
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态
// pending (进行中)  、fulfilled (成功)、 rejected (失败)
export const getMovieData = createAsyncThunk('movie/getMovie',
    async () => {
        const res = await getMovieListApi()
        return res
    }
)

// 创建一个 Slice
export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        // 数据请求完触发
        loadDataEnd: (state, { payload }) => {
            state.list = payload
            state.totals = payload.length
        }
    },

    // extraReducers 字段让 slice 处理在别处定义的 actions，
    // 包括由 createAsyncThunk 或其他 slice 生成的 actions.
    extraReducers(builder) {
        builder
            .addCase(increment, (state, { payload }) => {
                console.log(123321);
                // increment方法触发时的处理
                state.list.push(payload.value)
                state.totals = state.list.length
            })
            .addCase(getMovieData.pending, (state) => {
                console.log("🚀 ~ 进行中！")
            })
            .addCase(getMovieData.fulfilled, (state, { payload }) => {
                console.log("🚀 ~ fulfilled", payload);
                state.list = payload.data.list
                state.totals = payload.data.list.length
            })
            .addCase(getMovieData.rejected, (state, err) => {
                console.log("🚀 ~ rejected", err)
            });
    }
})
// 导出方法
export const { loadDataEnd } = movieSlice.actions;

// 默认导出
export default movieSlice.reducer;