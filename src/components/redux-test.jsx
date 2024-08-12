// 引入相关的hooks
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// 引入对应的方法
import { increment, decrement } from '../store/features/counter-slice'
import { getMovieData } from '../store/features/movie-slice'


export default function ReduxTest() {
    // 变量
    const [amount, setAmount] = useState(1)
    // 通过 useSelector 直接闹到store中定义的value
    const { value } = useSelector((store) => store.counter)
    // 通过 useSelector 直接闹到store中定义的list
    const { list } = useSelector((store) => store.movie)

    // 通过useDispatch 派发事件
    const dispatch = useDispatch()
    return (
        <div>
            {/* {页面中应用的代码} */}
            <p>{value}</p>
            <input type="text" value={amount} onChange={(e) => setAmount(+e.target.value)} />
            <button onClick={() => dispatch(increment({ value: amount }))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            <button onClick={() => dispatch(getMovieData())}>获取数据</button>
            <ul>
                {
                    list.map(item => <li key={item.tvId}>{item.name}</li>)
                }
            </ul>
        </div>
    )
}