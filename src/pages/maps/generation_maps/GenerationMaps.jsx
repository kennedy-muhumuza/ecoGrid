import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import styles from "./GenerationMap.module.css";

function GenerationMap() {
  const [location, setLocation] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async () => {
    try {
      // You can use a Geocoding API to convert the city name to coordinates.
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchInput}`
      );

      if (response.data.length > 0) {
        const result = response.data[0];
        setLocation({
          lat: result.lat,
          lon: result.lon,
        });
      } else {
        alert("Location not found");
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <div className={styles["map_container"]}>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {location && (
              <Marker position={[location.lat, location.lon]}>
                <Popup>Your location</Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default GenerationMap;
