import { Component, OnInit } from '@angular/core';
import { Objeto } from '../../models/Objetos';
import { ObjetosService } from '../../services/objetos.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-meusitens',
  templateUrl: './meusitens.component.html',
  styleUrl: './meusitens.component.css'
})
export class MeusitensComponent implements OnInit {
  meusobjetos: Objeto[] = [];
  isLoading: boolean = true;

  constructor(private ObjetoService: ObjetosService,  private router: Router){}
 
  ngOnInit(): void {
    this.loadObjetos();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifique se a navegação é para a rota "meusitens"
        if (event.urlAfterRedirects === '/meusitens') {
          this.loadObjetos();
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
}
