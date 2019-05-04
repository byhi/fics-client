import { Component, OnInit, Input } from '@angular/core';
import { RendszerService } from '../rendszer.service';
import { Rendszer } from '../rendszer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Modul } from '../modul';


@Component({
  selector: 'app-rendszer',
  templateUrl: './rendszer.component.html',
  styleUrls: ['./rendszer.component.css']
})
export class RendszerComponent implements OnInit {
  
  rendszer: Rendszer;
  
  constructor(
  private rendszerService: RendszerService,
  private route: ActivatedRoute,
  private location: Location) {
  }

  ngOnInit() {
	    this.getRendszer();
  }
  
  getRendszer(): void {	 
   const id = +this.route.snapshot.paramMap.get('id');
    if(id != 0){
		this.rendszerService.getRendszer(id).subscribe(
   data =>this.rendszer = data);
	}  else {
		this.rendszer = {
	 id: 0,
	 name: "",
	 desc: "",
	 moduls: []
}
	}
}
 goBack(): void {
  this.location.back();
}
public updateRendszer(rendszer: Rendszer) {
    this.rendszerService.updateRendszer(rendszer) .subscribe(() => this.goBack());
  }
 public createRendszer(rendszer: Rendszer) {
    this.rendszerService.createRendszer(rendszer) .subscribe(() => this.goBack());
  } 
 
}
