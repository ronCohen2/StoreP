import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class QuantintyModal extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState: any) => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <button className="DetailsButton" onClick={this.toggle}>
          Add To Cart
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader>{this.props.name}</ModalHeader>
          <ModalBody>
            <label className="mr-4">Quantinty :</label>
            <input type="number" min="1" step="1" placeholder="1" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default QuantintyModal;
