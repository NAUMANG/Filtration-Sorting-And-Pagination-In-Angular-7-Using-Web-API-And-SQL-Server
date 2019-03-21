import { Injectable } from '@angular/core';
import { IUser } from './model/iuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "http://localhost:50468/";

  constructor(private http: HttpClient) { }

  AllUserDetails(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url + 'Api/UserAPI/AllUser')
  }
}
