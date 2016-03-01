import React from 'react';
import ReactDOM from 'react-dom';

//ES6 component classes must now extend React.Component in order to enable stateless function components.
class Hello extends React.Component {
    constructor(props) {
        //create 'this'. This is ought to write in ES6 constructor first.
        super(props);//继承父组件的props

        //use such code to replace setInitialState
        this.state = {
            text: '',
            result: ''
        };
    }

    square() {
        console.log(this);
        var val = this.refs.inputText.value;//React 0.14开始，不用this.refs.input.getDOMNode()获取元素本身，请忘掉这货
        this.setState({
            result: val * val
        });
    }

    render() {
        //注意this.square.bind(this)，没有写成this.square()
        return (
            <div>
                <h1>Return square</h1>
                <input type="text" ref="inputText" placeholder="please input a number!"
                       onChange={ this.square.bind(this) }/>
                <span>{this.state.result}</span>
            </div>
        )
    }
}
export default Hello;