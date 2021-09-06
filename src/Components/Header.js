import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>;
         });
      }

      return (
         <header id="home">
         <div className="banner-background"/>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Hi, I'm {name}.</h1>
               <h3>I'm a {city} based <span>{occupation}</span><br />{description}.</h3>
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
