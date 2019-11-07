import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import "./Main.css";

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ width: `400px`, height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 36.480331, lng: 127.289089 }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 36.480331, lng: 127.289089 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMarkerShown: false
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  render() {
    return (
      <div className="Main">
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
      </div>
    );
  }
}

export default Main;
