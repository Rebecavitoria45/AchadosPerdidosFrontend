import { Component } from '@angular/core';
import { DocumentosService } from '../../services/documentos.service';
import { Router } from '@angular/router';
import { Documento } from '../../models/Documentos';

@Component({
  selector: 'app-cadastro-documento',
  templateUrl: './cadastro-documento.component.html',
  styleUrl: './cadastro-documento.component.css'
})
export class CadastroDocumentoComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar Documento"
  constructor(private documentoService : DocumentosService, private router: Router) {}

  createDocumento(documento: Documento){
    this.documentoService.createDocumento(documento).subscribe((data)=>{});
    this.router.navigate(['/documentospage']).then(() => {
      window.location.reload();
    });
    }
}
