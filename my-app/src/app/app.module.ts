import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ObjetospageComponent } from './pages/objetospage/objetospage.component';
import { FormularioObjetoComponent } from './components/formulario-objeto/formulario-objeto.component';
import { CadastroObjetoComponent } from './pages/cadastro-objeto/cadastro-objeto.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/security/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MeusitensComponent } from './pages/meusitens/meusitens.component';
import { LoginGuard } from './pages/security/login.guard';
import { EditarobjetosComponent } from './pages/editarobjetos/editarobjetos.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ExcluirObjetosComponent } from './components/excluir-objetos/excluir-objetos.component';
import { DocumentospageComponent } from './pages/documentospage/documentospage.component';
import { FormularioDocumentoComponent } from './components/formulario-documento/formulario-documento.component';
import { CadastroDocumentoComponent } from './pages/cadastro-documento/cadastro-documento.component';
import { EditardocumentosComponent } from './pages/editardocumentos/editardocumentos.component';
import { ExcluirdocumentosComponent } from './components/excluirdocumentos/excluirdocumentos.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    HomeComponent,
    ObjetospageComponent,
    FormularioObjetoComponent,
    CadastroObjetoComponent,
    LoginComponent,
    MeusitensComponent,
    EditarobjetosComponent,
    ExcluirObjetosComponent,
    DocumentospageComponent,
    FormularioDocumentoComponent,
    CadastroDocumentoComponent,
    EditardocumentosComponent,
    ExcluirdocumentosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideClientHydration(),
    LoginGuard,
    provideAnimationsAsync('noop'),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
