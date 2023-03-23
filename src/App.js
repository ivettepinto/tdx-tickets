import React, {useState} from "react";
import Button from "./components/UI/buttons/Button";
import HelpForm from "./components/UI/helpForm/HelpForm";
import myJson from "./helpers/helperForm.json";

function App() {

  const [isShow, setIsShow] = useState(false);

  const showModal = () => {
    if(isShow === true) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }

  return (
    <>
      <h1>Hello World</h1>
      <Button onShowModal={showModal}>Ayuda</Button>
      {isShow && <HelpForm onShowModal={showModal} data={myJson.field} />}
    </>
  );
}

export default App;