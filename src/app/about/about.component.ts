import { Component, OnInit } from '@angular/core';
import { MyrecipesService } from '../myrecipes.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  recipes:any;

  constructor(private service: MyrecipesService) { 
    this.recipes= this.service.obtenerReceta;
  }

  ngOnInit() {
  }

}
