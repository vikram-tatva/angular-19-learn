import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  category:{id:number,name:string}[]=[
    {id:1, name:'Electronic'},
    {id:2, name:'Cloth'},
    {id:3, name:'Entertainment'},
    {id:4, name:'Kitchen'}
  ];
}
