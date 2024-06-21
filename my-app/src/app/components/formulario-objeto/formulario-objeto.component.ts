import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Objeto } from '../../models/Objetos';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-formulario-objeto',
  templateUrl: './formulario-objeto.component.html',
  styleUrl: './formulario-objeto.component.css'
})
export class FormularioObjetoComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Objeto>();
  objetoform! : FormGroup;

  constructor(private loginService:LoginService) {
  
  }
  ngOnInit(): void {
   
   this.objetoform = new FormGroup({
     Nome : new FormControl(''),
     Descricao : new FormControl(''),
     Categoria : new FormControl(''),
     FotoObjeto : new FormControl(''),
     UsuarioId : new FormControl(this.loginService.getId()),
     Ativo : new FormControl(true)
   }); 
  }

  submit(){
 this.onSubmit.emit(this.objetoform.value);

  }
}
