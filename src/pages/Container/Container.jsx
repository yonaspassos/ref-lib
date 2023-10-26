import React, { useContext } from "react";
import CardComponent from "../../components/Card";
import { AppContext } from "../../Data/Store";

const Container = () => {
  const { title, text, color } = useContext(AppContext);
  return (
    <div className="container">
      <CardComponent color={color} title={title} text={text} />
    </div>
  );
};

export default Container;
