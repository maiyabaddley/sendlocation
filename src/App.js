import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  function success(pos) {
    var crd = pos.coords

    console.log('Your current position is:')
    console.log(`Latitude : ${crd.latitude}`)
    console.log(`Longitude: ${crd.longitude}`)
    console.log(`More or less ${crd.accuracy} meters.`)
    alert(`Lat: ${crd.latitude} Lng: ${crd.longitude}`)
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
    alert(`ERROR(${err.code}): ${err.message}`)
  }
  function getLocation() {
    navigator.geolocation.getCurrentPosition(success, error, options)
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getLocation}>Send My Location</button>
      </header>
    </div>
  )
}

export default App
