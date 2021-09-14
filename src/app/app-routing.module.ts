import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { NuevoProspectoComponent } from './prospectos/nuevoprospecto.component';
import { VerProspectoComponent } from './prospectos/verprospecto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listado-prospectos', component: ProspectosComponent },
  {path: 'nuevo-prospecto',component: NuevoProspectoComponent},
  {path: 'prospecto/:accion/:id',component: VerProspectoComponent},
  {path: '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
