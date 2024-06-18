import React, { useState } from "react";

const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const reducer = (state: any, action: { type: any; payload: any }) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "getArticleStart":
      return {
        ...state,
        isLoading: true,
      };
    case "getArticleSuccess":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "getArticleFailure":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

function MainApp() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello Sello Martin {count}</h1>
      <button onClick={increaseCounter}>tick me</button>
    </div>
  );
}

export default MainApp;
