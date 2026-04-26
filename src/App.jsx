import "./App.css";
// import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
// import MsgBox from "./MsgBox.jsx";

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
    </div>

  );
}

export default App;
