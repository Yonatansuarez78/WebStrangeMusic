import "./App.css";
import Home from "./components/Home/Home";
import PlayList from "./components/PlayList/PlayList";
import Link from "./components/Link/Link";
import Update from "./components/update/Update";
import NotFound from "./components/Notfound/NotFound";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/link" element={<Link />} />
        <Route path="/update" element={<Update />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
