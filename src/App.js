import React, {useState} from 'react'
import ReactMapGl from 'react-map-gl'

function App() {
  // FIRST, we need some information on how to display the map. Then pass to ReactMap component
  const [viewport, setViewport] = useState({
    latitude: 45.4211,  // set the default lat
    longitude: -75.6903,  // set the default lon
    zoom: 10,             // how far away do you want map to be
    width: '100vw',       // width of map
    height: '100vh'       // height of map
  })

  return (
    <div className="App">
      <ReactMapGl 
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
      >
        markers here
      </ReactMapGl>
    </div>
  );
}

export default App;
// Notes
//* onViewportChange allows us to make the map draggable by inputting new viewport data whenever 
//* user drags the map around. Otherwise, it's a static map
