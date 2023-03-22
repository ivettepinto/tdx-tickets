import React, {useState} from "react";
import Button from "./components/buttons/Button";
import HelpForm from "./components/helpForm/HelpForm";
import Field from "./components/field/Field";

function App() {

  const [isShow, setIsShow] = useState(false);

  const showModal = (state) => {
    //se crea un useState tipo boolean
    setIsShow(state);
    console.log('diste clic');
  }

  //aca debe de existir un useState booleano que te muestre el modal
  return (
    <>
      <h1>Hello World</h1>
      <Button onShowModal={showModal}>Ayuda</Button>
      <Button>Manage instruction</Button>
      {isShow && <HelpForm onShowModal={showModal} />}
    </>
  );
}

export default App;