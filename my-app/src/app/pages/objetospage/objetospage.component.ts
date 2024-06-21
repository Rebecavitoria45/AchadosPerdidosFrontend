import { Component, OnInit } from '@angular/core';
import { Objeto } from '../../models/Objetos';
import { ObjetosService } from '../../services/objetos.service';

@Component({
  selector: 'app-objetospage',
  templateUrl: './objetospage.component.html',
  styleUrl: './objetospage.component.css'
})
export class ObjetospageComponent {
  objetos: Objeto[] = [];
    objetosGeral : Objeto[]= [];

  constructor(private ObjetoService: ObjetosService){}
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

}
