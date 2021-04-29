import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { PerfilService } from './shared/perfil.service';
import { User } from './shared/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username: string;
  userid: string;
  user: User;
  hasImg: boolean = false;

  constructor (
    private perfilService: PerfilService,
    private afa: AngularFireAuth){}

  ngOnInit() {
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

}
