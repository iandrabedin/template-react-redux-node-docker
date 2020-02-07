import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { exampleAction } from "../../actions";

const Homepage = props => {
  const { example, exampleAction } = props;

  return (
    <div>
      <h1>{example?.title}</h1>
      <button onClick={exampleAction}>click</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    example: state.exampleReducer
  };
};

const mapDispatchToProps = dispatch => ({
  exampleAction: () => dispatch(exampleAction())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Homepage)
);
