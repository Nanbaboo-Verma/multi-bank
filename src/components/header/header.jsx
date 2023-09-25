import React from "react";
import Modal from "react-modal";
import './header.css'
Modal.setAppElement("#root");
const Header = ({ content }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const headerButton = [
        {
            button: "Personal",
            href: "personal"
        },
        {
            button: "Bussines",
            href: "bussines"
        },
        {
            button: "Commercial",
            href: "commercial"
        },
    ];


    return <>
        <div class="header-outer-container">
            <div class="header-inner-container">
                <section className="header-top-section">
                    <div className="header-top-inner-section max-width">
                        <div className="header-button-section-left">
                            {headerButton.map((items) => {
                                return <>
                                    <div className="header-button-container">
                                        <a href={items.href} className="header-button">{items.button}</a>
                                    </div>
                                </>
                            })}
                        </div>



                        <div className="header-right-button-container">
                            <div className='location-and-mail-container display-flex'>
                                <div className='location-container'>
                                    <span className="location-icon"><i class="fa">&#xf041;</i></span>
                                    <span className='location-content'>Brooklyn Heights Promenade, Brooklyn, NY, USA</span>
                                </div>
                                <div>
                                    <span><i class="fa">&#xf0e0;</i></span>
                                    <span className='location-content'>example@exaple.com</span>
                                </div>
                            </div>

                            <div className='phone-content-responsive'>
                                <span><i class="fa fa-volume-control-phone"></i></span>
                                <span className='phone-content'>+1 452 123 1235</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="header-bottom-section ">
                    <div className='sub-heading-container max-width'>
                        <div className='sub-heading-image-container'>
                            <img src="https://multibank.cmsmasters.net/alternative/wp-content/uploads/sites/3/2021/11/logo-1.svg" alt="" className='sub-heading-image' />
                        </div>

                        <div className="slide-bar">
                            <button onClick={() => setIsOpen(true)} className="bars-button"><i className="fa bars">&#xf0c9;</i></button>
                            <Modal className="open-slide-bar" isOpen={modalIsOpen}>
                                <button onClick={() => setIsOpen(false)} className="bars-button-close">X</button>
                                <div className="slide-bar-image">
                                    <img src="https://multibank.cmsmasters.net/alternative/wp-content/uploads/sites/3/2021/11/logo-1.svg" alt="" />
                                </div>
                                <div className="slide-services-all">
                                    <ul>
                                        <li>Home</li>
                                        <li>Services</li>
                                        <li>Blog</li>
                                        <li>Contacts</li>
                                    </ul>
                                </div>
                                <div className="login-register-container">
                                    <button className="login">LOG IN</button>
                                    <button className="register">REGISTER</button>
                                </div>
                                <div className="wrap">
                                    <div className="search">
                                        <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                                        <button type="submit" class="searchButton">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        </div>

                        <nav className='sub-heading-nav-conatainer'>
                            <ul className='sub-heading-nav-content'>
                                <li className="sub-heading-nav-content-list"><a href="home" className='header-home'>Home</a></li>
                                <li className="sub-heading-nav-content-list"><span className='header-services'>Services<i class="fa">&#xf107;</i></span></li>
                                <li className="sub-heading-nav-content-list"><a href="blog" className='header-blog'>Blog</a></li>
                                <li className="sub-heading-nav-content-list"><a href="contacts" className='header-contacts'>Contacts</a></li>
                            </ul>
                            <div className='sub-heading-help-container'>
                                <a href="help-me-decide" className='header-help-me-decide'>HELP ME DECIDE</a>
                            </div>
                            <div className='sub-heading-search-icon-container'>
                                <i class="fa">&#xf002;</i>
                            </div>
                        </nav>
                    </div>
                </section>
            </div>
        </div>
    </>
}
export default Header;