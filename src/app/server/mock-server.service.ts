import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { GeoObject } from '../models'
import { geoObjectsResponse } from './db'

export interface FindParams {
  types?: number[]
  search?: string
}

@Injectable({
  providedIn: 'root',
})
export class MockServerService {
  find({ types, search }: FindParams): Observable<GeoObject[]> {
    const filterByType = types?.length
      ? geoObjectsResponse.filter(geoObject => types?.includes(geoObject.type))
      : []

    const filterBySearch = search ? filterByType.filter(geoObject => this.deepSearchByKey(geoObject, search)) : filterByType

    return of(filterBySearch)
  }

  deepSearchByKey(geoObject: GeoObject, search: string, key: keyof GeoObject = 'name'): boolean {
    search = search.toLowerCase()
    if (geoObject[key]?.toString().toLowerCase().includes(search)) {
      return true
    }

    if (geoObject.children.length > 0) {
      return geoObject.children.some(child => this.deepSearchByKey(child, search))
    }

    return false
  }
}
