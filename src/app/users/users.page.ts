import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './shared/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
 
  users: Observable<any[]>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers(){  
     this.users = this.usersService.getAllUsers('agentesaude');
     
   }


}
