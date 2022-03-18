import React from "react";
import { Route, Router, Routes } from "react-router";
import { Menu } from "./components/menu";
import HeaderContainer from "./containers/header";
import Favourites from "./pages/favourites";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import "./shared/styles/global.scss";

function App() {
  return (
    <>
      <div className="container">
        <HeaderContainer />
        <Routes>
          <Route index element={<Home />} />
          <Route path="favourites" element={<Favourites />} />
          {/*  <Route path="dashboard" element={<Dashboard />} />
           </Route>*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
