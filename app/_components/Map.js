import React from "react";
import {
  GoogleMap,
  InfoBoxF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 63.826968,
    lng: 20.264611,
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.setZoom(18);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF position={{ lat: 63.827071, lng: 20.264682 }}>
        <InfoBoxF>
          <a
            href="https://www.google.com/maps/place/BIC+Factory/@63.8268987,20.2645805,19z/data=!3m1!4b1!4m6!3m5!1s0x467c5b6b25555541:0x6c41ebd0cd63b0f5!8m2!3d63.8268987!4d20.2645805!16s%2Fg%2F11clsgs6k1?entry=ttu"
            target="_blank"
          >
            <div className="bg-[#c4007f] text-neutral-100 p-2 rounded-xl rounded-tl-none mt-[2px] ml-[2px] drop-shadow-xl">
              <p className=" text-xl">BIC Factory</p>
              <p className="text-lg text-neutral-300">Rådhusesplanaden 6F</p>
            </div>
          </a>
        </InfoBoxF>
      </MarkerF>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}
