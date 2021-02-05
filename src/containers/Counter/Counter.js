import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={this.props.onAddValueToCounter}
        />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractValueOfCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map((str) => (
            <li onClick={() => this.props.onDeleteResult(str.id)} key={str.id}>
              {str.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actions.increment()),
    onDecrementCounter: () => dispatch(actions.decrement()),
    onAddValueToCounter: () => dispatch(actions.add(5)),
    onSubtractValueOfCounter: () => dispatch(actions.subtract(5)),
    onStoreResult: (result) => dispatch(actions.storeResults(result)),
    onDeleteResult: (id) => dispatch(actions.deleteResults(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
