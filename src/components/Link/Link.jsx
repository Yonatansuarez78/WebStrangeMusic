import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

import "../../styles/Link/link.css";

function Link() {
  return (
    <div className="App">
      <Navbar />

      <main className="container-fluid">
        {/* Contenido principal */}
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
          <div className="col-md-6 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">Nuevos lanzamientos</h1>
            <h3 className="fw-normal text-muted mb-3">
              En esta sesion encontraras nuevos ritmos musicales
            </h3>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div className="my-3 py-3">
                <h2 className="display-5">reggaeton</h2>
                <p className="lead">El ritmo que mueve el mundo.</p>
              </div>
              <div
                className="bg-body-tertiary shadow-sm mx-auto"
                style={{
                  width: "80%",
                  height: "300px",
                  borderRadius: "21px 21px 0 0",
                }}
              ></div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div className="my-3 py-3">
                <h2 className="display-5">Salsa</h2>
                <p className="lead">
                  Donde la salsa se convierte en un viaje de pasión y alegría a
                  través de la música.
                </p>
              </div>
              <div
                className="bg-body-tertiary shadow-sm mx-auto"
                style={{
                  width: "80%",
                  height: "300px",
                  borderRadius: "21px 21px 0 0",
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>

      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap" />
              </svg>
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">
              &copy; 2023 Company, Inc
            </span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a
                class="text-body-secondary"
                href="https://twitter.com/YonatanPechene"
              >
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="text-body-secondary"
                href="https://www.instagram.com/yonatan_suarez78/"
              >
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="text-body-secondary"
                href="https://www.facebook.com/Yonatan.suarez08/"
              >
                <i class="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>

      <Footer />
    </div>
  );
}

export default Link;
