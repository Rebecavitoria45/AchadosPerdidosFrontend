import { Component , EventEmitter, Input, OnInit, Output, input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Objeto } from '../../models/Objetos';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-formulario-objeto',
  templateUrl: './formulario-objeto.component.html',
  styleUrl: './formulario-objeto.component.css'
})
export class FormularioObjetoComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Objeto>();
  @Input( ) btnAcao!: string;
  @Input () btnTitulo!: string;
  objetoform! : FormGroup;
  @Input() dadosObjeto: Objeto | null= null;
  constructor(private loginService:LoginService) {
  
  }
  ngOnInit(): void {
   
   this.objetoform = new FormGroup({
    idObjeto : new FormControl(this.dadosObjeto? this.dadosObjeto.idObjeto : 0),
     Nome : new FormControl( this.dadosObjeto? this.dadosObjeto.nome : '', [Validators.required]),
     Descricao : new FormControl(   this.dadosObjeto? this.dadosObjeto.descricao :'', [Validators.required]),
     Categoria : new FormControl(this.dadosObjeto? this.dadosObjeto.categoria :'', [Validators.required]),
     FotoObjeto : new FormControl(this.dadosObjeto? this.dadosObjeto.fotoObjeto :''),
     UsuarioId : new FormControl(this.loginService.getId()),
     Ativo : new FormControl(true)
   }); 
  }

  submit(){
 this.onSubmit.emit(this.objetoform.value);

  }

  
}
