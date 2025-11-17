import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Locate } from "lucide-react";

const API_KEY = "";
const Map = ({ lat, lon }) => {
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 14,
    bearing: 0,
    pitch: 0,
    width: "100%",
    height: "100%",
  });
  useEffect(() => {
    const a = { ...viewport };
    a.latitude = lat;
    a.longitude = lon;
    setViewport(a);
  }, [lat, lon]);

  return (
    <div>
      <ReactMapGL
        mapboxApiAccessToken={API_KEY}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker latitude={lat} longitude={lon}>
          <div>
            <Locate size={25} />
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
