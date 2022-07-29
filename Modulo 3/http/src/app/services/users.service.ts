import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = "https://reqres.in/api/users"
  constructor(private httpClient: HttpClient) { }
  getAll(): Promise<any>{
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl))
  }

  getById(id:number): Promise<any>{
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}/${id}`))
  }
}
