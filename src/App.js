import React from "react";
import UseEffectFetchData from "./components/UseEffectFetchData";
import UseEffectFetchDataId from "./components/UseEffectFetchDataId";
import UseContextB from "./components/UseContextB";
import DataFetchingOne from "./components/DataFetchingOne";

const App = () => {
  return (
    <div>
      <DataFetchingOne />
      <UseContextB />
      <UseEffectFetchDataId />
      <hr />
      <UseEffectFetchData />
    </div>
  );
};

export default App;
