import React from 'react'
import logo from '../../img/img_components/Logo.jpg'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import "../../styles/home.css"

function Home() {
    return (
        <>
            <Navbar/>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={logo}
                            className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">STRANGE_MUSIC</h1>
                        <p className="lead">La música expresa lo que no puede ser dicho y aquello sobre lo que es imposible
                            permanecer en silencio</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="button btn-lg px-4 me-md-2">Primary</button>
                            <button type="button" className="button btn-lg px-4">Default</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>

                        <div class="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address"></input>
                                    <button type="button" className='button'>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
                        <p>&copy; STRANGE_MUSIC. Todos los derechos reservados 2023</p>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                <use xlink: href="#twitter" />
                            </svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                <use xlink: href="#instagram" />
                            </svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                <use xlink: href="#facebook" />
                            </svg></a></li>
                        </ul>
                    </div>
                </footer>
            </div>

            <Footer/>
        </>

    )

}

export default Home
