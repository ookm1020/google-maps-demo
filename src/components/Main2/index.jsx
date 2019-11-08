import React from "react";

import "./Main.css";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    var container = window.document.getElementById("map");

    var options = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    };

    new window.google.maps.Map(container, options);
  }

  render() {
    return (
      <div className="Main">
        <div id="map"></div>
      </div>
    );
  }
}

export default MainComponent;
