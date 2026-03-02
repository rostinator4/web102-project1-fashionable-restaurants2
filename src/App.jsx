import { useState } from 'react'
import './App.css'
import RestaurantTable from './components/RestaurantTable'

function App() {
  return (
    <>
      <div className='App'>
          <h1>Fashionable Restaurants at Chicago</h1>
          <RestaurantTable/>
      </div>
    </>
  )
}

export default App
