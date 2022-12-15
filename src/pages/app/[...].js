import React from "react";
import { Router } from "@reach/router";
import Ekyc from "../../components/ekyc";
import Default from "../../components/index";
import FacialRecognition from "../../components/facial-recognition";
import Ocr from "../../components/ocr";
const App = () => {
  return (
    <Router basepath="/app">
      <Ekyc path="/ekyc" />
      <FacialRecognition path="/facialRecognition" />
      <Ocr path="/ocr" />
      <Default path="/" />
    </Router>
  );
};
export default App;
