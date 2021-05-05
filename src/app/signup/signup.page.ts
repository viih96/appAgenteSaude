import { ProfessionalService } from './../shared/professional.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastService } from '../shared/toast.service';
import { Router } from '@angular/router';
import { UsersAgentesaude } from '../users/shared/users-agentesaude';
import { ValidaCpfService } from '../shared/valida-cpf.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  usersAgentesaude: UsersAgentesaude;
  tipousuario: string = "agentesaude";
  email: string;
  password: string;
  user: string;
  professionals: any[] = [];
  // professionals: Observable<any[]>;


  professionalDescription: string;

  constructor(private auth: AuthService,
    private professionalService: ProfessionalService,
    private afa: AngularFireAuth,
    // private cepService: CepService,
    private validaCPFService: ValidaCpfService,
    private toast: ToastService,
    private router: Router) { }

  ngOnInit() {
    this.usersAgentesaude = new UsersAgentesaude();
    // this.professionals = this.professionalService.getAll();
    this.professionalService.getAll().subscribe((data: any) => {
      this.professionals = data;
      // this.professional = data;
    });
  }

  setProfessional(professional: any) {
    if (professional) {
      // console.log(professional);
      this.usersAgentesaude.professional = this.professionals.find(item => item.id === this.usersAgentesaude.id_professional).description
    } else {
      this.usersAgentesaude.professional = "";
    }
  }

  getProfessional(id: string) {
    const subscribe = this.professionalService.getProfessional(id).subscribe((data: any) => {
      subscribe.unsubscribe();
      this.usersAgentesaude.professional = data.description;
    })
  }

  async registerAgentesaude() {
    this.usersAgentesaude.email = this.email;
    this.usersAgentesaude.password = this.password;
    this.usersAgentesaude.tipousuario = this.tipousuario;
    // this.getProfessional(this.usersAgentesaude.id_professional);

    try {
      await this.auth.registerAgente(this.usersAgentesaude);
      await this.auth.addProfileId(this.usersAgentesaude);
      this.toast.showMessageBottom('Usuário registrado com sucesso !!!', 'secondary');
      this.router.navigate(['login']);
    } catch (error) {
      this.toast.showMessageTop(error, 'danger');
    }
  }

  validaCPF() {
    if (this.validaCPFService.isValidCPF(this.password) == false) {
      this.toast.showMessageTop('CPF Inválido', 'danger');
    }
  }


}
