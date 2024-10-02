// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider } from "react-router-dom"
import './App.css'
import router from './router'
// import Layout from './Layout'

function App() {
  return (<RouterProvider router={router} />);
}
export default App

//Old WS instrucs for func App
 // <div id="container">
    //   <div id="navbar">{/* navigation here */}</div>
    //   <div id="main-section">
    //   <Provider store={store}>
    //     <RouterProvider router={router} />
    //   </Provider>
    //   </div>
    // </div>