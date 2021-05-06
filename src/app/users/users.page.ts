import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersAgentesaude } from './shared/users-agentesaude';
import { UsersPaciente } from './shared/users-paciente';
import { UsersService } from './shared/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  tipousuario: string;
  users: Observable<any[]>;
  usersPaciente: UsersPaciente;
  usersAgentesaude: UsersAgentesaude;
  usersId: string;

  constructor( private router: Router,
    private usersService: UsersService, ) { }

  ngOnInit() {
    this.usersPaciente = new UsersPaciente();
    // this.usersPaciente.name = "";
    this.usersAgentesaude = new UsersAgentesaude();
  }

   getAllUsersPaciente(){
    this.users = this.usersService.getAllUsersPaciente('paciente');
   }

   getAllUsersAgente(){
    this.users = this.usersService.getAllUsersAgente('agentesaude');
   }


   onChange(){
    console.log(this.tipousuario)
  }


}
