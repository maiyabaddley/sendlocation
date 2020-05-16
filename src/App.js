import React from 'react'
import logo from './logo.svg'
import Pusher from 'pusher'
import './App.css'

var pusher = new Pusher({
  appId: '1001976',
  key: 'c89ddfcb850d146a202a',
  secret: 'b4dc6883981a88f0f09a',
  cluster: 'us3',
  encrypted: true,
})

function App() {
  var options = {
    enableHighAccuracy: true,
    timeout: 50000,
    maximumAge: 0,
  }

  function success(pos) {
    var crd = pos.coords

    console.log('Your current position is:')
    console.log(`Latitude : ${crd.latitude}`)
    console.log(`Longitude: ${crd.longitude}`)
    console.log(`More or less ${crd.accuracy} meters.`)

    fetch(
      `https://send-location.wl.r.appspot.com/pushlocation?lat=${crd.latitude}&lng=${crd.longitude}`,
    )
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
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
