import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './counterStore'
// import counterReducer2 from './counterStore2'
import slice from './counterStore3'

export default configureStore({
  reducer: {
    counter: slice.reducer
  }
})