import { Component, OnInit } from '@angular/core';
import { Objeto } from '../../models/Objetos';
import { ObjetosService } from '../../services/objetos.service';
import { Router, NavigationEnd } from '@angular/router';
import { ExcluirObjetosComponent } from '../../components/excluir-objetos/excluir-objetos.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DocumentosService } from '../../services/documentos.service';
import { Documento } from '../../models/Documentos';
import { ExcluirdocumentosComponent } from '../../components/excluirdocumentos/excluirdocumentos.component';
@Component({
  selector: 'app-meusitens',
  templateUrl: './meusitens.component.html',
  styleUrl: './meusitens.component.css'
})
export class MeusitensComponent implements OnInit {
  meusobjetos: Objeto[] = [];
  isLoading: boolean = true;
 meusdocumentos : Documento[]=[]
  constructor(private ObjetoService: ObjetosService,  private router: Router, public dialog:MatDialog, private documentoService: DocumentosService){}
 
  ngOnInit(): void {
    this.loadObjetos();
    this.loadDocumentos();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifique se a navegação é para a rota "meusitens"
        if (event.urlAfterRedirects === '/meusitens') {
          this.loadObjetos();
          this.loadDocumentos();
        }
      }
    });
}
loadObjetos(): void {
  this.isLoading = true;
  this.ObjetoService.GetObjetosPorUsuario().subscribe(data => {
    this.isLoading = false;
    this.meusobjetos = data.dados;
  }, error => {
    this.isLoading = false;
    console.error('Erro ao buscar objetos:', error);
  });
}

loadDocumentos(): void {
  this.isLoading = true;
  this.documentoService.GetDocumentosPorUsuario().subscribe(data => {
    this.isLoading = false;
    this.meusdocumentos = data.dados;
  }, error => {
    this.isLoading = false;
    console.error('Erro ao buscar documentos:', error);
  });
}

openDialogobjetos(id?: number){
  this.dialog.open(ExcluirObjetosComponent, {
    width: '250px',
    height: '350px',
    data: {
      id : id
    }
    
  });
}
openDialogodocumento(id?: number){
  this.dialog.open(ExcluirdocumentosComponent, {
    width: '250px',
    height: '350px',
    data: {
      id : id
    }
    
  });
}
}

