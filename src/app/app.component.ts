import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './interfaces/User';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SkillService } from './services/skill.service';
import { Skill } from './interfaces/Skill';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Basic of Angular 19';
  skills:Skill[] = [];
  userList:User[] = [];  
  userForm:FormGroup = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl(),
    email : new FormControl(),
    contact : new FormControl(),
    gender : new FormControl(),
    skills : new FormArray([]),
    profileSummary : new FormControl()
  });

  constructor(private userService:UserService, private skillService:SkillService){}

  ngOnInit(){
    this.GetUser();
    this.GetSkills();
  }

  GetSkills(){
    this.skillService.getSkills().subscribe((skills:Skill[])=>{
        this.skills = skills;
    });
  }

  GetUser(){
    this.userService.getAllUserList().subscribe((userdata:User[]) =>{
      this.userList = userdata;
    });
  }

  SaveUser(){
    const userData:User = this.userForm.value;
    console.log(userData);
    this.userService.saveUser(userData).subscribe(()=>{
      this.GetUser();
    });
  }

  selectUser(id:string){
    this.userService.getUserById(id).subscribe((userData:User)=>{
      this.userForm.patchValue(userData);
    });
  }

  deleteUser(id:string){
    console.log(id);
    this.userService.deleteUserById(id).subscribe((userdata:User)=>{
      console.log(userdata);
      this.GetUser();
    });
  }

  handelUserSkills(event:Event){
    let target = event.target as HTMLInputElement;
    let userSkill:string[] = this.userForm.value.skills == null || '' ? [] : this.userForm.value.skills?.split(",");
    
    if (target.checked){
      userSkill.push(target.value)
    }
    else{
      userSkill = userSkill.filter(us => us.toLowerCase() != target.value.toLocaleLowerCase());
    }

    this.userForm.value.skills = userSkill.toString()
  }
}
