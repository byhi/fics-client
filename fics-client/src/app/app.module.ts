import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RendszerService } from './rendszer.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RendszerComponent } from './rendszer/rendszer.component';
import { RendszerListComponent } from './rendszer-list/rendszer-list.component';
import { ModulListComponent } from './modul-list/modul-list.component';
import { ModulComponent } from './modul/modul.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RendszerComponent,
	RendszerListComponent,
	ModulListComponent,
	ModulComponent,
	LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	ReactiveFormsModule,
	FormsModule
  ],
  providers: [RendszerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
