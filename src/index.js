import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import Api from "./Api";

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <h1>Hello, React!</h1>
//             </div>
//         )
//     }
// }

ReactDOM.render(<Api />, document.getElementById('root'))