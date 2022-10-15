import React from "react";
import "./App.css";
import Heading from "./component/ui/heading";
import Button from "./component/common/button";
import RangeList from "./component/ui/rangeList";

const App = () => {
  return (
    <div>
      <Heading />
        <RangeList/>
      <Button />
    </div>
  );
};

export default App;
