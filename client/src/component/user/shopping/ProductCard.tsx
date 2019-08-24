import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";
import { Route, Redirect, withRouter } from "react-router";

const ProductCard = withRouter((props: any) => {
  const { history }: any = props;
  return (
    <div>
      <Col md="3" className="productCard2 ">
        <Card
          className="productCard2 rounded"
          onClick={() => {
            history.push(`/itemDetails/${props.data._id}`);
          }}
        >
          <CardImg top width="100%" height="100%" src={props.data.image} />
          <CardTitle>{props.data.productName}</CardTitle>
          <CardSubtitle>{props.data.price}</CardSubtitle>
          <Button>Add To Cart </Button>
        </Card>
      </Col>
    </div>
  );
});
export default ProductCard;
