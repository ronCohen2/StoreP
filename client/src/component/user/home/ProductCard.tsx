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
        className="ProductCard "
        onClick={() => {
          props.history.push(`/itemDetails/${props.id}`);
        }}
      >
        <CardImg
          className="ImageProductHome"
          top
          width="100%"
          height="100%"
          src={require(`../../../../../public/image/${props.img}`)}
        />
        <CardTitle className="to-center">{props.name}</CardTitle>
      </Card>
    </>
  );
}
export default withRouter(ProductCard);
