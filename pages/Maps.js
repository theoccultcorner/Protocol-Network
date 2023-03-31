import { useEffect, useState } from "react";
import { Loader, Marker } from "@googlemaps/js-api-loader";

const Maps = ({ apiKey }) => {
  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      libraries: ["places"],
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 8,
      });

      setMap(map);

      // Try to get the user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            setCurrentLocation(pos);
            map.setCenter(pos);
          },
          () => {
            console.log("Unable to get user's location.");
          }
        );
      }
    });
  }, [apiKey]);

  return (
    <div id="map" style={{ height: "400px", width: "100%" }}>
      {map && currentLocation && (
        <Marker position={currentLocation} map={map} title="You are here." />
      )}
    </div>
  );
};

export default Maps;
