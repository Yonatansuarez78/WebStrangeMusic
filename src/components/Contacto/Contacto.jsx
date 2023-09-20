import React from 'react'
import "../../styles/contacto.css"
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';


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
                                        <div className="title-box-2">
                                            <h5 className="title-left">CONTACTO</h5>
                                        </div>
                                        <div>
                                            <form
                                                action="https://formspree.io/f/mzblpkvl"
                                                method="POST"
                                                id="contact-form"
                                            >
                                                <div className="form-group my-2">
                                                    <label htmlFor="name" className="form-label fw-bolder">
                                                        Nombre
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                    />
                                                </div>
                                                <div className="form-group my-2">
                                                    <label htmlFor="email" className="form-label fw-bolder">
                                                        Correo
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="email"
                                                        id="email"
                                                        name="_replyto"
                                                    />
                                                </div>
                                                <div className="form-group my-2">
                                                    <label htmlFor="message" className="form-label fw-bolder">
                                                        Mensaje
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        style={{ resize: 'none' }}
                                                        id="message"
                                                        name="message"
                                                        rows="4"
                                                    ></textarea>
                                                </div>
                                                <button className="btn btn-outline-info mt-2" type="button" style={{ width: '100px' }}>
                                                    Enviar
                                                </button>
                                            </form>
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
                                                    <a className='icons' href="https://github.com/Yonatansuarez78" target="_blank" >
                                                        <i className="bi bi-github"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='icons' href="https://github.com/Yonatansuarez78" target="_blank" rel="noopener noreferrer">
                                                        <i className="bi bi-github"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='icons' href="https://github.com/Yonatansuarez78" target="_blank" rel="noopener noreferrer">
                                                        <i className="bi bi-github"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='icons' href="https://github.com/Yonatansuarez78" target="_blank" rel="noopener noreferrer">
                                                        <i className="bi bi-github"></i>
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
