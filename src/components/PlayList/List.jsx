import React from 'react'
import "../../styles/List.css"

import badBunny from '../../img/img_canciones/badbunny.jfif'
import Feid from '../../img/img_canciones/Feid.webp'
import daddy from '../../img/img_canciones/daddy-yankee.jpg'

function List() {
    return (
        <main>
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Artistas Mas Sonados</h1>
                        <p class="lead text-muted">Aqui te mostraremos los artistas mas escuchados dentro de nuestra
                            plataforma STRANGE_MUSIC</p>
                        <p>
                            <a href="#" class="btn btn-primary m-1">Top Semanal</a>
                            <a href="#" class="btn btn-secondary m-1">Top Mensual</a>
                        </p>
                    </div>
                </div>
            </section>

            <div class="album py-5 bg-light">
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">BAD BUNNY<image src={badBunny} alt=""></image></text>
                                </svg>
                                <div class="card-body">
                                    <p class="card-text">Benito Antonio Martínez Ocasio conocido como Bad Bunny en el mundo musical. destacado
                                        rapero, cantante y compositor de trap, R&B, rap y hip-hop en español. En 2016, Bad
                                        Bunny saltó a la fama con su tema debut "Diles."</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-primary btn-sm " data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">
                                                Ver Foto
                                            </button>

                                            <div class="modal fade" id="exampleModal" tabindex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="exampleModalLabel">BAD BUNNY
                                                            </h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <img src={badBunny} alt="BAD BUNNY"
                                                                id="img_modal" className='img'></img>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-primary"
                                                                data-bs-dismiss="modal">Cerrar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="col">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">FEID <img src="../Img/img_canciones/Feid.webp" alt=""></img></text>
                                </svg>
                                <div class="card-body">
                                    <p class="card-text">Salomón Villada Hoyos, mejor conocido como Feid o Ferxxo, es un
                                        rapero y productor colombiano nacido el 19 de agosto del
                                        año 1992. Hoy en día es bastante reconocido en la cultura urbana y ha trabajado con
                                        numerosos artistas del medio.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1">
                                                Ver Foto
                                            </button>

                                            <div class="modal fade" id="exampleModal1" tabindex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="exampleModalLabel">FEID</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <img src={Feid} alt="FEID" id="img_modal" className='img'></img>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-primary"
                                                                data-bs-dismiss="modal">Cerrar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">DADDY YANKEE <img src="../Img/img_canciones/daddy-yankee.jpg"
                                            alt=""></img></text>
                                </svg>
                                <div class="card-body">
                                    <p class="card-text">Ramón Luis Ayala Rodríguez es el nombre de pila del reconocido
                                        cantante Daddy Yankee. Nacido en San Juan, Puerto Rico,
                                        tuvo una infancia llena de música e instrumentos, lo que, sin duda, lo invitó a
                                        participar desde muy pequeño en este
                                        mundo</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">

                                            <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                Ver Foto
                                            </button>


                                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="exampleModalLabel">DADDY YANKEE</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <img src={daddy} alt="FEID" id="img_modal" className='img'></img>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default List
