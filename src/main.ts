/// <reference types="@angular/localize" />

import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app/app.component'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { TreeModule } from 'primeng/tree'
import { MultiSelectModule } from 'primeng/multiselect'
import { InputTextModule } from 'primeng/inputtext'
import { provideAnimations } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'
import { DropdownModule } from 'primeng/dropdown'
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser'

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, DropdownModule, ReactiveFormsModule, InputTextModule, MultiSelectModule, TreeModule, NgxJsonViewerModule),
    provideAnimations(),
  ],
})
  .catch(err => console.error(err))
