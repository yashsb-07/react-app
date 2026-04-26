import "./App.css";
import Button from "./Button.jsx";
// import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
// import MsgBox from "./MsgBox.jsx";
import Form from "./Form.jsx"
import Counter from "./Counter.jsx";
import LikeButton from "./LikeButton.jsx";

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
      <Counter />
      <LikeButton />
    </div>

  );
}

export default App;
