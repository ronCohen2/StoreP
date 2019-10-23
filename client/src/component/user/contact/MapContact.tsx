import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContact extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Map
          google={this.props.google}
          zoom={8}
          // initialCenter={{ lat: 47.444, lng: -122.176 }}
          // style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDZmTybNo8IlUDOzUXxaE7g2nryjOGc1Ms"
})(MapContact);
