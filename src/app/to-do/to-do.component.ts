import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  todo:string = "";
  todos:{id:number,todo:string} [] = [];

  addToDo(){
    if(this.todo != ""){      
      this.todos.push({id:this.todos.length+1, todo:this.todo});
      this.todo="";
    }
  }

  deleteToDo(id:number){
    this.todos = this.todos.filter(x => x.id!=id);
  }
}
