import React, { Component } from "react";
class Filter extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="form-group">
          <label for="formControlRange">Example Range input</label>
          <input
            type="range"
            class="form-control-range"
            id="formControlRange"
          />
        </div>
      </div>
    );
  }
}

export default Filter;
