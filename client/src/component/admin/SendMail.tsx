/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Container,
  Input,
  Form,
  FormGroup,
  Alert,
  Spinner
} from "reactstrap";
import { connect } from "react-redux";
import {
  SendEmailMessage,
  ChangeStatusMessage
} from "../../store/action/adminAction";

class ModalExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
      spineer: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState((prevState: any) => ({
      modal: !prevState.modal
    }));
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = async (e: any) => {
    const { subject, text } = this.state;
    const { mail, id } = this.props;
    e.preventDefault();
    this.setState({ spineer: true });
    await this.props.sendMail(mail, subject, text);
    if (this.props.admin.mailSuccess) {
      await this.props.ChangeStatusMessage(id);
      await this.toggle();
    }
    this.setState({ spineer: false });
  };
  render() {
    const { mail } = this.props;
    const { spineer } = this.state;
    return (
      <Container>
        <Button color="danger" onClick={this.toggle}>
          <i className="fas fa-paper-plane"></i>{" "}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <Form onSubmit={this.handleSubmit}>
            <ModalHeader>Send E-mail</ModalHeader>
            <ModalBody>
              <div>
                <Label>Email :{mail}</Label>
              </div>
              <div className="mt-3 mb-3">
                <Label>Subject</Label>
                <Input onChange={this.handleChange} id="subject" required />
              </div>
              <FormGroup>
                <Label for="exampleText">Content</Label>
                <Input
                  type="textarea"
                  id="text"
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              {spineer ? (
                <div className="to-center">
                  <Spinner color="dark" />
                </div>
              ) : null}
              {this.props.admin.mailSuccess === false ? (
                <Alert color="danger">Erorr at send e-mail.</Alert>
              ) : null}
            </ModalBody>
            <ModalFooter>
              <Button color="success" type="submit">
                Send
              </Button>
              <Button color="danger" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    admin: state.admin,
    auth: state.auth
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    sendMail: (mail: String, subject: any, text: any) =>
      dispatch(SendEmailMessage(mail, subject, text)),
    ChangeStatusMessage: (id: String) => dispatch(ChangeStatusMessage(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalExample);
