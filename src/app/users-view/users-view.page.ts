import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersPaciente } from '../users/shared/users-paciente';
import { AngularFireStorage } from '@angular/fire/storage';
import { UsersService } from '../users/shared/users.service';
import { UsersAgentesaude } from '../users/shared/users-agentesaude';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.page.html',
  styleUrls: ['./users-view.page.scss'],
})
export class UsersViewPage implements OnInit {
  usersPaciente: UsersPaciente;
  usersAgentesaude: UsersAgentesaude;
  usersid: string;
  tipousuario: string;
  id: string;
  username: string;
  useremail: string;

  constructor(private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private storage: AngularFireStorage,
    private router: Router) { }

  ngOnInit() {
    this.usersPaciente = new UsersPaciente();
    this.usersAgentesaude = new UsersAgentesaude();
    this.id = this.activatedRoute.snapshot.params['id'];

    if (this.id) {
      const subscribe = this.usersService.getByIdPaciente(this.id).subscribe((data: any) => {
        subscribe.unsubscribe();
        this.tipousuario = data.tipousuario;
        this.username = data.name;
        this.useremail = data.email;

        if (data.tipousuario == 'agentesaude') {
          const { name, email, tipousuario, address_state, contato, professional, registro, sexo } = data;
          this.usersAgentesaude.name = name;
          this.usersAgentesaude.email = email;
          this.usersAgentesaude.tipousuario = tipousuario;
          this.usersAgentesaude.sexo = sexo;
          this.usersAgentesaude.email = email;
          this.usersAgentesaude.address_state = address_state;
          this.usersAgentesaude.contato = contato;
          this.usersAgentesaude.professional = professional;
          this.usersAgentesaude.registro = registro;
        } else {
          const { name, email, tipousuario, cartaosus, celular, sexo, faixaetaria,
            address, address_city, address_complement, address_district, address_number, address_state, comorbidades,
            contato, datanascimento, tiposanguineo, zipcode } = data;

          this.usersPaciente.name = name;
          this.usersPaciente.email = email;
          this.usersPaciente.tipousuario = tipousuario;
          this.usersPaciente.cartaosus = cartaosus;
          this.usersPaciente.celular = celular;
          this.usersPaciente.sexo = sexo;
          this.usersPaciente.faixaetaria = faixaetaria;
          this.usersPaciente.email = email;
          this.usersPaciente.address = address;
          this.usersPaciente.address_city = address_city;
          this.usersPaciente.address_complement = address_complement;
          this.usersPaciente.address_district = address_district;
          this.usersPaciente.address_number = address_number;
          this.usersPaciente.address_state = address_state;
          this.usersPaciente.comorbidades = comorbidades;
          this.usersPaciente.contato = contato;
          this.usersPaciente.datanascimento = datanascimento;
          this.usersPaciente.tiposanguineo = tiposanguineo;
          this.usersPaciente.zipcode = zipcode;
        }

      })

    } else {
      console.log('SEM ID');
    }










  }


}
