import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = ' http://localhost:3000/schools';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }
    getSchools(): Observable<any> {
      return this.http.get(apiUrl);
    }

    getSchool(id: number | string): Observable<any> {
      return this.http.get(`${apiUrl}/${id}`);
    }

    createSchool(data :any): Observable<any> {
      return this.http.post(`${apiUrl}`, data);
    }

    updateSchool(id :number | string, data :any): Observable<any> {
      return this.http.put(`${apiUrl}/${id}`, data);
    }

    deleteSchool(id :number | string) {
      return this.http.delete(`${apiUrl}/${id}`)
    }
}
