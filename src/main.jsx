import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
//INICIO PAYPAL
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
//TÉRMINO PAYPAL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PayPalScriptProvider options={{"client-id" : "AfVQ_YqhBHaz1LdBFZ3JNZ2jJN1CsDC54WfwRbsXUdIBsb_XHBUsuiqAm47_SvMB5mKc2QSVmeTFcg4e"}}>
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
);
