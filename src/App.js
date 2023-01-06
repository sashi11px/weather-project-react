import { useState } from "react";
import "./styles.css";

export default function App() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  var MyClass = React.createClass({
    render: function () {
      return (
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="container">
                <form id="search-city">
                  <input
                    type="text"
                    placeholder="Search City"
                    autoComplete="off"
                    autofocus="on"
                    id="search-text"
                  />
                  <input type="submit" defaultValue="Search" />
                </form>
                <br />
                <h1 id="maincity" />
                <h3>Tuesday Sept. 13, 2022</h3>
                <h6 id="description" />
              </div>
              <div className="row">
                <div className="col-6">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Partly Cloudy"
                    id="icon"
                  />
                  <strong>
                    <span id="temperature" />
                  </strong>
                  <span className="units">
                    <a href="#" id="celsius-link">
                      °C
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Humidity: <span id="humidity" />%
                    </li>
                    <li>
                      Wind: <span id="speed" />
                      km/h
                    </li>
                  </ul>
                </div>
                <br />
                <br />
                <div className="weather-forecast" id="forecast" />
              </div>
            </div>
          </div>
          <a
            href="https://github.com/sashi11px/Weather-App-Final"
            target="_blank"
          >
            Open-source code
          </a>
          <font color="white"> by Sasha Jackson</font>
        </div>
      );
    },
  });
}
