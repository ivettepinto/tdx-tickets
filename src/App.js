import Button from "./components/buttons/Button";

function App() {

  const showModal = () => {
    //se crea un useState tipo boolean
    console.log('diste clic');
  }

  //aca debe de existir un useState booleano que te muestre el modal
  return (
    <>
      <h1>Hello World</h1>
      <Button onShowModal={showModal}>Ayuda</Button>
    </>
  );
}

export default App;