import { Component, OnInit } from '@angular/core';
import { MyrecipesService } from '../myrecipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes:any;

  constructor(private service: MyrecipesService) { 
    this.recipes= this.service.obtenerReceta();
  }

  ngOnInit() {
  }

}
