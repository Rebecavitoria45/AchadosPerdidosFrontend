import { Component,  Inject, OnInit } from '@angular/core';
import { Documento } from '../../models/Documentos';
import { DocumentosService } from '../../services/documentos.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluirdocumentos',
  templateUrl: './excluirdocumentos.component.html',
  styleUrl: './excluirdocumentos.component.css'
})
export class ExcluirdocumentosComponent implements OnInit{
  inputdata : any;
  documento! : Documento;
 constructor(private documentoService : DocumentosService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ExcluirdocumentosComponent>) {}

 ngOnInit(): void {
  this.inputdata = this.data;
  this.documentoService.GetDocumentoPorId(this.inputdata.id).subscribe((data)=>{
   this.documento = data.dados;
  });
}
excluir(){
 this.documentoService.ExcluirDocumento(this.inputdata.id).subscribe((data)=>{
   this.ref.close();
   window.location.reload();
 })
}
onClose(): void {
  this.ref.close();
 }
}
