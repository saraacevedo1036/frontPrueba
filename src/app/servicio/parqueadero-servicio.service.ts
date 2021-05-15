import { HttpService } from './HttpService';
import { Movimiento } from './../parqueadero/modelo/Movimiento';
import { TipoVehiculo } from './../parqueadero/modelo/TipoVehiculo';
import { Injectable } from '@angular/core';

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

  public listarCarrosEnParqueadero(){
    return this.http.doGet<Movimiento[]>(`http://localhost:8080/movimiento`, this.http.optsName('Procesando listar vehiculos'));
  }

  public registrarSalidaDelVehiculo(id: number, fecha: string, movimiento: Movimiento){
    return this.http.doPut<Movimiento, boolean>(`http://localhost:8080/movimiento/${id}/${fecha}`, movimiento);
  }
}
