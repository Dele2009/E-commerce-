import '../App.css';
import '../mybootstrap.css';
import logo from '../vite.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import {cart} from '../webvalues.json'



export default function Nav() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <header className="nav-bar position-sticky">
                <nav className="nav-bar-inn">
                    <div className='pad'>
                        <img src={logo} alt="my-logo" />
                        <ul className='d-lg-flex d-none'>
                            <li className='lis'>
                                <Link to="/"> Home</Link>
                            </li>
                            <li className='lis'>
                                <Link to="/page2"> About</Link>
                            </li>
                            <li className='lis'>
                                <Link to="/page3"> Contact</Link>
                            </li>
                            <li className='lis'>
                                <Link to="/page4"> Feedback</Link>
                            </li>
                            <li className='lis'>
                                <a target='tab' href='https://bamidele-aminu.vercel.app'>Portfolio</a>
                            </li>
                        </ul>
                        <div>
                            <button className='btn position-relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                <span className="position-relative top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                 {cart.length}
                                 <span className="visually-hidden">
                                    cart count
                                 </span>
                                </span>



                            </button>
                        </div>
                        <div className='d-inline d-lg-none'>
                            <Button className="bg-transparent" onClick={handleShow}>
                                <i className="fa-solid fa-bars fs-1 subtle"></i>
                            </Button>

                        </div>
                    </div>
                </nav>
            </header>

            <Offcanvas show={show} onHide={handleClose} className="bro">

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={logo} alt="my-logo" />
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <ul className='d-block w-100' id="offcan">
                        <li className='lissy w-100'>
                            <Link to="/products"> Home</Link>
                        </li>
                        <li className='lissy w-100'>
                            <Link to="/products/page2"> About</Link>
                        </li>
                        <li className='lissy w-100'>
                            <Link to="/products/page3"> Contact</Link>
                        </li>
                        <li className='lissy w-100'>
                            <Link to="/products/page4" > Feedback</Link>
                        </li>
                        <li className='lissy w-100'>
                            <Link to="/test3"> Feedback</Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>



        </>
    );

}

