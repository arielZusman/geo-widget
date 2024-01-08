type Identifier = 'zone' | 'site' | 'placemark' | 'layer'
type SensorType = 'camera' | 'traffic' | 'pollution' | 'heat'
type Sensor = {
  id: string
  type: SensorType
  name: string

}
type GeoObject = {
  type: Identifier
  name: string
  id: string
  sensorIds: string[] // reference for Sensor ID
  parentId: string | null // reference for parent GeoObject
}
