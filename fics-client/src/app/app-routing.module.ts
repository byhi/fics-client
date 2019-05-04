import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RendszerListComponent } from './rendszer-list/rendszer-list.component';
import { RendszerComponent } from './rendszer/rendszer.component';
import { ModulListComponent } from './modul-list/modul-list.component';
import { ModulComponent } from './modul/modul.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{ path: 'login', component: LoginComponent},
 { path: '', component: RendszerListComponent },
 { path: 'rendszer-list', component: RendszerListComponent },
 { path: 'modul-list/:id', component: ModulListComponent },
 { path: 'rendszer/:id', component: RendszerComponent },
  { path: 'rendszer', component: RendszerComponent },
  { path: 'modul/:sid/:mid', component: ModulComponent },
 { path: 'modul/:id', component: ModulComponent },
 { path: 'modul', component: ModulComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
