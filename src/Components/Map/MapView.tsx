import React, { useState, useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import { Feature } from "ol";
import { transform } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "./MapView.css";
import VectorSource from "ol/source/Vector";
import { Circle as CircleStyle, Stroke, Style } from "ol/style";
import VectorLayer from "ol/layer/Vector";
import { Point } from "ol/geom";

function MapView(props: any) {
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
        // center: ol.protransform([37.5662952, 126.9779451], "EPSG:4326"),
        // center: [0, 0,],
        center: transform([126.9779451, 37.5662952], "EPSG:4326", "EPSG:3857"),

        zoom: 15,
      }),
    });

    const geoMarker = new Feature({
      // type: "geoMarker",
      geometry: new Point(
        transform([126.9779451, 37.5662952], "EPSG:4326", "EPSG:3857")
      ),
    });
    console.log(geoMarker, "geomarkern");

    const geoMarker1 = new Feature({
      // type: "geoMarker",
      geometry: new Point(
        transform([126.97328373, 37.56755685], "EPSG:4326", "EPSG:3857")
      ),
    });

    let featureList: any = [];
    props?.data?.map((data: number[], index: Number) => {
      featureList.push(
        new Feature({
          geometry: new Point(
            transform(data.reverse(), "EPSG:4326", "EPSG:3857")
          ),
        })
      );
    });
    console.log(featureList, "featurelist");
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: featureList,
      }),
      style: function (feature) {
        return new Style({
          image: new CircleStyle({
            radius: 7,
            // fill: new Fill({ color: "black" }),
            stroke: new Stroke({
              color: "blue",
              width: 2,
            }),
          }),
        });
      },
    });
    initialMap.addLayer(vectorLayer);
    setMap(initialMap);
  }, [props.data]);

  return (
    <div className="map__view__container">
      {map && <div ref={mapElement} className="map-container" />}
    </div>
  );
}

export default MapView;
