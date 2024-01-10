import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { combineLatest, debounceTime, map, startWith, switchMap, tap } from 'rxjs'
import { GeoService } from './geo.service'
import { geoTreeNodeAdapter } from './utils'
import { AsyncPipe, JsonPipe } from '@angular/common'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { InputTextModule } from 'primeng/inputtext'
import { MultiSelectModule } from 'primeng/multiselect'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MultiSelectModule, ReactiveFormsModule, InputTextModule, NgxJsonViewerModule, AsyncPipe, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private geoService = inject(GeoService)

  readonly filters = [
    { label: $localize`:@@type_zone:Zones`, value: 1 },
    { label: $localize`:@@type_sites:Sites`, value: 0 },
    { label: $localize`:@@type_placemark:Placemarks`, value: 4 },
    { label: $localize`:@@type_layer:Layers`, value: 3 },
  ]

  filter = new FormControl(this.filters.map(filter => filter.value))
  search = new FormControl('')

  private filter$ = this.filter.valueChanges.pipe(startWith(this.filter.value))
  private search$ = this.search.valueChanges.pipe(debounceTime(200), startWith(this.search.value))

  result$ = combineLatest([this.filter$, this.search$]).pipe(
    switchMap(([filter, search]) => {
      return this.geoService.find(filter!, search!)
    }),
    map(geoObjects => geoObjects.map(geoObject => geoTreeNodeAdapter(geoObject))),
    tap(console.log),
  )
}
