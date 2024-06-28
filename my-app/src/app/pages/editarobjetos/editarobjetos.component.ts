import { Component, OnInit } from '@angular/core';
import { Objeto } from '../../models/Objetos';
import { ObjetosService } from '../../services/objetos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editarobjetos',
  templateUrl: './editarobjetos.component.html',
  styleUrl: './editarobjetos.component.css'
})
export class EditarobjetosComponent implements OnInit {
btnAcao: string = 'Editar';
btnTitulo : string = 'Editar Objeto';
objeto! : Objeto;

constructor(private objetoService: ObjetosService, private route: ActivatedRoute, private router: Router,private toastr:ToastrService) {
 
  
}

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.objetoService.GetObjetoPorId(id).subscribe((data)=>
  {
    this.objeto = data.dados;
    
  })
    
}
editarObjeto(objeto : Objeto){
  const id = Number(this.route.snapshot.paramMap.get('id'));
 this.objetoService.EditarObjeto(objeto,id).subscribe((data)=>{
  this.toastr.success("Atualizado com sucesso");
  this.router.navigate(['/meusitens']);
 })

}
}
