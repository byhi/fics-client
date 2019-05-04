import { Component, OnInit } from '@angular/core';
import { RendszerService } from '../rendszer.service';
import { Rendszer } from '../rendszer';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rendszer-list',
  templateUrl: './rendszer-list.component.html',
  styleUrls: ['./rendszer-list.component.css']
})
export class RendszerListComponent implements OnInit {

  rendszerek: Array<any>;
  
  selectedRendszer: Rendszer;
  
  constructor(private rendszerService: RendszerService) { }

  ngOnInit() {
	  this.getRendszerek();
  } 
  getRendszerek(): void {
   this.rendszerService.getRendszerek().subscribe(
   data =>this.rendszerek = data); 
}
   onSelect(rendszer: Rendszer): void {
    this.selectedRendszer = rendszer;
  }
  editRendszer(rendszer: Rendszer): void {
    this.selectedRendszer = rendszer;
  }
  
   deleteRendszer(rendszer: Rendszer): void {
    this.rendszerService.deleteRendszer(rendszer).subscribe(() => this.getRendszerek());
  }

}
