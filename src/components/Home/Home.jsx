import React from "react";
import logo from "../../assets/img/img_components/Logo.jpg";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Contacto from "../Contacto/Contacto";
import "../../styles/home/home.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

import playstore from "../../assets/img/img_downloads/google-play.png";
import appstore from "../../assets/img/img_downloads/app-store.png";
import apk from "../../assets/img/img_downloads/apk.png";
import StrangeMusic from "../../assets/img/img_components/StrangeMusic.png";

function Home() {
  function descargaApp() {
    const section = document.getElementById("descargaApp");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <Navbar />
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={logo}
              className="d-block mx-lg-auto img-fluid images"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            ></img>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">STRANGE_MUSIC</h1>
            <p className="lead">
              La música expresa lo que no puede ser dicho y aquello sobre lo que
              es imposible permanecer en silencio
            </p>
            <button
              type="button"
              className="button btn-lg px-4 me-md-2 btn-descarga"
              onClick={descargaApp}
            >
              Descargar Gratis
            </button>
          </div>
        </div>
      </div>

      {/* Acerca de nosotros */}
      <section className="py-sm-4 fond  my-sm-2 py-md-4 my-md-5 touch1">
        <div className="container pt-md-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start offset-md-1 mb-sm-5">
              <h6 className="fw-bold display-6 dark lh-sm m-3">
                Acerca de Nosotros
              </h6>
              <p className="lead">
                {" "}
                STRANGE MUSIC es una aplicación que busca ofrecer una
                experiencia de escucha enriquecedora que se adapte a los gustos
                y preferencias musicales de cada usuario, permitiéndoles
                disfrutar de la música en cualquier momento y en cualquier
                lugar, ya sea en línea o sin conexión, de manera individual o
                compartida con amigos, y proporcionando herramientas para
                descubrir nueva música y conectarse con otros amantes de la
                música.
              </p>
            </div>
            <div
              className="col-md-5 order-md-0 text-center text-md-start pt-sm-5"
              data-aos="fade-up"
            >
              <img
                className="img-fluid acercaImg my-md-5 images"
                src={logo}
                style={{ maxWidth: "400px" }}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </section>
      {/* fin section */}

      {/* section descarga */}
      <section className="pt-sm-3 mt-md-5 pt-sm-2 pt-md-5" id="descargaApp">
        <div className="container mt-sm-3 mt-md-5 ">
          <div className="row align-items-center ">
            <div
              className="col-md-5 col-lg-5  order-md-1 text-center z-index-2 cta-image "
              data-aos="fade-up"
            >
              <img
                className="img-fluid mb-4 mb-md-0  ilustracion  flotante"
                src={StrangeMusic}
                style={{ maxWidth: "270px" }}
                alt=""
              ></img>
            </div>
            <div className="col-md-7 col-lg-7 text-center text-md-start">
              <h1 className="display-5 fw-bold lh-sm mt-md-8  dark">
                Descarga Strange Music
              </h1>
              <p className="lead">
                {" "}
                El auge de los dispositivos moviles transforma la forma en que
                consumimos informacion por completo y los mas importante del
                mundo, como facebook.
              </p>

              <div className="justify-content-center d-md-inline-block">
                <Link
                  className="pe-2 pe-sm-3 pe-md-4"
                  to={
                    "https://play.google.com/store/games?hl=es_CO&gl=US&pli=1"
                  }
                  target="_blank"
                >
                  <img
                    className="w-sm-50 w-md-50 playstore"
                    src={playstore}
                    alt=""
                  ></img>
                </Link>

                <Link
                  className="pe-2 pe-sm-3 pe-md-4"
                  to={"https://www.apple.com/co/app-store/"}
                  target="_blank"
                >
                  <img
                    className="w-sm-50 w-md-50 appstore"
                    src={appstore}
                    alt=""
                  ></img>
                </Link>
                <Link
                  className="pe-2 pe-sm-3 pe-md-4 "
                  to="https://drive.google.com/uc?export=download&id=14EDIH_jQU5pmdoqRUp6asxE8oDhSKOs7"
                  target="_blank"
                >
                  <img
                    className="w-sm-50 w-md-50 wuawei"
                    src={apk}
                    alt=""
                  ></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fin section descarga */}

      <Contacto />
      <Footer />
    </>
  );
}

export default Home;
