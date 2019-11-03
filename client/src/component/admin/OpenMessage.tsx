import React, { Component } from "react";
import { connect } from "react-redux";
import { getOpenUserContactMessage } from "../../store/action/adminAction";
import { Table, Container } from "reactstrap";
import SendMail from "./SendMail";
var moment = require("moment");

class OpenMessage extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    await this.props.getMessage();
  }
  render() {
    const { message } = this.props.admin;
    return (
      <Container className="mt-4">
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Content</th>
              <th>השב </th>
            </tr>
          </thead>
          <tbody>
            {message
              ? message.map((msg: any, key: any) => {
                  return (
                    <tr>
                      <th scope="row">{key + 1}</th>
                      <td>{msg.name}</td>
                      <td>{moment(msg.date).format("lll")}</td>
                      <td>{msg.text}</td>
                      <th className="m-auto">
                        <SendMail mail={msg.email} id={msg._id} />
                      </th>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    admin: state.admin
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMessage: () => dispatch(getOpenUserContactMessage())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenMessage);
