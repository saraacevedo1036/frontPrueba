import { Factura } from './Factura';
import { Tarifa } from './Tarifa';
import { Vehiculo } from './Vehiculo';
export class Movimiento {

    id!: number;
    horaIngreso: Date;
    horaSalida!: Date;
    vehiculo: Vehiculo;
    tarifa!: Tarifa;
    factura!: Factura;

    constructor( horaIngreso:Date, vehiculo:Vehiculo){
        this.horaIngreso = horaIngreso;
        this.vehiculo = vehiculo;
    }
}