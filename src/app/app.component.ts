import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dasboard', url: 'dashboard', icon: 'home' },
    { title: 'Usuários', url: 'users', icon: 'people' },
    { title: 'Sintomas', url: 'symptoms-list', icon: 'bandage' },
    { title: 'Atendimento', url: 'dashboard', icon: 'bag-add' },
    { title: '+Profissoes', url: 'create-profession', icon: 'heart' },
    { title: 'Editar Usuario', url: 'updaet-user', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  constructor(private auth:AuthService) {}

  logout(){
    this.auth.logout();
  }
}
