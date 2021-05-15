export class Factura{
    id?: number;
    valorTotal: number;

    constructor(id: number, valorTotal: number){
        this.id = id;
        this.valorTotal = valorTotal;
    }
}