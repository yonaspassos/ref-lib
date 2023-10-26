/* eslint-disable react/prop-types */
import React, { useState } from "react";

const initialState = {
  title: "",
  text: "",
  color: "#563d7c",
};

export const AppContext = React.createContext(initialState);

const Store = (props) => {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState((current) => ({
      ...current,
      [key]: value,
    }));
  }

  return (
    <AppContext.Provider
      value={{
        title: state.title,
        setTitle: (t) => updateState("title", t),
        text: state.text,
        setText: (t) => updateState("text", t),
        color: state.color,
        setColor: (t) => updateState("color", t),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
