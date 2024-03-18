import axios from "axios";
import { useState } from "react";

const LocationInput = ({ setUserInput, userInput }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = async (event) => {
    const value = event.target.value.trim();

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
            cityName: value,
            latitude: lat,
            longitude: lon,
            source: "user input",
          },
        });
      } else {
        setError("Unable to find coordinates for the specified city.");
      }
    } catch (error) {
      setError("Error fetching coordinates. Please try again later.");
    }
  };

  console.log(coordinates);

  return (
    <div>
      <label htmlFor="location">Where are you based?</label>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="enter a town/city name"
        required
        onChange={handleInputChange}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LocationInput;
