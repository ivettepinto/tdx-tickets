import React, {useState} from "react";
import Button from "./components/UI/buttons/Button";
import ShowTemplateModal from "./components/helpForm/ShowTemplateModal";
import CreateUpdateForm from "./components/createHelpDataForm/CreateUpdateForm";
import getService from "./helpers/GetService";
import HelpMainContainer from "./components/HelpMainContainer";


function App() {


  return (
    <>
      <h1>TELUS International - TDX</h1>
      <HelpMainContainer/>
    </>
  );
}

export default App;