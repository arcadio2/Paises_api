import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl:string="https://restcountries.eu/rest/v2"; 
  get httParams(){
    return new HttpParams().set('fields', 'name;capital;flag;population;alpha2Code');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.baseUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httParams}); 
    
  }
  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.baseUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httParams}); 
  }
  paisxCodigo(id: string): Observable<Country>{
    const url = `${this.baseUrl}/alpha/${id}`;
    return this.http.get<Country>(url); 
  }
  buscarRegion(region:string):Observable<Country[]>{
    const url = `${this.baseUrl}/region/${region}`;
    return this.http.get<Country[]>(url , {params:this.httParams}); 
  }
  
}
