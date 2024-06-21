import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError, map  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = `${environment.ApiUrl}usuarios/login`


  constructor(private httpClient : HttpClient) { 

  }

  public login(email:string, senha:string): Observable<any>{
     return this.httpClient.post(this.apiUrl,{email,senha}, {responseType:'json'}).pipe(
      map((data)=>this.setIdLocalStorage(data)),
      catchError((err)=>{
        this.removerIdLocalStorage();
        throw 'Email ou senha inválido'
      }
      )
     )
  }

  public getId():string | null{
    return localStorage.getItem(environment.usuarioId);
}

  private setIdLocalStorage(response:any):void{
    const {type, usuarioId, _} = response;
    localStorage.setItem(environment.usuarioId, response.usuarioId)
}
  public removerIdLocalStorage():void{
  localStorage.removeItem(environment.usuarioId);
}
}
