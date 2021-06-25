import React from 'react'
import { useSelector } from 'react-redux'

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes)
  return (
    <div>
      <hr></hr>
      <p><em>Redux with Hooks</em></p>
      <h2>Num of cakes : {numOfCakes}</h2>
      <button>Buy a cake</button>
    </div>
  )
}

export default HooksCakeContainer

