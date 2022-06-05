import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  document.title = "Wheater App";

  const [cord, setCord] = useState({});

  const [dataw, setDataW] = useState({}, []);

  useEffect(() => {
    const succes = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      setCord({ lat, lon });
    };

    navigator.geolocation.getCurrentPosition(succes);
  }, []);

  useEffect(() => {
    if (cord.lat !== undefined) {
      const API_KEY = "562075115146cb4cc529a92d2261a483";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cord.lat}&lon=${cord.lon}&appid=${API_KEY}`;

      axios
        .get(url)
        .then((res) => {
          const response = res.data;
          setDataW(response);
        })
        .catch((err) => {
          let error = err.error;
          setDataW(error);
        });
    }
  }, [cord]);

  console.log(dataw);

  return (
    <div className="App">
      <Card dataw={dataw} />
    </div>
  );
}

export default App;
