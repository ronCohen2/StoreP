import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { withRouter } from "react-router";

function ProductCard(props: any) {
  return (
    <>
      <Card
        className="ProductCard rounded"
        onClick={() => {
          props.history.push(`/itemDetails/${props.id}`);
        }}
      >
        <CardImg top width="100%" height="100%" src={props.img} />
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>{props.price}</CardSubtitle>
      </Card>
    </>
  );
}
export default withRouter(ProductCard);
