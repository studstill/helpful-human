'use strict';

 import React from 'react';

 class RadioButton extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       isChecked: true
     };
   }

   toggleChecked(e) {
     this.setState({
       isChecked: !this.state.isChecked,
       hasFocus: ''
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
       <div className={`${this.props.className || ''} form-group radio-inline classOccurance`}>
         {/* The format below must remain like this in order to work properly */}
         <input
           type="checkbox"
           name={this.props.label}
           id={this.props.id}
           onFocus={this.handleFocus.bind(this)}
           onBlur={this.handleBlur.bind(this)}
           onChange={this.props.handleChange}
           checked={this.props.label == this.props.selectedValue}>
         </input>
         <label htmlFor={this.props.id} id={`${this.props.id}Label`}></label>
         <span className={`${this.state.hasFocus || ''} radioSpan`}>{this.props.label}</span>
       </div>
     )
   }
 }

 export default RadioButton

 // <input type="checkbox" name="toggle" id="toggle" onChange={this.toggleChecked.bind(this)} checked={this.state.isChecked}></input>
 // <label htmlFor="toggle" id="toggleLabel"></label>
