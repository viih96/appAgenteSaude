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
  user: User;
  hasImg: boolean = false;

  constructor (
    private dashboardservice: DashboardService,
    private afa: AngularFireAuth){}

  ngOnInit() {
    this.user = new User();
    this.afa.authState.subscribe(user =>{
        this.userid = user.uid;
         this.username = user.displayName;
        // console.log(this.userid);
        // console.log(this.username)

        if(this.userid){
          const subscribe = this.dashboardservice.getById(this.userid).subscribe( (data: any) =>{
        subscribe.unsubscribe();
        // console.log(data);
        this.user.name = data.name == null ? "" : data.name;
        this.user.address_state = data.address_state == null ? "" : data.address_state;
        this.user.cartaosus = data.cartaosus == null ? "" : data.cartaosus;
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
