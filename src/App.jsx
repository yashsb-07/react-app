import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";

function Description() {
  return <h3>I am the Description</h3>;
}

function App() {

  // return <button>Click Me</button>
  return (

    <div>
      <Title/>
      <Description/>
      <ProductTab/>
    </div>

  );
}

export default App;
