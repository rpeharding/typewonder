import axios from "axios";
import { useState } from "react";

const LocationInput = ({ setUserInput, userInput }) => {
  const [cityName, setCityName] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = async (event) => {
    const value = event.target.value.trim();
    setCityName(value);

    if (value === "") {
      setCoordinates(null);
      setError(null);
      return;
    }

    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        value
      )}`;
      const { data } = await axios.get(url);

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setCoordinates({ latitude: lat, longitude: lon });
        setError(null);
        setUserInput({
          ...userInput,
          location: {
            cityName: cityName,
            latitude: lat,
            longitude: lon,
          },
        });
      } else {
        setError("Unable to find coordinates for the specified city.");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      setError("Error fetching coordinates. Please try again later.");
    }
  };

  console.log(cityName, coordinates);

  return (
    <div>
      <label htmlFor="location">Where are you based?</label>
      <input
        type="text"
        value={cityName}
        name="location"
        id="location"
        placeholder="enter a town/city name"
        required
        onChange={handleInputChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default LocationInput;
