import { TipoVehiculo } from './TipoVehiculo';
export class Vehiculo{
    id?:number;
    tipoVehiculo: TipoVehiculo;
    placa: string;
    color: string;
    estado: boolean;

    constructor(tipoVehiculo: TipoVehiculo, placa: string, color: string, estado:boolean){
        this.tipoVehiculo = tipoVehiculo;
        this.placa = placa;
        this.color = color;
        this.estado = estado;
    }
}