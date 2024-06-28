import { Component,  OnInit ,  Inject} from '@angular/core';
import { Objeto } from '../../models/Objetos';
import { ObjetosService } from '../../services/objetos.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mostrardetalhesobjetos',
  templateUrl: './mostrardetalhesobjetos.component.html',
  styleUrl: './mostrardetalhesobjetos.component.css'
})
export class MostrardetalhesobjetosComponent implements OnInit {
  inputdata : any;
  objeto! : Objeto;
  constructor(private objetoService : ObjetosService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<MostrardetalhesobjetosComponent>) {}

  
 ngOnInit(): void {
  this.inputdata = this.data;
  this.objetoService.GetObjetoPorId(this.inputdata.id).subscribe((data)=>{
  this.objeto = data.dados;
  });
  
}
onClose(): void {
  this.ref.close();
 }

}
