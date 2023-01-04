import { useState } from "react";
import "./styles.css";

export default function App() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function showCity(event) {
    event.preventDefault();
    setMessage(`It is currently 20C in ${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <form onSubmit={showCity}>
        <input
          type="search"
          placeholder="Please type a city"
          onChange={changeCity}
        />
        <input type="submit" value="Search" />
      </form>
      <h3>{message}</h3>
    </div>
  );
}
