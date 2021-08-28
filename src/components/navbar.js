import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <div>
                <div className="navbar-container">
                    <div className="nav-left">NAHRA</div>
                    <div className="nav-center">
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Our Work</p>
                        <p>How To Help</p>
                        <p>Contact</p>
                    </div>
                    {/* <div className="nav-right">Logout</div> */}
                </div>
            </div>
        )
    }
}

export default Navbar;