import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../interfaces/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private readonly baseURL = "http://localhost:3000/skills";
  constructor(private http:HttpClient) { }

  getSkills():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.baseURL);
  }
}
