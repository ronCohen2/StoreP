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
export default function ProductCard(props: any) {
  console.log(props);
  return (
    <div>
      <Col md="3" className="productCard">
        <Card className="ProductCard rounded">
          <CardImg top width="100%" height="100%" src={props.data.image} />
          <CardTitle>{props.data.productName}</CardTitle>
          <CardSubtitle>{props.data.price}</CardSubtitle>
          <Button>Add To Cart </Button>
        </Card>
      </Col>
    </div>
  );
}
