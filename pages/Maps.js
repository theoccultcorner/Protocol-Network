import { useEffect } from "react";
import Head from "next/head";

const Maps = ({ apiKey }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.defer = true;
    document.head.appendChild(script);
  }, [apiKey]);

  return (
    <div id="map" style={{ height: "400px", width: "100%" }}>
      {/* Your map content goes here */}
    </div>
  );
};

export default Maps;