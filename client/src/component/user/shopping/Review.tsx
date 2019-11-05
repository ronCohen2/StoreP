import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import { connect } from "react-redux";
import { getProductReview } from "../../../store/action/productAction";
import AddReviewC from "./AddReview";
import Pagination from "./Pagination";
import avatar from "../../../assistance/img/avatar.png";

const moment = require("moment");

class Review extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentPage: 1,
      ReviewPerPage: 3
    };
  }
  async componentWillMount() {
    await this.props.getProductReview(this.props.id);
    console.log(this.props.review);
  }
  async componentWillReceiveProps(nextProps: any) {
    if (this.props.id !== nextProps.id) {
      await this.props.getProductReview(nextProps.id);
    }
  }
  setCurrentPage = (page: Number) => {
    this.setState({
      currentPage: page
    });
  };
  render() {
    const { review } = this.props;
    if (review) {
      const { ReviewPerPage, currentPage }: any = this.state;
      const indexOfLastPost = currentPage * ReviewPerPage;
      const indexOfFirstPost = indexOfLastPost - ReviewPerPage;
      var currentPosts = review.slice(indexOfFirstPost, indexOfLastPost);
    }
    const { userConnected } = this.props.auth;
    const paginate = (pageNumber: Number) => this.setCurrentPage(pageNumber);

    return (
      <Container className="border mt-4">
        {currentPosts
          ? currentPosts.map((rev: any, key: Number) => {
              return (
                <Media className="border m-2">
                  <Media left>
                    <Media
                      object
                      className="MediaImage m-2"
                      src={avatar}
                      alt="Generic placeholder image"
                    />
                  </Media>
                  <Media body>
                    <Media className="to-right">
                      {
                        <img
                          className="imgRate"
                          src={require(`../../../assistance/img/star${rev.stars}.JPG`)}
                        />
                      }
                    </Media>
                    <p className="mt-3 mr-3">{rev.content}</p>
                    <div className="ReviewDate mt-4 mr-3">
                      {moment(rev.data).format("MMMM Do YYYY, h:mm:ss a")}
                    </div>
                  </Media>
                </Media>
              );
            })
          : null}
        {userConnected ? <AddReviewC id={this.props.id} /> : null}

        <Pagination
          postsPerPage={this.state.ReviewPerPage}
          totalPosts={review ? review.length - 1 : null}
          paginate={paginate}
        />
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    review: state.product.review,
    auth: state.auth
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getProductReview: (id: String) => dispatch(getProductReview(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Review);
