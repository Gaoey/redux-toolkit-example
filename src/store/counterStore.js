// create actions (increment, decrement)
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export function increment() {
  return { type: INCREMENT }
}

export function decrement() {
  return { type: DECREMENT }
}

// create reducer
function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default reducer