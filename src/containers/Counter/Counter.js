import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from '../../store/actions';
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
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.storedResults.map(str => 
            <li onClick={() => this.props.onDeleteResult(str.id)} key={str.id}>{str.value}</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: actionType.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionType.DECREMENT}),
        onAddValueToCounter: () => dispatch({type: actionType.ADD, value: 5}),
        onSubtractValueOfCounter: () => dispatch({type: actionType.SUBTRACT, value: 5}),
        onStoreResult: result => dispatch({type: actionType.STORE_RESULT, result: result}),
        onDeleteResult: id => dispatch({type: actionType.DELETE_RESULT, id: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
