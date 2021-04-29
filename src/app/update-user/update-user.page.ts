import { UpdateUserService } from './shared/update-user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UpdateUser } from './shared/update-user';
import { Component, OnInit } from '@angular/core';
import { ToastService } from '../shared/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  user: UpdateUser;
  userId: string;
  // Dados da imagem
  private file: File = null;
  filePath: string = '';
  imgUrl: string = '';
  hasImg: boolean = false;
  constructor(private afa: AngularFireAuth,
              private updateU: UpdateUserService,
              private toast: ToastService,
              private router: Router) { }

  ngOnInit() {
    // Isntanciar a classe
    this.user =  new UpdateUser;
    // pegar o id do usuario
    this.afa.authState.subscribe(user => {
      this.userId = user.uid;
      this.research()
    })
  }
  research(){
    const subscribe = this.updateU.getById(this.userId).subscribe( (data: any) =>{
      subscribe.unsubscribe();
      const { email, name, registro, address_state, sexo, contato, tipousuario, filePath, imgUrl } = data;
      this.user.email = email;
      this.user.name = name;
      this.user.registro = registro;
      this.user.address_state = address_state;
      this.user.sexo = sexo;
      this.user.contato = contato;
      this.user.tipousuario = tipousuario;
      if(filePath && imgUrl){
        this.user.filePath =  filePath;
        this.user.imgUrl = imgUrl;
      }
      this.hasImg = this.user.imgUrl == '' ? false : true;
    });
  }

  // Upload da imagem
  upload(event: any){
    if(event.target.files.length){
      this.file = event.target.files[0];
    } else {
      this.file = null;
    }
  }
  // Remover a imagem
  async removerImg(id: string, filePath: string){
    try {
      await this.updateU.removerImg(id, filePath)
      this.user.imgUrl = '';
      this.user.filePath = '';
      this.hasImg = false;
    } catch (error) {
      this.toast.showMessageTop(error,'danger');
      console.log(error)
    }
  }
  async onSubmit(){
    // update
    try {
      await this.updateU.updateUser(this.user, this.userId, this.file);
      // mensagem OK
      this.toast.showMessageBottom('Usuario alterado com sucesso!!!','dark-green')
      this.router.navigate(['dashboard/']);
    } catch (error) {
      // mensagem error
      this.toast.showMessageTop(error, 'danger');
      console.log(error);
    }

  }
}
