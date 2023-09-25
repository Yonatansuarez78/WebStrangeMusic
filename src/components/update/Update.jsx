import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../styles/update/update.css";

import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

function Update() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://api.ejemplo.com/tu-endpoint');
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <>
      <div className="update">
        <Navbar />

        <div>
          <button onClick={handleButtonClick} disabled={isLoading}>
            Obtener Datos
          </button>
          {isLoading && <div>Cargando...</div>}
          {data && <div>Los datos son: {data}</div>}
          {error && <div>Error: {error.message}</div>}
        </div>

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
                  href="https://twitter.com/StrangeMusicOf"
                >
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li class="ms-3">
                <a
                  class="text-body-secondary"
                  href="https://www.instagram.com/strangemusicoficial/"
                >
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li class="ms-3">
                <a
                  class="text-body-secondary"
                  href="https://www.facebook.com/profile.php?id=61551636999398"
                >
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
            </ul>
          </footer>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Update;
