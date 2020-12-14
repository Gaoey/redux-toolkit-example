import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('INCREMENT') // { type: INCREMENT }
export const decrement = createAction('DECREMENT') // { type: DECREMENT }

const reducer = createReducer(0, {
  [increment.type]: state => state + 1,
  [decrement.type]: state => state - 1
})

export default reducer