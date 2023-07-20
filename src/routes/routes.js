import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Container } from "@mui/material";
import NavBar from "../components/navigation/NavBar";
import ScrollToTopButton from "../components/TopScrollButton/TopScrollButton";
import Footer from "../components/footer/footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <ScrollToTopButton />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
