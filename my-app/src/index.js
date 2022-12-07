import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

import Counter from './counter'


const App = (props) => {
    return  <Counter />
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <App /> )
