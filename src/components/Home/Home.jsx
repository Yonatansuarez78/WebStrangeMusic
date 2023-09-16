import React from 'react'
import logo from '../../img/img_components/Logo.jpg'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import "../../styles/home.css"

function Home() {
    return (
        <>
            <Navbar />
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

            {/* Caracteristicas de la APP */}
            <section className="py-1 touch1" id="features">
                <div className="container-lg pt-2 mt-2">
                    <div className="row align-items-center">
                        <div
                            className="col-md-4 col-lg-5 order-md-0  text-start mb-5 mb-md-0 conEmpresa"
                            data-aos="fade-up"
                        >
                            <img
                                className="img-fluid ilustracionEmpresa flotante"
                                src={logo}
                                style={{ maxWidth: "280px" }}
                                alt=""
                            ></img>
                        </div>
                        <div className="col-md-8 col-lg-7 px-sm-5 px-md-0 text-start">
                            <h6 className="fw-bold  fs-2 lh-sm text-start dark">
                                Caracteristicas de la
                                <br />
                                App STRANGE MUSIC
                            </h6>
                            <p className="my-4 text-secondary fs-6">
                                STRANGE MUSIC conecta tu mundo con un mundo de colores musicales
                                <br className="d-none d-xl-block" />
                                siendo un reproductor que a travez de tus oidos te transporta y disfrutas de la música en cualquier lugar y en cualquier momento.
                            </p>
                            <div className="d-flex align-items-center mb-5">
                                <div>
                                    <img
                                        className="img-fluid espaciosicons"
                                        src={logo}
                                        width="90"
                                        alt=""
                                    ></img>
                                </div>
                                <div className="px-4">
                                    <h5 className="fw-bold text-danger">Biblioteca de música</h5>
                                    <p className="my-4 text-secondary fs-6">
                                        Te permite almacenar y organizar tu colección de música{" "}
                                        <br className="d-none d-xl-block"></br> ya sea en formato digital o en streaming.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                                <div>
                                    <img
                                        className="img-fluid "
                                        src={logo}
                                        width="90"
                                        alt=""
                                    ></img>
                                </div>
                                <div className="px-4">
                                    <h5 className="fw-bold text-primary">Búsqueda y descubrimiento:</h5>
                                    <p className="text-secondary fs-6">
                                        Ofrece funciones de búsqueda que permitan a los usuarios{" "}
                                        <br className="d-none d-xl-block"></br>encontrar fácilmente canciones, álbumes y artistas
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                                <div>
                                    <img
                                        className="img-fluid "
                                        src={logo}
                                        width="90"
                                        alt=""
                                    ></img>
                                </div>
                                <div className="px-4">
                                    <h5 className="fw-bold text-success">
                                        Calidad de audio
                                    </h5>
                                    <p className="text-secondary fs-6">
                                        Vive una experiencia de alta calidad
                                        <br className="d-none d-xl-block"></br>con audios estandares y de alta definicion
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* fin section */}

            {/* Acerca de nosotros */}
            <section className="py-sm-4 fond  my-sm-2 py-md-4 my-md-5 touch1">
                <div className="container pt-md-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start offset-md-1 mb-sm-5">
                            <h6 className="fw-bold display-6 dark lh-sm m-3">
                                Acerca de Nosotros
                            </h6>
                            <p className="my-4  pe-xl-5 fs-6 font text-secondary ">
                                {" "}
                                STRANGE MUSIC es una aplicación que  busca ofrecer una experiencia de escucha enriquecedora que se adapte a los gustos y preferencias
                                musicales de cada usuario, permitiéndoles disfrutar de la música en cualquier momento y en cualquier lugar,
                                ya sea en línea o sin conexión, de manera individual o compartida con amigos,
                                y proporcionando herramientas para descubrir nueva música y conectarse con otros amantes de la música.
                            </p>

                        </div>
                        <div
                            className="col-md-5 order-md-0 text-center text-md-start pt-sm-5"
                            data-aos="fade-up"
                        >
                            <img
                                className="img-fluid acercaImg my-md-5  flotante"
                                src={logo}
                                style={{ maxWidth: "400px" }}
                                alt=""
                            ></img>
                        </div>
                    </div>
                </div>
            </section>
            {/* fin section */}






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

            <Footer />
        </>

    )

}

export default Home
