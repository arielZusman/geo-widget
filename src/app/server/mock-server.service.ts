import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {GeoObject} from "../models";
import {geoObjectsResponse} from './db'

export interface FindParams {
  types?: number[];
  search?: string;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MockServerService {


  find({types, search, id}: FindParams): Observable<GeoObject[]> {
    const searchValue = search?.toLowerCase() || null
    const filterByType = types?.length ?
      geoObjectsResponse.filter(geoObject => types?.includes(geoObject.type)) : []

    const filterBySearch = searchValue ? filterByType.filter(geoObject => this.deepSearchByName(geoObject, searchValue)) : filterByType

    return of(filterBySearch)
  }

  deepSearchByName(geoObject: GeoObject, search: string): boolean {
    if (geoObject.name.toLowerCase().includes(search)) {
      return true;
    }

    if (geoObject.children.length > 0) {
      return geoObject.children.some(child => this.deepSearchByName(child, search))
    }

    return false
  }
}


