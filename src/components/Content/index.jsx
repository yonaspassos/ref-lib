import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Container from "../../pages/Container/Container";
import * as S from "./styles";

const Content = () => (
  <S.Content>
    <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route path="/cards" Component={Container}></Route>
    </Routes>
  </S.Content>
);

export default Content;
