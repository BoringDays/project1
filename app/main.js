import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './components/calculate_square.jsx';

main();

function main() {
    ReactDOM.render(<Comp />, document.getElementById('app'));
}