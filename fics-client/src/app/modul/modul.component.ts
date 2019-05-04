import { Component, OnInit } from '@angular/core';
import { Modul } from '../modul';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ModulService } from '../modul.service';
import { RendszerService } from '../rendszer.service';
import { Rendszer } from '../rendszer';

@Component({
  selector: 'app-modul',
  templateUrl: './modul.component.html',
  styleUrls: ['./modul.component.css']
})
export class ModulComponent implements OnInit {
rendszerek: Array<any>;
 modul: Modul;
 rendszer: Rendszer;

  constructor(
  private modulService: ModulService,
   private rendszerService: RendszerService,
  private route: ActivatedRoute,
  private location: Location) {
  }

  ngOnInit() {
   const sid = +this.route.snapshot.paramMap.get('sid');
   const mid = +this.route.snapshot.paramMap.get('mid');   
	if(sid != 0 && mid != 0){
		this.getModul(mid);	
		this.getRendszer(sid); 	
	}  else {
	  if(sid != 0){ this.getRendszer(sid);}  else {this.getEmptyRendszer();}
		this.getEmptyModul()		
	}
	this.getRendszerek();	
  }
  
	
	
	goBack(): void {
	  this.location.back();
	}
	
	public updateModul(modul: Modul, rendszer: Rendszer) {	
		this.modulService.updateModul(modul, rendszer.id) .subscribe(() => this.goBack());
	 }
	 
	public createModul(modul: Modul, rendszer: Rendszer) {		
		this.modulService.createModul(modul, rendszer.id) .subscribe(() => this.goBack());
	} 
 
    getRendszerek(){
		this.rendszerService.getRendszerek().subscribe(
		data =>this.rendszerek = data); 
	}

	getEmptyModul(){
		this.modul = {
			 id: 0,
			 name: "",
			 desc: ""
		}	
	}	
	getEmptyRendszer(){
		this.rendszer = {
			 id: 0,
			 name: "",
			 desc: "",
			 moduls: []
		}
	}
	getModul(number){
		this.modulService.getModul(number).subscribe(
		data =>this.modul = data);
	}
	
	getRendszer(number){
		this.rendszerService.getRendszer(number).subscribe(
		data =>this.rendszer = data);
	}
}
