import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from '../models/universite.model';

@Injectable({
  providedIn: 'root',
})
export class UniversiteService {
  private apiUrl = 'http://localhost:8089/Kaddem/universite';

  constructor(private http: HttpClient) {}

  retrieveAllUniversites(): Observable<Universite[]> {
    const url = `${this.apiUrl}/retrieve-all-universites`;
    return this.http.get<Universite[]>(url);
  }
}
