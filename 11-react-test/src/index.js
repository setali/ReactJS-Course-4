import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Counter from './Counter'
import Todos from './Todos'
import Post from './Post'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Todos /> */}
    <Post />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
