import React, { useEffect, useState } from "react";
import Location from "Components/Location/Location";
import Map from "Components/Map/MapView";

function Tab1() {
  const [coordinates, setCoordinates] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://angelswing-frontend-test-serverless-api.vercel.app/api/locations"
      )
        .then((response) => response.json())
        .then((data) => setCoordinates(data?.locations))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  return (
    <div className="tab__one__container">
      <Location data={coordinates} />
      <Map data={coordinates} />
    </div>
  );
}

export default Tab1;
