'use strict';

 import React from 'react';

 class Header extends React.Component {
   constructor(props) {
     super(props);
     this.state = {};
   }

   render() {
     return (
       <div>
         <nav className="navbar navbar-default" role="navigation">
           <div className="navbar-header pull-left">
             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
               <span className="sr-only">Toggle navigation</span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
             </button>
           </div>
           <h1><a href="/">Create a Class</a></h1>
           <div className="collapse navbar-collapse" id="navbar-collapse-1">
             <ul className="nav navbar-nav nav-tabs">
               <li>
                 <a href="/" className="active">
                   <span>Details</span>
                   <span>{`>`}</span>
                 </a>
               </li>
               <li>
                 <a href="/">
                   <span>Schedule</span>
                   <span>{`>`}</span>
                 </a>
               </li>
               <li>
                 <a href="/">
                   <span>Payment</span>
                   <span>{`>`}</span>
                 </a>
               </li>
               <li>
                 <a href="/">
                   <span>Confirm</span>
                 </a>
               </li>
             </ul>
           </div>
         </nav>
       </div>
     )
   }
 }

 export default Header
