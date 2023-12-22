import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from '../models/Building';

const baseUrl = 'http://localhost:5001/Building';

@Injectable({
  providedIn: 'root'
})
export class BuildingServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Building[]> {
    return this.http.get<Building[]>(`${baseUrl}/get-all-with-limit/${5}`);
  }

  get(id: bigint): Observable<Building> {
    return this.http.get<Building>(`${baseUrl}/get/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add-new`, data);
  }

  update(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/update`, data);
  }

  delete(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/remove`, data);
  }

  findByTitle(name: string): Observable<Building[]> {
    return this.http.get<Building[]>(`${baseUrl}/get-by-name/${name}`);
  }
}
