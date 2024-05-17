import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Nave } from './nave';


@Injectable({
  providedIn: 'root'
})
export class NavesService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }
  getNaves():Observable<Nave[]>{return this.http.get<Nave[]>(this.apiUrl)}
}
