import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter } from 'react-router-dom'
import {Auth0Provider} from '@auth0/auth0-react'
import Context from './Context.jsx'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain='dev-li2cy0rqyvy5naod.us.auth0.com'
        clientId='ehXbv725Pfbcfne1DF8OByXl35jWPVeX'
        redirecturi={window.location.origin}
      > 
       <Context>
        <App />
        </Context>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
)