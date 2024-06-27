import { Component, Inject, OnInit } from '@angular/core';
import { ObjetosService } from '../../services/objetos.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Objeto } from '../../models/Objetos';

@Component({
  selector: 'app-excluir-objetos',
  templateUrl: './excluir-objetos.component.html',
  styleUrl: './excluir-objetos.component.css'
})
export class ExcluirObjetosComponent implements OnInit{
   inputdata : any;
   objeto! : Objeto;
  constructor(private ObjetoService : ObjetosService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ExcluirObjetosComponent>) {

    
  }
  
  ngOnInit(): void {
     this.inputdata = this.data;
     this.ObjetoService.GetObjetoPorId(this.inputdata.id).subscribe((data)=>{
      this.objeto = data.dados;
     });
   }
   excluir(){
    this.ObjetoService.ExcluirObjeto(this.inputdata.id).subscribe((data)=>{
      this.ref.close();
      window.location.reload();
    })
   }
   
}
