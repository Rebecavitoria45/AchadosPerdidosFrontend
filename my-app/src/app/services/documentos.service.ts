import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { LoginService } from './login.service';
import { Documento } from '../models/Documentos';
import { Observable } from 'rxjs';
import {Response} from '../models/Response'

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  private apiUrl = `${environment.ApiUrl}documentos`
  private id = this.loginService.getId();

  constructor(private http: HttpClient, private loginService:LoginService) { }

   GetDocumentos():Observable<Response<Documento[]>>{
    return this.http.get<Response<Documento[]>>(this.apiUrl);
    }

    createDocumento(documento : Documento):Observable<Response<Documento>>{
      return this.http.post<Response<Documento>>(`${this.apiUrl}`, documento);
    }
   
  GetDocumentosPorUsuario():Observable<Response<Documento[]>>{
   
      return this.http.get<Response<Documento[]>>(`${environment.ApiUrl}usuarios/documentos/${this.id}`);
    }
  
  GetDocumentoPorId(id : number): Observable<Response<Documento>>{
      return this.http.get<Response<Documento>>(`${this.apiUrl}/${id}`)
    }

    EditarDocumento(documento: Documento, id:number):Observable<Response<Documento>>{
      return this.http.put<Response<Documento>>(`${this.apiUrl}/${id}`, documento)
    }

  ExcluirDocumento(id: number):Observable<Response<Documento>>{
      return this.http.delete<Response<Documento>>(`${this.apiUrl}/${id}`)
   }
}
