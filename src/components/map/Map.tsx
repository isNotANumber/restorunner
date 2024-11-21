import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { City } from '../../types/types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../store/hooks';

type MapProps = {
  city: City;
  selectedPointId: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ city, selectedPointId }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const currentPlaceType = useAppSelector(
    (state) => state.catalog.currentPlaceType
  );
  const filteredOffers = useAppSelector((state) =>
    state.catalog.offers.filter((offer) => offer.type === currentPlaceType)
  );

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      filteredOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedPointId !== undefined && offer.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, filteredOffers, selectedPointId]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
