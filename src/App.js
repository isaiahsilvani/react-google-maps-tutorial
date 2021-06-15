import React, {useState} from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import * as parkData from './data/skateboard-parks.json'

function App() {
  // FIRST, we need some information on how to display the map. Then pass to ReactMap component
  const [viewport, setViewport] = useState({
    latitude: 45.4211,  // set the default lat
    longitude: -75.6903,  // set the default lon
    zoom: 10,             // default zoom level
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
        {parkData.features.map((park) => (
          <Marker 
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button>YOLO</button>
          </Marker>
        ))}
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
//* Markers
// To use markets, first import from react-map-gl. Then import the data set. Lastly, map over them 
// within the <Marker/> component. You must set a key (duh) and also specify the lon. and lat. of
// the marker by using the dataset