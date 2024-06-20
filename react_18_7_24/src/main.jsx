import React from 'react'
import ReactDOM from 'react-dom/client'
import BgChanger from './Componets/BgChanger.jsx'
import './index.css';
function MyApp() {
  return (

    <h1>i am CustomReact</h1>
  )
}
const anotherUser = "i am Learn to React in depth"
const reactElement = React.createElement(
  'a',
  { href: "https://google.com", target: "_blank" },
  'Click me to visit',
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <App/>
  <BgChanger />
)
