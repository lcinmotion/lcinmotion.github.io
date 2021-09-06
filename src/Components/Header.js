import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>;
         });
      }

      return (
         <header id="home">
         <div className="banner-background"/>
         <div className="row banner">
            <div className="banner-text">
               <div className="box-shadow">
                     <h1 className="responsive-headline">Hi, I'm Lauren.</h1>
                     <h3>I'm a PNW based <span>Systems Architect</span>
                     <br/>with a passion for creative hobbies and the outdoors.</h3>
               </div>
            </div>
            <ul className="social">
               {networks}
            </ul>
         </div>

         </header>
      );
   }
}

export default Header;
