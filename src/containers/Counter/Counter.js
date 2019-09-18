import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionsCreators from '../../store/actions/index'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
            break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={ this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={()=> this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.StoreResults.map(StoreResult => {
                            return <li key={StoreResult.id} onClick={()=> this.props.onDeleteResult(StoreResult.id)}>{StoreResult.value}</li>
                        })
                    }

                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
return {
    ctr: state.ctr.counter,
    StoreResults: state.res.results
 }
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => {dispatch(actionsCreators.increment())},
        onDecrementCounter: () => dispatch(actionsCreators.decrement()),
        onAddCounter: () => dispatch(actionsCreators.add()),
        onSubtractCounter: () => dispatch(actionsCreators.subtract()),
        onStoreResult: (count) => dispatch(actionsCreators.storeResult(count)),
        onDeleteResult: (id) => dispatch(actionsCreators.deleteResult(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);