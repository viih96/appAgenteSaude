import { User } from './shared/user';
import { DashboardService } from './shared/dashboard.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage{
  username: string;
  userid: string;
  users: User;


  constructor (
    private dashboardservice: DashboardService,
    private afa: AngularFireAuth){}

  ngOnInit() {
    this.users = new User();
    this.afa.authState.subscribe(user =>{
        this.userid = user.uid;
         this.username = user.displayName;
        // console.log(this.userid);
        // console.log(this.username)

        if(this.userid){
          const subscribe = this.dashboardservice.getById(this.userid).subscribe( (data: any) =>{
        subscribe.unsubscribe();
        console.log(data);
        //const { name, datanascimento, cartaosus, tiposanguineo, contato, email, comorbidades, filePath, imgUrl } = data;
        this.users.name = data.name == null ? "" : data.name;
        this.users.sexo = data.sexo == null ? "" : data.sexo;
        this.users.registro = data.registro == null ? "" : data.registro;
        this.users.address_state = data.address_state == null ? "" : data.address_state;
        this.users.professional= data.professional == null ? "" : data.professional;
        this.users.contato = data.contato == null ? "" : data.contato;
        this.users.email = data.email == null ? "" : data.email;
        this.users.filePath = data.filePath == null ? "" : data.filePath;
        this.users.imgUrl = data.imgUrl == null ? "" : data.imgUrl;
      });
      }
    })
 }
}
