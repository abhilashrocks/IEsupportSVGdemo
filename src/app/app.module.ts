import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faSortUp } from '@fortawesome/free-solid-svg-icons';
library.add(faCoffee);
library.add(faSortUp);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
