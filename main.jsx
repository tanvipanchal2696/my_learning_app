import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';//task-1
import MultiplePageApp from './MultiplePageApp';//task-2
import NavigationApp from './NavigationApp';//task-3
import AxiosApp from './AxiosApp';//TASK-4
import UseFatchApp from './UseFatchApp';//task-5
import CardApp from './card';//task-6
import ConfigApp from './configApp';//task-7
import DeploymentApp from './DeploymentApp';
import "./DeploymentStyle.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DeploymentApp />
    </BrowserRouter>
  </React.StrictMode>
);