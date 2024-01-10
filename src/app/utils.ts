import { GeoObject } from './models'
import { TreeNode } from 'primeng/api'

const createTreeNode = (key: string, label: string, children?: TreeNode[]): TreeNode => ({
  key,
  label,
  children: children || [],
})
export const geoTreeNodeAdapter = (geoObject: GeoObject): TreeNode => {
  const { _id, name, sensors, children } = geoObject

  const mappedChildren: TreeNode[] = children.map(geoTreeNodeAdapter)

  const sensorNodes: TreeNode[] = sensors.map(({ id, name }) => createTreeNode(id, `(sensor) ${name}`))

  return createTreeNode(_id, name, mappedChildren.concat(sensorNodes))
}
