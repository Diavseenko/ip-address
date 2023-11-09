
import { useMap } from 'react-leaflet/hooks';


export default function ChangeView({ center, zoom }) {
   const map = useMap();
   map.setView(center, zoom);
   return null;
}
