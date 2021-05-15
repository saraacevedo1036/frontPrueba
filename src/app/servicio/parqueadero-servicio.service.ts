import { HttpService } from './HttpService';
import { Movimiento } from './../parqueadero/modelo/Movimiento';
import { TipoVehiculo } from './../parqueadero/modelo/TipoVehiculo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoServicioService {

  constructor(protected http: HttpService) { 
  }

  public ingreoMovimiento(movimiento : Movimiento){
    return this.http.doPost<Movimiento, boolean>(`http://localhost:8080/movimiento`, movimiento);
  }

  public listarTipoVehiculo(){
    return this.http.doGet<TipoVehiculo[]>(`http://localhost:8080/tipo_vehiculo`, this.http.optsName('Consulta de tipo de vehiculo'));
  }
}
