import React, { useState, useEffect } from 'react'
import Table from './components/Table.js'
import { fetchData, login } from './utils/fetch.js'

import "./tailwind.css"

function App() {

  const buttonStyle = 'bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mr-2'

  const [user, setUser] = useState(null)
  const [personData, setPersonData] = useState([])

  useEffect(() => {
    fetchData().then(data => setPersonData(data))
  }, [user])

  const handleLogin = () => {
    let userId = 1
    login(userId).then(res => {
      setUser(res)
    })
  }

  const handleLogout = () => {
    setUser(null)
  }

  const handleLoad = () => {

  }

  const handleSave = () => {

  }

  const updateSettings = e => {

  }

  return (
    <div className='App'>
      { user 
      ? (<div className='m-8'>
        <div className='mb-2'>Hi, { user.name }!</div>
            <button className={ buttonStyle } onClick={ handleSave }>Save</button>
            <button className={ buttonStyle } onClick={ handleLoad }>Load</button>
            <button className={ buttonStyle } onClick={ handleLogout }>Log out</button>
        </div>) 
      : (<div className='m-8'>
            <button className={ buttonStyle } onClick={ handleLogin }>Log in</button>
        </div>)}
      <Table 
        data={ personData } 
        updateSettings={ updateSettings } 
        tableSettings={ user ? user.tableSettings : { sortBy: null, colOrder: [1,2,3,4,5,6,7,8] } }/>
    </div>
  )
}

export default App
