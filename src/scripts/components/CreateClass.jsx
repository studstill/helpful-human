'use strict';

 import React from 'react';
 import ToggleSwitch from './ToggleSwitch.jsx'
 import CancelModal from './CancelModal.jsx'
 import RadioButton from './RadioButton.jsx'

 class CreateClass extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       selectedValue: "Daily"
     };
   }

   handleRadioButton(e) {
     console.log(e.target);
     this.setState({
       selectedValue: e.target.name
     });
   }

   render() {
     return (
       <div>
         <form className="hhClassForm container-fluid">
             <div className="container-fluid form-horizontal" aria-label="...">
               <h2 className="form-row">Class Name</h2>
               <input required className="form-row" id="classNameInput" name="className" placeholder="Hello World" autoFocus="true"></input>
                <div className="form-inline recurrenceButtons radio-inline">
                  {/* Import RadioButton components below */}
                  <RadioButton id="radioButtonDaily" label="Daily" selectedValue={this.state.selectedValue} handleChange={this.handleRadioButton.bind(this)}/>
                  <RadioButton id="radioButtonWeekly" label="Weekly" selectedValue={this.state.selectedValue} handleChange={this.handleRadioButton.bind(this)}/>
                  <RadioButton id="radioButtonMonthly" label="Monthly" selectedValue={this.state.selectedValue} handleChange={this.handleRadioButton.bind(this)}/>
                </div>
                <div className="form-inline form-group">
                  {/* Import ToggleSwitch component below */}
                  <ToggleSwitch id="toggleSwitchPrivate" label="Private" text="Make this class private" className="pull-left"/>
                  <input required type="text" name="roomLocation" placeholder="Room Location" className="pull-right"/>
                </div>
                <div className="form-inline form-group">
                  <input required type="text" name="classType" placeholder="Class Type" className="pull-left"/>
                  <input required type="number" name="maximumAge" placeholder="Maximum Age" className="pull-right"/>
               </div>
               <div className="form-inline form-group">
                 <input required type="number" name="minimumAge" pattern="\d*"  placeholder="Minimum Age" className="pull-left"/>
                 <input required type="number" name="maxClassSize" placeholder="Max Class Size" className="pull-right"/>
               </div>
               <div className="form-inline descriptionSection">
                 <span className="descriptionSpan">Description</span><br />
                 <textarea required name="descriptTextArea" rows="6"></textarea>
               </div>
             </div>
           <div className="submitButtons text-center">
             {/* Modal currently implemented, but keeping the code for use later
               <button type="button" className="btn btn-cancel" data-toggle="modal" data-target="#cancelModal">Cancel</button>*/}
             <a href="/"><button type="button" className="btn btn-cancel">Cancel</button></a>
             <button type='submit' className="btn btn-confirm">Next Step</button>
           </div>
         </form>
         <CancelModal />
       </div>
     )
   }
 }

 export default CreateClass
