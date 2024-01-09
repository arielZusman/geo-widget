import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DropdownModule} from "primeng/dropdown";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {TreeModule} from "primeng/tree";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        DropdownModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        InputTextModule,
        MultiSelectModule,
        TreeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
