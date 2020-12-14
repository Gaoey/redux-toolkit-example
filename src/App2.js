import React from 'react'
import { useSelector } from 'react-redux'

export default function App2() {
  const counterState = useSelector(state => state.counter)
  return (
    <div>
      {counterState}
    </div>
  )
}
