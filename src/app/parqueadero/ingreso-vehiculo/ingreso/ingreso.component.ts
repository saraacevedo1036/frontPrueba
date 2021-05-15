import { Movimiento } from './../../modelo/Movimiento';
import { Vehiculo } from './../../modelo/Vehiculo';
import { TipoVehiculo } from './../../modelo/TipoVehiculo';
import { ParqueaderoServicioService } from './../../../servicio/parqueadero-servicio.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.sass']
})
export class IngresoComponent implements OnInit {

  registroForm!: FormGroup;
  
  public tipoVehiculo !: TipoVehiculo[];
  public vehiculo!: Vehiculo;
  public movimiento!: Movimiento;

  constructor(  private servicio: ParqueaderoServicioService) {
   }

  ngOnInit(): void {
    this.listarTipoVehiculo();
    this.construirFormularioIngreso();
  }

  private listarTipoVehiculo(): void{
    this.servicio.listarTipoVehiculo().subscribe(
      tipoVehiculos => this.tipoVehiculo = tipoVehiculos
    )
  }

  public crearRegistro(): void{
    console.log('Este es el body' +  this.registroForm.value)
    this.vehiculo = new Vehiculo(this.registroForm.get('tipoVehiculo')?.value, this.registroForm.get('placa')?.value, this.registroForm.get('color')?.value, true);
    this.movimiento = new Movimiento(this.registroForm.get('horaIngreso')?.value,  this.vehiculo);  
    if(this.registroForm.valid){
        this.servicio.ingreoMovimiento(this.movimiento)
        .subscribe(movimiento => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Creacion Existosa',
            text: 'El ingreso del vehiculo fue exitoso',
            showConfirmButton: true
          })
        })
      }
  }

  private construirFormularioIngreso(): void{
    this.registroForm = new FormGroup({
      horaIngreso: new FormControl('', [Validators.required]),
      placa: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      tipoVehiculo: new FormControl('', [Validators.required])
    });
  }

  get formulario(){
    return this.registroForm.controls;
  }

}
