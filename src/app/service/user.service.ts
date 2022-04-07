import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
    getUsers(): Observable<any> {
      return this.http.get(apiUrl);
    }

    getUser(id: number | string): Observable<any> {
      return this.http.get(`${apiUrl}/${id}`);
    }

    createUser(data :any): Observable<any> {
      return this.http.post(`${apiUrl}`, data);
    }

    updateUser(id :number | string, data :any): Observable<any> {
      return this.http.put(`${apiUrl}/${id}`, data);
    }

    deleteUser(id :number | string) {
      return this.http.delete(`${apiUrl}/${id}`)
    }
}
