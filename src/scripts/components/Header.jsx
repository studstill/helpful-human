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
           <div className="container">
             <div className="navbar-header">
               <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                 <span className="sr-only">Toggle navigation</span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
               </button>
               <a className="navbar-brand" href="index.html">Create Class</a>
             </div>
             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul className="nav navbar-nav">
                 <li>
                   <a href="/details">
                     Details
                     <span className="glyphicon glyphicon-menu-right"></span>
                   </a>
                 </li>
                 <li>
                   <a href="/schedule">
                     Schedule
                     <span className="glyphicon glyphicon-menu-right"></span>
                   </a>
                 </li>
                 <li>
                   <a href="/payment">
                     Payment
                   <span className="glyphicon glyphicon-menu-right"></span>
                   </a>
                 </li>
                 <li>
                   <a href="/confirm">
                     Confirm
                   <span className="glyphicon glyphicon-menu-right"></span>
                   </a>
                 </li>
               </ul>
             </div>
           </div>
         </nav>
       </div>
     )
   }
 }

 export default Header
