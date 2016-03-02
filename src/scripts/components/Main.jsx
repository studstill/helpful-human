'use strict';

import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Header from './Header.jsx';
import CreateClass from './CreateClass.jsx'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CreateClass />
      </div>
    );
  }
}

export default Main
