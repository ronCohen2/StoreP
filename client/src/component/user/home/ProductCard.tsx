import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router";

const ProductCard: React.SFC<P & RouteComponentProps> = props => {
  const { price, img, id, name } = props;
  return (
    <>
      <Card
        className="ProductCard "
        onClick={() => {
          props.history.push(`/itemDetails/${id}`);
        }}
      >
        <CardImg
          className="ImageProductHome"
          top
          width="100%"
          height="100%"
          src={require(`../../../../../public/image/${img}`)}
        />
        <CardTitle className="to-center">{name}</CardTitle>
      </Card>
    </>
  );
};
export default withRouter(ProductCard);

interface P {
  id: String;
  img: String;
  name: String;
  history: any;
  price: Number;
}
