import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  name = "Angular 19";
  handelBtnClick(){
    this.name="Vikram Dharajiya"
  }
  handelMouseOver($event:Event){
    console.log("function call", $event.type)
  }
}
