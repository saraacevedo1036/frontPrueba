import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParqueaderoComponentComponent } from './parqueadero/parqueadero-component/parqueadero-component.component';
import { FooterComponent } from './parqueadero/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ParqueaderoComponentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
