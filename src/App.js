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
        mapStyle="mapbox://styles/developersilvani/ckpykbwdm0ytz18p8q61jl5cx"
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
//* Draggable Map
// onViewportChange allows us to make the map draggable by inputting new viewport data whenever 
// user drags the map around. Otherwise, it's a static map. Causes the map to re-render since
// the state changes.
//* Styled Map
// You can change the styling of mapbox by going on mapbox.com/designer-maps or studio.mapbox.com
// Then, set mapStyle prop and pass the style url from studio.mapbox