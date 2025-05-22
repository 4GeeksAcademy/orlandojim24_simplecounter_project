import React from 'react'
import ReactDOM from 'react-dom/client'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import '../styles/index.css'

import { SecCounter } from './components/SecCounter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SecCounter />
)