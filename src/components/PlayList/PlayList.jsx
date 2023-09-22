import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'
import List from './List'

function PlayList() {
  return (
    <div>
      
      <Navbar />
      <List />

      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <svg class="bi" width="30" height="24"><use xlink: href="#bootstrap" /></svg>
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-body-secondary" href="https://twitter.com/YonatanPechene"><i class="bi bi-twitter"></i></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="https://www.instagram.com/yonatan_suarez78/"><i class="bi bi-instagram"></i></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="https://www.facebook.com/Yonatan.suarez08/"><i class="bi bi-facebook"></i></a></li>
          </ul>

        </footer>
      </div>
      <Footer />
    </div>
  )
}

export default PlayList
