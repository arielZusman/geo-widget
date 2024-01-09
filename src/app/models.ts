export type Identifier = 'zone' | 'site' | 'placemark' | 'layer'
export type SensorType = 'camera' | 'traffic' | 'pollution' | 'heat'
export type Sensor = {
  id: string
  type: SensorType
  name: string

}
export type GeoObject = {
  _id: string
  type: number
  name: string
  sensors: Sensor[]
  children: GeoObject[]
}

type TreeNode = {
  key: string;
  label: string;
  children: TreeNode[]
}

export const CategoryMap = {
  0: 'sites',
  1: 'zones',
  3: 'layers',
  4: 'placemarks'
}

