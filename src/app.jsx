'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Got Here!</h1>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById(`app`));
