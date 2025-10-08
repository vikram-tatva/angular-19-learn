import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseURL = "http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  getAllUserList():Observable<User[]>{
    return this.http.get<User[]>(this.baseURL);
  }

  saveUser(userData:User):Observable<User>{
    return this.http.post<User>(this.baseURL, userData);
  }

  getUserById(id:string):Observable<User>{
    return this.http.get<User>(this.baseURL+'/'+id);
  }

  updateUser(user:User):Observable<User>{
    return this.http.post<User>(this.baseURL+'/'+user.id, user)
  }

  deleteUserById(id:string):Observable<User>{
    return this.http.delete<User>(this.baseURL+'/'+id);
  }
}
