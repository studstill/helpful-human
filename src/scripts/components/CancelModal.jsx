'use strict';

import React from 'react';

class CancelModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="cancelModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="gridSystemModalLabel">Discard Changes?</h4>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default btn-sm">Go Back</button>
                <button type="button" className="btn btn-primary warning-button">Discard Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default CancelModal
