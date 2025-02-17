import { Component } from '@angular/core';
import { ObjetosService } from '../../services/objetos.service';
import { Router } from '@angular/router';
import { Objeto } from '../../models/Objetos';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cadastro-objeto',
  templateUrl: './cadastro-objeto.component.html',
  styleUrl: './cadastro-objeto.component.css'
})
export class CadastroObjetoComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar Objeto"
  constructor(private objetoService : ObjetosService, private router: Router,private toastr:ToastrService) {
  
  
  }
  
    createObjeto(objeto: Objeto){
      this.objetoService.createObjeto(objeto).subscribe((data)=>{});
      this.router.navigate(['/objetospage']).then(() => {
        window.location.reload();
      });
      }
  }

