export class Tarifa{
    id?: number;
    valor: number;
    descripcion: string;

    constructor(id:number, valor: number, descripcion:string){
        this.id = id;
        this.valor = valor;
        this.descripcion = descripcion;
    }
}