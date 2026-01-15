import { useEffect, useRef } from 'react';
import leaf from '@Assets/images/logo/leaf.png';
import maplibregl, { FullscreenControl, Popup } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Feature, Polygon } from 'geojson';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import { IControl } from 'maplibre-gl';
import { area, length, kinks, distance, feature } from '@turf/turf';
import '@Assets/css/map.css';

//Manually overrides CSS classes for maplibre compatibility
//@ts-ignore
MapboxDraw.constants.classes.CONTROL_BASE = 'maplibregl-ctrl';
//@ts-ignore
MapboxDraw.constants.classes.CONTROL_PREFIX = 'maplibregl-ctrl-';
//@ts-ignore
MapboxDraw.constants.classes.CONTROL_GROUP = 'maplibregl-ctrl-group';
//@ts-ignore
MapboxDraw.constants.classes.ATTRIBUTION = 'maplibregl-ctrl-attrib';

function Map() {
  // @ts-ignore
  const key = import.meta.env.VITE_MAPTILER_KEY;
  const mapRef = useRef<maplibregl.Map | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dataRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    mapRef.current = new maplibregl.Map({
      container: containerRef.current!,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`,
      center: [85.324, 27.7172],
      zoom: 10,
    });

    mapRef.current.on('load', () => {
      mapRef.current!.addControl(
        new maplibregl.NavigationControl({
          showZoom: true,
          showCompass: true,
        }),
        'top-left',
      );

      mapRef.current!.addControl(new FullscreenControl(), 'top-left');

      new Popup({ closeOnClick: false })
        .setLngLat([85.347877, 27.6941155])
        .setHTML(
          `<p class='font-poppins text-base font-bold text-blue-800 leading-8 tracking-wider'>
        Naxa Pvt. Ltd. </p>`,
        )
        .addTo(mapRef.current!);
    });

    // mapbox draw control
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        line_string: true,
        point: true,
        trash: true,
      },
      styles: [
        {
          id: 'gl-draw-point-active',
          type: 'circle',
          filter: ['all', ['==', '$type', 'Point'], ['==', 'active', 'true']],
          paint: {
            'circle-color': 'red',
            'circle-radius': 5,
          },
        },
        {
          id: 'gl-draw-line-active-linestring',
          type: 'line',
          filter: [
            'all',
            ['==', '$type', 'LineString'],
            ['==', 'active', 'true'],
          ],
          paint: {
            'line-color': '#3BC1A8',
            'line-width': 2,
          },
        },
        {
          id: 'gl-draw-polygon-stroke-active',
          type: 'line',
          filter: ['all', ['==', '$type', 'Polygon'], ['==', 'active', 'true']],
          paint: {
            'line-color': '#FE7F2D',
            'line-width': 2,
          },
        },
        {
          id: 'gl-draw-polygon-fill-inactive',
          type: 'fill',
          filter: ['all', ['==', '$type', 'Polygon'], ['==', 'active', 'true']],
          paint: {
            'fill-color': '#3BC1A8',
            'fill-opacity': 0.2,
          },
        },
        {
          id: 'gl-draw-polygon-fill-active',
          type: 'fill',
          filter: ['all', ['==', '$type', 'Polygon'], ['==', 'active', 'true']],
          paint: {
            'fill-color': '#3BC1A8',
            'fill-opacity': 0.2,
          },
        },
      ],
    });

    const updateArea = () => {
      const data = draw.getAll();
      const latestData = data.features[data.features.length - 1];

      if (!data.features.length) {
        dataRef.current!.innerHTML = '';
        return;
      }

      if (latestData.geometry.type === 'Polygon') {
        const checkOverlap = kinks(latestData as Feature<Polygon>);
        if (checkOverlap.features.length > 0) {
          alert("Don't overlap polygon!");
          return;
        }
        const totalArea = area(data);
        const roundedArea = (Math.round(totalArea / 1000) * 100) / 100;
        dataRef.current!.innerHTML = `<p> Area : <strong>${roundedArea} sq.km.</strong> </p>`;
      } else if (latestData.geometry.type === 'LineString') {
        const distance = length(data);
        dataRef.current!.innerHTML = `<p> Area : <strong>${distance.toFixed(3)} km</strong> </p>`;
      } else if (latestData.geometry.type === 'Point') {
        const feature = data.features[0];
        if (feature && feature.geometry.type !== 'GeometryCollection') {
          const [lon, lat] = feature.geometry.coordinates;
          dataRef.current!.innerHTML = `<div>
          <p>Longitude: <strong>${Number(lon).toFixed(6)}</strong></p>
          <p>Longitude: <strong>${Number(lat).toFixed(6)}</strong></p>
        </div>`;
        }
      }
    };

    mapRef.current!.on('draw.create', updateArea);
    mapRef.current!.on('draw.update', updateArea);
    mapRef.current!.on('draw.delete', updateArea);

    mapRef.current.addControl(draw as unknown as IControl, 'top-right');

    return () => {
      mapRef.current?.remove();
      mapRef.current!.off('draw.create', updateArea);
      mapRef.current!.off('draw.update', updateArea);
      mapRef.current!.off('draw.delete', updateArea);
    };
  }, []);

  return (
    <div className="mb-10 h-full w-full px-20">
      <div className="mb-10">
        <h1 className="relative z-50 font-poppins text-4xl font-black ">
          Our Location
        </h1>
        <img
          className="h-8 w-28 -translate-y-5 translate-x-32 object-contain"
          src={leaf}
          alt=""
        />
      </div>
      <div ref={containerRef} className="h-[500px] w-full rounded-2xl "></div>
      <div ref={dataRef} className=" font-poppins text-lg"></div>
    </div>
  );
}

export default Map;
