import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Video from "./components/Video";
import FeatureListing from "./components/FeatureListing";
import CalltoAction from "./components/CalltoAction";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Video />
      <Hero />
      <FeatureListing />
      <CalltoAction />
      <Footer />
    </>
  );
}

export default App;
