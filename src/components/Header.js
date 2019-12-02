import React from 'react'
import '../style/header.scss'


const Header = () => (
    <header className="header">
         <div className="header-banner">free us shipping & return</div>
         <div className="container">
             <nav className="nav">
                 <div className="nav-left">
                     <ul className="nav-links">
                         <li>
                             <a className="nav-link" href="#">
                                 men
                             </a>
                             <a className="nav-link" href="#">
                                 women
                             </a>
                         </li>
                     </ul>
                     <button className="nav-burger" type="button">
                        <img
                            src={`/images/hamburger.png`}
                            alt="menu"
                        />
                     </button>
                 </div>
                 <img
                    className="nav-logo"
                    src={`/images/logo.png`}
                    alt="logo"
                />
                <div className="nav-right">
                    <a className="nav-link" href="/google.com">
                        about
                    </a>
                    <div className="nav-icon-list">
                        <img
                            src={`/images/user.png`}
                            alt="menu"
                        />
                        <div className="nav-shopping-bag">
                        <img
                            src={`/images/cartIcon.png`}
                            alt="menu"
                        />
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
)

export default Header