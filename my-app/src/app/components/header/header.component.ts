import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  removerid(): void {
    this.loginService.removerIdLocalStorage();
    this.router.navigate(['login']);
  }
  irParaMeusItens(): void {
    this.router.navigate(['/meusitens']).then(() => {
      window.location.reload();
    });
  }

}
