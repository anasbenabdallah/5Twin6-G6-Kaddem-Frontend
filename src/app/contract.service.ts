import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  private apiUrl = 'http://localhost:8000/Kaddem/contrat/retrieve-all-contrats';

  constructor(private http: HttpClient) {}

  getContrats(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
