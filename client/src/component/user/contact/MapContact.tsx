import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { Table, Row, Col, Container, Button } from "reactstrap";

class MapContact extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const mapStyles: any = {
     width: "800px",
      height: "250px",
      
    };
    return (
      <div className="d-block">
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 32.073906, lng:34.791918 }}
          style={mapStyles}
        />
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDZmTybNo8IlUDOzUXxaE7g2nryjOGc1Ms"
})(MapContact);
