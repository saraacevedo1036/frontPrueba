import { ParqueaderoServicioService } from './servicio/parqueadero-servicio.service';
import { HttpService } from './servicio/HttpService';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParqueaderoComponentComponent } from './parqueadero/parqueadero-component/parqueadero-component.component';
import { FooterComponent } from './parqueadero/footer/footer.component';
import { IngresoComponent } from './parqueadero/ingreso-vehiculo/ingreso/ingreso.component';
import { SalidaComponent } from './parqueadero/ingreso-vehiculo/salida/salida.component';
import { HttpClientModule }  from '@angular/common/http'
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParqueaderoComponentComponent,
    FooterComponent,
    IngresoComponent,
    SalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, ParqueaderoServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
