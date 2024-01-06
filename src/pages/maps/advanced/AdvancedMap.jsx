import {
  createContainerComponent,
  createElementHook,
  createElementObject,
  createPathHook,
  extendContext,
} from "@react-leaflet/core";
import L from "leaflet";
import { MapContainer, Popup, TileLayer } from "react-leaflet";
import styles from "./AdvancedMap.module.css";

function getBounds(props) {
  return L.latLng(props.center).toBounds(props.size);
}

function createSquare(props, context) {
  const square = new L.Rectangle(getBounds(props));
  return createElementObject(
    square,
    extendContext(context, { overlayContainer: square })
  );
}

function updateSquare(instance, props, prevProps) {
  if (props.center !== prevProps.center || props.size !== prevProps.size) {
    instance.setBounds(getBounds(props));
  }
}

const useSquareElement = createElementHook(createSquare, updateSquare);
const useSquare = createPathHook(useSquareElement);
const Square = createContainerComponent(useSquare);

const center = [51.505, -0.09];

function AdvancedMap() {
  return (
    <div className={styles["advanced_map_container"]}>
      <MapContainer center={center} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Square center={center} size={1000}>
          <Popup>Hello Popup</Popup>
        </Square>
      </MapContainer>
    </div>
  );
}
export default AdvancedMap;
