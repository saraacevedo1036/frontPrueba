import { Movimiento } from './../../modelo/Movimiento';
import { ParqueaderoServicioService } from './../../../servicio/parqueadero-servicio.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.sass']
})
export class SalidaComponent implements OnInit {

  public movimiento !: Movimiento[];
  fechaActual: Date;
  movimientoTemporar!: Movimiento;

  constructor(private servicio: ParqueaderoServicioService) {
    this.fechaActual = new Date();
  }

  ngOnInit(): void {
    console.log('fecha actual es' + this.fechaActual)
    this.listarVehiculosDeParqueadero();
  }

  getNowDate() {
    //return string
    var returnDate = "";
    //get datetime now
    var today = new Date();
    //split
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //because January is 0!
    var yyyy = today.getFullYear();
    //Interpolation date
    returnDate += `${yyyy}-`;

    if (mm < 10) {
      returnDate += `0${mm}-`;
    } else {
      returnDate += `${mm}-`;
    }

    if (dd < 10) {
      returnDate += `0${dd}`;
    } else {
      returnDate += `${dd}`;
    }
        return returnDate;
  }

  obtenerObjeto(movimiento: Movimiento) {
    this.servicio.registrarSalidaDelVehiculo(movimiento.id, this.getNowDate(), movimiento).subscribe(actualizar => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Salida Existosa',
        text: 'La salida del vehiculo fue exitosa',
        showConfirmButton: true
      })
    })
  }

  public listarVehiculosDeParqueadero(): void {
    this.servicio.listarCarrosEnParqueadero().subscribe(
      vehiculos => this.movimiento = vehiculos
    )
  }


}
