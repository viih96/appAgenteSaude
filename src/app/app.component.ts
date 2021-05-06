import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { PerfilService } from './profile/shared/perfil.service';
import { AuthService } from './shared/auth.service';
import { User } from './profile/shared/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dasboard', url: 'dashboard', icon: 'home' },
    { title: "Pacientes Agentes de Saúde", url: 'users', icon: 'people' },
    { title: 'Sintomas', url: 'symptoms-list', icon: 'bandage' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Atendimentos', url: 'attendance', icon: 'chatbubbles' },
    { title: 'Profissionais', url: 'profession-list', icon: 'heart' },
    { title: 'Perfil do Usuario', url: 'profile', icon: 'person' },

    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  username: string;
  userid: string;
  user: User;
  hasImg: boolean = false;

  constructor(private auth:AuthService,
    private perfilService: PerfilService,
    private afa: AngularFireAuth) {
      this.user = new User();
      this.afa.authState.subscribe(user =>{
          this.userid = user.uid;
           this.username = user.displayName;
          if(this.userid){
            const subscribe = this.perfilService.getById(this.userid).subscribe( (data: any) =>{
          subscribe.unsubscribe();
          // console.log(data);
          this.user.name = data.name == null ? "" : data.name;
          this.user.address_state = data.address_state == null ? "" : data.address_state;
          this.user.registro = data.registro == null ? "" : data.registro;
          this.user.contato = data.contato == null ? "" : data.contato;
          this.user.email = data.email == null ? "" : data.email;
          this.user.sexo = data.sexo == null ? "" : data.sexo;
          this.user.filePath = data.filePath == null ? "" : data.filePath;
          this.user.imgUrl = data.imgUrl == null ? "" : data.imgUrl;
          this.hasImg = this.user.imgUrl == '' ? true : false;
        });
        }
      })
    }




  logout(){
    this.auth.logout();
  }
}
