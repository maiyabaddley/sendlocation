import React from 'react'
import logo from './logo.svg'
import Pusher from 'pusher'
import './App.css'

var pusher = new Pusher({
  appId: '974821',
  key: '7c9c3c1e2518fe3ab82b',
  secret: '88a52e2c6545ff746078',
  cluster: 'us3',
  encrypted: true,
})

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

    pusher.trigger('location', 'latlng', {
      message: crd,
    })
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
