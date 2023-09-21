import React from 'react'
import "../../styles/contacto.css"
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Formulario from './Formulario'


function Contacto() {
    return (
        <section className="parallax-mf footer-parallax bg-image sect-mt4 section">
            <div className="container route">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-mf">
                            <div id="contact" className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6 contacto-container">
                                        <div>
                                            <Formulario />
                                        </div>
                                    </div>
                                    <div className="col-md-6 contacto-container">
                                        <div className="title-box-2 pt-4 pt-md-0">
                                            <h5 className="title-left">Politicas de seguridad</h5>
                                        </div>
                                        <div className="more-info">
                                            <p className="lead">
                                                "Este sitio web está protegido por medidas de seguridad razonables para garantizar la protección de cualquier información personal que se recopile o almacene aquí. No se compartirá ni se venderá información personal de los visitantes del sitio web. Sin embargo, tenga en cuenta que ninguna medida de seguridad en línea es completamente infalible, y no podemos garantizar la seguridad de su información personal en todo momento. Si tiene alguna pregunta o inquietud sobre nuestra política de seguridad, no dude en ponerse en contacto con nosotros."
                                            </p>
                                            <ul className="list-ico">
                                                <li>
                                                    <span className="ion-email"></span>Yonatansuarez78@gmail.com
                                                </li>
                                                <li>
                                                    <span className="ion-ios-telephone"></span>+ 57 3182268916
                                                </li>
                                                <li>
                                                    <span className="ion-ios-location "></span>Cali - Colombia
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="socials">
                                            <ul className='lista'>
                                                <li className=''>
                                                    <a className='icons' href="https://github.com/Yonatansuarez78" target="_blank" >
                                                        <i className="bi bi-github"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='icons' href="https://www.instagram.com/yonatan_suarez78/" target="_blank" >
                                                        <i className="bi bi-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='icons' href="https://www.instagram.com/yonatan_suarez78/" target="_blank" rel="noopener noreferrer">
                                                        <i className="bi bi-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='icons' href="https://www.linkedin.com/in/yonatansuarez78/" target="_blank" rel="noopener noreferrer">
                                                        <i className="bi bi-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='icons' href="https://www.facebook.com/Yonatan.suarez08" target="_blank" rel="noopener noreferrer">
                                                        <i className="bi bi-facebook"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright-box">
                                <p className="copyright">
                                    &copy; <strong><span>STRANGE MUSIC</span></strong>. Todos Los Derechos Reservados
                                </p>
                                <div className="credits"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Contacto
