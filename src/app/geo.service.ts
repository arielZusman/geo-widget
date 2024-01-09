import {inject, Injectable} from '@angular/core';
import {MockServerService} from "./server/mock-server.service";
import {Observable} from "rxjs";
import {GeoObject} from "./models";

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  private mockServer = inject(MockServerService)

  find(types: number[], search: string): Observable<GeoObject[]> {
    return this.mockServer.find({types : types, search : search})
  }
}
