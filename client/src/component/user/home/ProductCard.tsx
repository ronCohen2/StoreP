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
export default function ProductCard(props: any) {
  return (
    <div>
      <Card className="ProductCard rounded">
        <CardImg top width="100%" height="100%" src={props.img} />
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>{props.price}</CardSubtitle>
      </Card>
    </div>
  );
}
