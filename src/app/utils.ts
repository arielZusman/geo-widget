import {GeoObject} from "./models";
import {TreeNode} from "primeng/api";

export const geoTreeNodeAdapter = (geoObject: GeoObject): TreeNode => {
  const { _id, name, sensors, children } = geoObject;

  const mappedChildren: TreeNode[] = children.map(geoTreeNodeAdapter);

  const sensorNodes: TreeNode[] = sensors.map(sensor => ({
    key: sensor.id,
    label: `(sensor) ${sensor.name}`
  }))


  return {
    key: _id,
    label: name,
    children: [...mappedChildren, ...sensorNodes],
  };
};
