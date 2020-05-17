import React from "react"
import {Map, GoogleApiWrapper} from "google-maps-react"
import {InfoWindow, Marker} from "google-maps-react"
import CurrentLocation from "./Location1"
import Marker2 from "./Marker2"




const mapStyles = {
    width:"100%",
    height: "100%"
}



export class Location extends React.Component {
    constructor(){
        super()
        this.state={
            showingInfoWindow: false, // hides window 
            activeMarker: {}, // show marker when you click 
            selectedPlace: {} //shows window to selected place when marker works 
        }
    }
    onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true  //activates the state when it's clicked 
  });

onClose = props => {  // closes the window after the user clicks 
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};





    render() {
        
      
        return <CurrentLocation
      
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Current Location"}
        />
            <Marker2
            lat={24}
            lng={110}
            name="My Marker"
            color="blue"
          /> 
             <Marker2
            lat={18}
            lng={120}
            name="My Marker"
            color="blue"
          /> 
                    
           
                
              <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
              
              <div>
               
            <h4>{this.state.selectedPlace.name}</h4>
      
          </div>
        </InfoWindow>
        </CurrentLocation>

    }
}

export default GoogleApiWrapper({apiKey: "AIzaSyAZg7MZ9kwk47HDaNATzBIsceXCAl4gBKc"})(Location);

      
    
    
    














  

    
    
    
    
    
    