import React from 'react'
import Left from './Home/Left/Left'
import Right from './Home/right/Right'
import Logout from './Home/left1/Logout'

const App = () => {
  return (
    <div className='flex h-screen' >
      <Logout></Logout>
      <Left></Left>
      <Right></Right>
    </div>
  )
}

export default App
