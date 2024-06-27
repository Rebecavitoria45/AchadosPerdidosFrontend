import { Component , OnInit} from '@angular/core';
import { Documento } from '../../models/Documentos';
import { DocumentosService } from '../../services/documentos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editardocumentos',
  templateUrl: './editardocumentos.component.html',
  styleUrl: './editardocumentos.component.css'
})
export class EditardocumentosComponent implements OnInit {
  btnAcao: string = 'Editar';
  btnTitulo : string = 'Editar Documento';
  documento! : Documento;

  constructor(private documentoService: DocumentosService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.documentoService.GetDocumentoPorId(id).subscribe((data)=>
    {
      this.documento = data.dados;
      
    })
      
  }
  editarDocumento(documento : Documento){
    const id = Number(this.route.snapshot.paramMap.get('id'));
   this.documentoService.EditarDocumento(documento,id).subscribe((data)=>{
    this.router.navigate(['/meusitens']);
   })
  
  }

}
