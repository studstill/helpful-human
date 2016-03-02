'use strict';

 import React from 'react';

 class CreateClass extends React.Component {
   constructor(props) {
     super(props);
     this.state = {};
   }

   render() {
     return (
       <div>
         <form>
           <input type='button' value="submit me"></input>
         </form>
       </div>
     )
   }
 }

 export default CreateClass
