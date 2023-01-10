import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Search from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <div class="container">
            <form id="search-city">
              <input
                type="text"
                placeholder="Search City"
                autocomplete="off"
                autofocus="on"
                id="search-text"
              />

              <input type="submit" value="Search" />
            </form>
            <br />
            <h1 id="maincity"></h1>
            <h3>Tuesday Sept. 13, 2022</h3>
            <h6 id="description"></h6>
          </div>
          <div class="row">
            <div class="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly Cloudy"
                id="icon"
              />

              <strong>
                <span id="temperature"></span>
              </strong>
              <span class="units">
                <a href="#" id="celsius-link">
                  °C
                </a>{" "}
                |
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="speed"></span>km/h
                </li>
              </ul>
            </div>

            <br />
            <br />
            <div class="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/sashi11px/Weather-App-Final"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>
      <font color="white"> by Sasha Jackson</font>
    </div>
    <Search />
  </StrictMode>
);
