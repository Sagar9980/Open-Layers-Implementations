import React, { useState, useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
// import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "./MapView.css";

function MapView(props: any) {
  const place = [37.5662952, 126.9779451];
  const point: any = new Point(place);
  const [map, setMap] = useState<any>();
  const mapElement = useRef<any>();
  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        // center: fromLonLat([37.5662952, 126.9779451]),
        center: point,
        zoom: 16,
      }),
    });
    setMap(initialMap);
  }, []);

  return (
    <div className="name">
      <div ref={mapElement} className="map-container" />
    </div>
  );
}

export default MapView;
