import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private route:ActivatedRoute){}

  id:string|null="";
  productsToDisplay:{pid:number,name:string,cid:number}[] = [];
  products:{pid:number,name:string,cid:number}[] = [
    {pid:1, name:'Electronic 1', cid:1},{pid:2, name:'Electronic 2', cid:1},
    {pid:3, name:'Electronic 3', cid:1},{pid:4, name:'Electronic 4', cid:1},
    {pid:5, name:'Cloth 1', cid:2},{pid:6, name:'Cloth 2', cid:2},
    {pid:7, name:'Cloth 3', cid:2},{pid:8, name:'Cloth 4', cid:2},
    {pid:9, name:'Entertainment 1', cid:3},{pid:10, name:'Entertainment 2', cid:3},
    {pid:11, name:'Entertainment 3', cid:3},{pid:12, name:'Entertainment 4', cid:3},
    {pid:13, name:'Kitchen 1', cid:4},{pid:14, name:'Kitchen 2', cid:4},
    {pid:15, name:'Kitchen 3', cid:4},{pid:16, name:'Kitchen 4', cid:4},
  ];

  ngOnInit(){
    if (this.id != null){      
      this.route.params.subscribe(p => this.id = p["id"])
      this.productsToDisplay = this.products.filter(f=> f.cid.toString() == this.id);
    }
    else{
      this.productsToDisplay = this.products;
    }
  }
}
