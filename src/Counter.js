import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementCounter, incrementCounter } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter)
  const user = useSelector((state) => state.user)

  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementCounter())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementCounter())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)