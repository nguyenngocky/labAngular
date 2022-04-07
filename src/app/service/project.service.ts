import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/projects';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }
    getProjects(): Observable<any> {
      return this.http.get(apiUrl);
    }

    getProject(id: number | string): Observable<any> {
      return this.http.get(`${apiUrl}/${id}`);
    }

    createProject(data :any): Observable<any> {
      return this.http.post(`${apiUrl}`, data);
    }

    updateProject(id :number | string, data :any): Observable<any> {
      return this.http.put(`${apiUrl}/${id}`, data);
    }

    deleteProject(id :number | string) {
      return this.http.delete(`${apiUrl}/${id}`)
    }
}
