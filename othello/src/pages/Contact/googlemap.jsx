import React, { useState, useRef } from 'react'
import GoogleMap from 'google-maps-react-markers'
import '../../App.css'
import PropTypes from 'prop-types'

function AnyReactComponent({ text }) {
  return <div className="marker">{text}</div>
}

export default function GMap() {
  const mapRef = useRef(null)
  const [mapReady, setMapReady] = useState(false)

  const onGoogleApiLoaded = ({ map }) => {
    mapRef.current = map
    setMapReady(true)
  }

  return (
    <div>
      {mapReady && <div>Map is ready. See for logs in developer console.</div>}
      <GoogleMap
        // apiKey="AIzaSyDU5Xiy_BPZ0hYlx6U663gOGbAtcl4S_" // 2Q
        defaultCenter={{ lat: 53.563999531581786, lng: -0.08794536619049058 }}
        defaultZoom={18}
        mapMinHeight="200px"
        mapMaxWidth="400px"
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChange={map => console.log('Map moved', map)}
        style={{ height: '600px', width: '100%' }}
      >
        <AnyReactComponent
          lat={53.563999531581786}
          lng={-0.08794536619049058}
          text=""
        />
      </GoogleMap>
    </div>
  )
}

AnyReactComponent.propTypes = {
  text: PropTypes.string.isRequired
}
