import React from "react";
import { connect } from "react-redux";
import { IncAction } from "./actions";
import { DecAction } from "./actions";

const App = ({ local_variable, IncAction, DecAction }) => {
  return (
    <div>
      <center>
        <h1>{local_variable}</h1>
        <button onClick={() => IncAction(2)}>Increment</button>
        <button onClick={() => DecAction(2)}>Decrement</button>
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  local_variable: state,
});

export default connect(mapStateToProps, { IncAction, DecAction })(App);
