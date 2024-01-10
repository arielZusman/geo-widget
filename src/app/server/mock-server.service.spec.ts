/// <reference types="@types/jest" />

import { MockServerService } from './mock-server.service'
import { GeoObject } from '../models'

describe('MockServerService', () => {
  let service: MockServerService

  beforeEach(() => {
    service = new MockServerService()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
describe('deepSearchByKey', () => {
  let service: MockServerService

  beforeEach(() => {
    service = new MockServerService()
  })

  it('should return true when search string is found', () => {
    const geoObject: GeoObject = {
      _id: '1',
      type: 1,
      name: 'Test Object',
      sensors: [],
      children: [],
    }
    const search = 'Test'
    const key: keyof GeoObject = 'name'

    const result = service.deepSearchByKey(geoObject, search, key)

    expect(result).toBeTruthy()
  })

  it('should return true when search string is found in child', () => {
    const geoObject: GeoObject = {
      _id: '1',
      type: 1,
      name: 'Parent Object',
      sensors: [],
      children: [
        {
          _id: '2',
          type: 2,
          name: 'Child Object',
          sensors: [],
          children: [],
        },
      ],
    }
    const search = 'Child'
    const key: keyof GeoObject = 'name'

    const result = service.deepSearchByKey(geoObject, search, key)

    expect(result).toBe(true)
  })

  it('should return false when search string is not found', () => {
    const geoObject: GeoObject = {
      _id: '1',
      type: 1,
      name: 'Parent Object',
      sensors: [],
      children: [
        {
          _id: '2',
          type: 2,
          name: 'Child Object',
          sensors: [],
          children: [],
        },
      ],
    }
    const search = 'Test'
    const key: keyof GeoObject = 'name'

    const result = service.deepSearchByKey(geoObject, search, key)

    expect(result).toBe(false)
  })
})
