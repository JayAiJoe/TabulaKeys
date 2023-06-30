import React from "react";

const Navbar = () => {
    return(
        <nav class="navbar is-transparent is-black is-fixed-top" style={{'height':70}}>
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                Tabula
                </a>
                <div class="navbar-burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                <a class="navbar-item" href="#">
                    Home
                </a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" href="#">
                    Shop
                    </a>
                    <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" href="#">
                        Group Buys
                    </a>
                    <a class="navbar-item" href="#">
                        Designers
                    </a>
                    <hr class="navbar-divider"/>
                    <a class="navbar-item" href="#">
                        Keyboards
                    </a>
                    <a class="navbar-item" href="#">
                        Keycaps
                    </a>
                    <a class="navbar-item" href="#">
                        Others
                    </a>
                    </div>
                </div>
                </div>

            </div>
    </nav>
    );
}

export default Navbar;