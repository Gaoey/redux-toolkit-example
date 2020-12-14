import { createSlice } from '@reduxjs/toolkit'

// action + reducer
const slice =  createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
})
// loading, failure, success

export default slice