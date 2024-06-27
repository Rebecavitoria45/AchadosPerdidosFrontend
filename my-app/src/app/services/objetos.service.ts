import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Objeto } from '../models/Objetos';
import {Response} from '../models/Response'
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class ObjetosService {

  private apiUrl = `${environment.ApiUrl}objetos`
  private id = this.loginService.getId();
   

  constructor(private http: HttpClient, private loginService:LoginService) { }

  GetObjetos():Observable<Response<Objeto[]>>{
  return this.http.get<Response<Objeto[]>>(this.apiUrl);
  }

  createObjeto(objeto : Objeto):Observable<Response<Objeto>>{
    return this.http.post<Response<Objeto>>(`${this.apiUrl}`,objeto);
  }

  GetObjetosPorUsuario():Observable<Response<Objeto[]>>{
   
    return this.http.get<Response<Objeto[]>>(`${environment.ApiUrl}usuarios/objetos/${this.id}`);
  }

  GetObjetoPorId(id : number): Observable<Response<Objeto>>{
    return this.http.get<Response<Objeto>>(`${this.apiUrl}/${id}`)
  }
  EditarObjeto(objeto: Objeto, id:number):Observable<Response<Objeto>>{
    return this.http.put<Response<Objeto>>(`${this.apiUrl}/${id}`, objeto)
  }
  ExcluirObjeto(id: number):Observable<Response<Objeto>>{
     return this.http.delete<Response<Objeto>>(`${this.apiUrl}/${id}`)
  }
}

