import React, { useState, useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import ol from "ol";
import { fromLonLat } from "ol/proj";
import { transform } from "ol/proj";
// import { Point } from "ol/geom";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "./MapView.css";

function MapView(props: any) {
  // const place = [37.5662952, 126.9779451];
  const [map, setMap] = useState<any>();
  const mapElement = useRef<any>();
  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
    console.log(transform([37.5662952, 126.9779451], "EPSG:4326", "EPSG:3857"));
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        // center: ol.protransform([37.5662952, 126.9779451], "EPSG:4326"),
        // center: [0, 0,],
        center: transform([126.9779451, 37.5662952], "EPSG:4326", "EPSG:3857"),

        zoom: 15,
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
