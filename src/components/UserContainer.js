/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'


function UserContainer( { userData, fetchUsers } ) { // props destructured == props.fetchUsers
  useEffect(
    () => { fetchUsers()}
  , []) // empty dependencies array so that fetchUsers is dispatched only once
  return userData.loading ? (
      <div>
        <hr></hr>
        <p><em>Async - request</em></p>
        <h2>loading data from api .......</h2>
      </div>
    ) : userData.error ? (
      <h2>{userData.error}</h2>
    ) : (
      <div>
        <hr></hr>
        <p><em>Async - success</em></p>
        <h2>Users list</h2>
        <ul>
          {
            userData &&
            userData.users &&
            userData.users.map(user => <li>{user.name}</li>)
          }
        </ul>
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
