import { Component } from '@angular/core';
import { Documento } from '../../models/Documentos';
import { DocumentosService } from '../../services/documentos.service';

@Component({
  selector: 'app-documentospage',
  templateUrl: './documentospage.component.html',
  styleUrl: './documentospage.component.css'
})
export class DocumentospageComponent {
  documentos: Documento[] = [];
   documentosGeral : Documento[]= [];

   constructor(private documentoService: DocumentosService){}
   ngOnInit(): void {
    this.documentoService.GetDocumentos().subscribe(data =>{
     const dados = data.dados;
     dados.map((item) =>{
      console.log(item)
     })

     this.documentos= data.dados;
     this.documentosGeral = data.dados;
     
    });
  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();
    this.documentos = this.documentosGeral.filter(documento=>{
      return documento.nomeCompletoDocumento.toLocaleLowerCase().includes(value);
    }

    )
  }
}
