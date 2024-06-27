import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { Documento } from '../../models/Documentos';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-formulario-documento',
  templateUrl: './formulario-documento.component.html',
  styleUrl: './formulario-documento.component.css'
})
export class FormularioDocumentoComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Documento>();
  @Input( ) btnAcao!: string;
  @Input () btnTitulo!: string;
  documentoform! : FormGroup;
  @Input() dadosDocumento: Documento | null= null;

  constructor(private loginService:LoginService) {}

  ngOnInit(): void {
   
    this.documentoform = new FormGroup({
     idDocumento : new FormControl(this.dadosDocumento? this.dadosDocumento.idDocumento : 0),
     tipoDocumento : new FormControl( this.dadosDocumento? this.dadosDocumento.tipoDocumento : '', [Validators.required]),
     numeroDocumento : new FormControl(   this.dadosDocumento? this.dadosDocumento.numeroDocumento :'', [Validators.required]),
     estadoDocumento : new FormControl(this.dadosDocumento? this.dadosDocumento.estadoDocumento :'', [Validators.required]),
     nomeCompletoDocumento : new FormControl(this.dadosDocumento? this.dadosDocumento.nomeCompletoDocumento :''),
      UsuarioId : new FormControl(this.loginService.getId()),
    }); 
   }
 
   submit(){
  this.onSubmit.emit(this.documentoform.value);
 
   }

}
