import React from 'react'
// import { buyCake } from '../redux/cake/cakeActions'
import { buyCake } from '../redux'


function CakeContainer() {
  return (
    <div>
      <h2>Number of Cakes</h2>
      <button>By a Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default CakeContainer
