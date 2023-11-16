import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  private baseUrl = 'http://localhost:8089/Kaddem/etudiant';

  constructor(private http: HttpClient) {}

  getEtudiants(): Observable<any> {
    return this.http.get(`${this.baseUrl}/retrieve-all-etudiants`);
  }

  removeEtudiant(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/removeEtudiant/${id}`);
  }
}
