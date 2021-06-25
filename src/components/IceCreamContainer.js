import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'


function IceCreamContainer(props) {
  return (
    <div>
      <hr></hr>
      <p><em>Ice-creams component</em></p>
      <h2>Number of ice-creams : {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>By an ice-cream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps,
   mapDispatchToProps
   )(IceCreamContainer)
