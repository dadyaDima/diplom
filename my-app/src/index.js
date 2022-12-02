import React from 'react'
import ReactDOM from 'react-dom/client'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

const Elem = (props) => {
    return <h1>Hello world, my name is {props.title}  !!!</h1>
}

// old
// reactDom.render(elem, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <Elem title='Dmitriy'/> )
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>
