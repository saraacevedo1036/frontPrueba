import { SalidaComponent } from './parqueadero/ingreso-vehiculo/salida/salida.component';
import { IngresoComponent } from './parqueadero/ingreso-vehiculo/ingreso/ingreso.component';
import { ParqueaderoComponentComponent } from './parqueadero/parqueadero-component/parqueadero-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: ParqueaderoComponentComponent},
  {path: 'ingreso', component: IngresoComponent},
  {path: 'salida', component: SalidaComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
