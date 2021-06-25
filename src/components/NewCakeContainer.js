import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <hr></hr>
      <p><em>New Cakes container (with Action payload)</em></p>
      <h2>Number of cakes : {props.numOfCakes}</h2>
      <input 
        type="text"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button
        onClick={() => props.buyCake(number)}
      >
        Click to buy those cakes
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: (number) => dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(NewCakeContainer)
