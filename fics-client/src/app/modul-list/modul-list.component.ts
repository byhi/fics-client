import { Component, OnInit } from '@angular/core';
import { ModulService } from '../modul.service';
import { Modul } from '../modul';
import { RendszerService } from '../rendszer.service';
import { Rendszer } from '../rendszer';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modul-list',
  templateUrl: './modul-list.component.html',
  styleUrls: ['./modul-list.component.css']
})
export class ModulListComponent implements OnInit {

  modulok: Array<any>;  
  rendszer: Rendszer;
  
  constructor(
  private modulService: ModulService, 
  private rendszerService: RendszerService,
  private route: ActivatedRoute,
  private location: Location) { 
  }

  ngOnInit() {
	 this.getRendszer();
  } 
  
  getRendszer(): void {
	const id = +this.route.snapshot.paramMap.get('id');
   this.rendszerService.getRendszer(id).subscribe(
   data =>this.rendszer = data);  
  }

  deleteModul(modul: Modul): void {
	const id = +this.route.snapshot.paramMap.get('id');
    this.modulService.deleteModul(modul).subscribe(() => this.getRendszer());
  }
  
  goBack(): void {
    this.location.back();
  }
}