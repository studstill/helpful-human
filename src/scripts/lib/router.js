import React from 'react';
import CreateClass from '../components/CreateClass.jsx';

// Handle Routing
let handleRoutes = (MainComponent, actions, route, state) => {
  switch (MainComponent.state.activeComponent) {
    case 'CreateClass':
    route.view = <CreateClass />;
    break;
    default:
    route.view = <CreateClass />;
  }
}

export default handleRoutes;
