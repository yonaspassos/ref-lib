import React from "react";

import { Col, Image, Row } from "react-bootstrap";
import { CardStyled } from "./styles";

const CardComponent = (props) => {
  return (
    <CardStyled border="info" color={props.color}>
      <Row>
        <Col>
          <Image
            src="https://gravatar.com/avatar/839fc75aa098f26cbe18a4bf0979cf32?s=50&d=identicon&r=x"
            roundedCircle
          />
        </Col>
        <Col>{props.title}</Col>
      </Row>
      <Row className="mt-2">
        <Col>{props.text}</Col>
      </Row>
    </CardStyled>
  );
};

export default CardComponent;
