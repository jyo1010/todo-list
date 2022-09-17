import React, {useState} from 'react'
import List from '../Util/List'

const bodyContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor:'#80558C',
    padding: '10px',
}

const todoListContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'pink',
    borderRadius: '5px',
    width: '600px',
    boxShadow: '0 0 10px 0 rgba(255,255,255,.5',
}
const headingStyle={
    color:'#80558C',
}

function App() {
  return (
    <div style={bodyContainer}>
        <div style={todoListContainer}>
            <h1 style={headingStyle}> Todo  List </h1>

            {/* LIST */}
            <List/>
        </div>
    </div>
  )
}

export default App