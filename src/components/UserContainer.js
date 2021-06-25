/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'


function UserContainer( { fetchUsers } ) { // props destructured == props.fetchUsers
  useEffect(
    () => { fetchUsers()}
  , []) // empty dependencies array so that fetchUsers is dispatched only once
  return (
    <div>
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(UserContainer)
