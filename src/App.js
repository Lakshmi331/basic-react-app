import './App.css';

function App() {
  let name="Lakshmi"
  let num = "9876543210"
  let bool = true;

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <h1>{name}</h1>
      {
      bool ? <h3>{num}</h3> : <h3>No Number</h3>
      }
    </div>
  );
}

export default App;
