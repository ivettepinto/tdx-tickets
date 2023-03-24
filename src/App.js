import React, {useState} from "react";
import Button from "./components/UI/buttons/Button";
import HelpForm from "./components/UI/helpForm/HelpForm";
import Form from "./components/UI/form/Form";
import getService from "./helpers/GetService";

function App() {

  const [isShow, setIsShow] = useState(false);

  const getInstructionsById = getService(1);

  const showModal = () => {
    if(isShow === true) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }

  return (
    <>
      <h1>TELUS International - TDX</h1>
      <Button onShowModal={showModal}>Get help</Button>
      <Form/>
      {isShow && <HelpForm onShowModal={showModal} data={getInstructionsById.field} view={"modalView"} />}
    </>
  );
}

export default App;