/// <reference types="@angular/localize" />

import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app/app.component'
import { provideAnimations } from '@angular/platform-browser/animations'
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser'

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimations(),
  ],
})
  .catch(err => console.error(err))
