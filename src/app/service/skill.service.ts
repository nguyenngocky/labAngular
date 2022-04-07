import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }
    getSkills(): Observable<any> {
      return this.http.get(apiUrl);
    }

    getSkill(id: number | string): Observable<any> {
      return this.http.get(`${apiUrl}/${id}`);
    }

    createSkill(data :any): Observable<any> {
      return this.http.post(`${apiUrl}`, data);
    }

    updateSkill(id :number | string, data :any): Observable<any> {
      return this.http.put(`${apiUrl}/${id}`, data);
    }

    deleteSkill(id :number | string) {
      return this.http.delete(`${apiUrl}/${id}`)
    }
}
