import React, {useState} from 'react'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import * as parkData from './data/skateboard-parks.json'
import markerImg from './marker.png'
import styled from '@emotion/styled'

const MarkerImg = styled.img`
  width: 50px;
  height: 50px;
  &:hover{
    cursor: help;
  }
`

function App() {
  // FIRST, we need some information on how to display the map. Then pass to ReactMap component
  const [viewport, setViewport] = useState({
    latitude: 45.4211,  // set the default lat
    longitude: -75.6903,  // set the default lon
    zoom: 10,             // default zoom level
    width: '100vw',       // width of map
    height: '100vh'       // height of map
  })
  // This is state that will keep track of which park you picked
  const [selectedPark, setSelectedPark] = useState(null)

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
            <MarkerImg src={markerImg} alt="marker" onClick={(e) => {
              e.preventDefault()
              setSelectedPark(park)
            }}/>

          </Marker>
        ))}

        {selectedPark ? (
          <Popup 
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null)
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
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
//* Map over Map Data
//  Map over the map data in data folder. Doiii
//* Marker Buttons
// Couldn't you just do an onclick function to begin with?
//* Set Market Data in State
// Honestly, this is kind of self explainatory but it's good to
// take note of this process for reference
//* Popups
// What's the point of markers if we can't do anything with it?? When someone clicks a marker, they should get a popup 
// with the information about the park being displayed. Import Popup from the mapbox library, set a ternary expression
// for when there is data present in state hook, and display the data within the Popup by using the state information
//* Closing Popups
// There is an X that is automatically displayed within the popup, but it doesn't close the popup. We need to specify that.