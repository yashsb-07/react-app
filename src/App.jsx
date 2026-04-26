import "./App.css";
import Button from "./Button.jsx";
// import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
// import MsgBox from "./MsgBox.jsx";
import Form from "./Form.jsx"

function Description() {
  return <h3>I am the Description</h3>;
}

function App() {

  // return <button>Click Me</button>
  return (

    
    <div>
      {/* <MsgBox userName= "Yash" textColor="Yellow" /> */}
      {/* <Title/> */}
      {/* <Description/> */}
      <h2>Blockbuster Deals | Shop Now</h2>
      <ProductTab/>
      <Button />
      <Form />
    </div>

  );
}

export default App;
