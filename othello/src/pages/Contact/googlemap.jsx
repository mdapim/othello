import React from 'react';
import GoogleMap from 'google-maps-react-markers';
import { useState, useRef } from 'react';
import '../../App.css';

export default function GMap() {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  const onGoogleApiLoaded = ({ map, maps }) => {
    mapRef.current = map;
    setMapReady(true);
  };

  const AnyReactComponent = ({ text }) => <div className='marker'>{text}</div>;

  return (
    <div>
      {mapReady && <div>Map is ready. See for logs in developer console.</div>}
      <GoogleMap
        apiKey=''
        defaultCenter={{ lat: 53.563999531581786, lng: -0.08794536619049058 }}
        defaultZoom={18}
        mapMinHeight='200px'
        mapMaxWidth='400px'
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChange={(map) => console.log('Map moved', map)}
        style={{ height: '600px', width: '100%' }}
      >
        <AnyReactComponent
          lat={53.563999531581786}
          lng={-0.08794536619049058}
          text=''
        />
      </GoogleMap>
    </div>
  );
}
