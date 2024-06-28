import { Component, OnInit } from '@angular/core';
import { Objeto } from '../../models/Objetos';
import { ObjetosService } from '../../services/objetos.service';
import { MostrardetalhesobjetosComponent } from '../../components/mostrardetalhesobjetos/mostrardetalhesobjetos.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-objetospage',
  templateUrl: './objetospage.component.html',
  styleUrl: './objetospage.component.css'
})
export class ObjetospageComponent {
  objetos: Objeto[] = [];
    objetosGeral : Objeto[]= [];

  constructor(private ObjetoService: ObjetosService,public dialog:MatDialog){}
  ngOnInit(): void {
    this.ObjetoService.GetObjetos().subscribe(data =>{
     const dados = data.dados;
     dados.map((item) =>{
      console.log(item)
     })

     this.objetos = data.dados;
     this.objetosGeral = data.dados;
     
    });
  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();
    this.objetos = this.objetosGeral.filter(objeto=>{
      return objeto.nome.toLocaleLowerCase().includes(value);
    }

    )
  }
  openDialogobjetos(id?: number){
    this.dialog.open(MostrardetalhesobjetosComponent, {
      width: '500px',
      height: '450px',
      data: {
        id : id
      }
  });
 }
}
