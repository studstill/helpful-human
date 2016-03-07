'use strict';

 import React from 'react';

 class ToggleSwitch extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       isChecked: true
     };
   }

   toggleChecked(e) {
     console.log(e.target.checked);
     this.setState({
       isChecked: !this.state.isChecked
     });
   }

   handleFocus() {
     this.setState({
       hasFocus: 'hasFocus'
     })
   }

   handleBlur() {
     this.setState({
       hasFocus: ''
     })
   }

   render() {
     return (
       <div className={`${this.props.className || ''} form-inline form-group radio-inline toggleSwitch`}>
         {/* The format below must remain like this in order to work properly */}
         <input
           type="checkbox"
           name={this.props.id}
           id={this.props.id}
           onChange={this.toggleChecked.bind(this)}
           checked={this.state.isChecked}
           className="form-inline radio-inline"
           onFocus={this.handleFocus.bind(this)}
           onBlur={this.handleBlur.bind(this)}>
         </input>
         <label
           htmlFor={this.props.id}
           id={`${this.props.id}Label`}>
         </label>
         <span className={`${this.state.hasFocus || ''} toggleSpan`}>
           {this.props.text}
         </span>
       </div>
     )
   }
 }

 export default ToggleSwitch
