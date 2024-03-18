import { getLocation } from "../utils/getLocation";
import axios from "axios";
import { useState } from "react";

const CurrentLocation = ({ userInput, setUserInput }) => {
  const [error, setError] = useState(null);
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState("");
  const [loading, setLoading] = useState(false);

  const getPlaceData = async () => {
    setLoading(true);
    try {
      const location = await getLocation();
      const { latitude, longitude } = location.coords;

      if (latitude && longitude) {
        console.log(latitude, longitude);
        const apiKey = "3da0b387c5b2d581708f65391659f831";
        const weatherResults = await axios.get(
          `https://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=10&appid=${apiKey}`
        );
        const { name } = weatherResults.data.list[0];
        const places = weatherResults.data.list.map((item) => {
          return item.name;
        });
        console.log(places);
        setPlaces(places);
        setLoading(false);

        setUserInput({
          ...userInput,
          location: {
            cityName: name,
            latitude: latitude,
            longitude: longitude,
            source: "geolocation",
          },
        });
      }
    } catch (error) {
      setError("Error finding location data, enter city instead");
      setLoading(false);
    }
  };

  const handlePlaceSelection = (e) => {
    setSelectedPlace(e.target.value);
  };

  return (
    <>
      <p onClick={getPlaceData} disabled={loading} className="underline">
        {loading ? "Loading..." : "Get Location"}
      </p>
      {error && <p className="error">{error}</p>}
      {places.length > 0 && (
        <select onChange={handlePlaceSelection}>
          <option className="form-input">Select a place</option>
          {places.map((place, index) => (
            <option key={index}>{place}</option>
          ))}
        </select>
      )}
    </>
  );
};

export default CurrentLocation;
