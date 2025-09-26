import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {name:"TV",category:"Electronic"},
    {name:"Refridgretor",category:"Electronic"},
    {name:"Fan",category:"Electronic"},
    {name:"Towel",category:"Cloth"},
    {name:"Shirt",category:"Cloth"},
    {name:"T-Shirt",category:"Cloth"},
    {name:"Shock",category:"Cloth"}
  ]

  category = "Electronic";

  showElectric(){
    this.category = "Electronic"
  }

  showCloth(){
    this.category = "Cloth"
  }
}
