import "./App.css"

function Title() {
  return <h1>I am the Title</h1>;
}

function Description() {
  return <h3>I am the Description</h3>;
}

function App() {

  // return <button>Click Me</button>
  return (

    <div>
      <Title/>
      <Description/>
    </div>

  );
}

export default App;
