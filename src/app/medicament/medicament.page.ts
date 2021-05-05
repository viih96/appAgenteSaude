import { ActivatedRoute, Router } from '@angular/router';
import { Medicament } from './medicament';
import { Component, OnInit } from '@angular/core';
import { MedicamentService } from './medicament.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastService } from '../shared/toast.service';
import { Attend } from '../attendance/shared/attend';
import { User } from '../attendance/shared/user';
import { UsersService } from '../users/shared/users.service';
import { AttendanceService } from './../attendance/shared/attendance.service';
import { UsersAgentesaude } from '../users/shared/users-agentesaude';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.page.html',
  styleUrls: ['./medicament.page.scss'],
})
export class MedicamentPage implements OnInit {
  attend: Attend;
  medicament: Medicament;
  attendId: string;
  user: User;
  d = new Date(); // recuperando a data
  yearNow = this.d.getFullYear(); // pegando o ano atual
  dnascimento: number; // variável para montar a idade
  agenteId: string;
  medicName: string;
  medicCrm: string;
  medicProfissional: string;
  agent: UsersAgentesaude;

  constructor(private activatedRoute: ActivatedRoute,
              private medicamentService: MedicamentService,
              private userService: UsersService,
              private attendanceService: AttendanceService,
              private afa: AngularFireAuth,
              private storage: AngularFireStorage,
              private router: Router,
              private toast: ToastService) { }

  ngOnInit() {
    this.agent = new UsersAgentesaude();
    this.attend = new Attend();
    this.user = new User();

    this.afa.authState.subscribe(user =>{
      this.agenteId = user.uid;
      console.log(this.agenteId);

      if(this.agenteId){
        const subscribe = this.medicamentService.getByAgId(this.agenteId).subscribe( (data: any) =>{
      subscribe.unsubscribe();
      console.log(data);
      //const { name, datanascimento, cartaosus, tiposanguineo, contato, email, comorbidades, filePath, imgUrl } = data;
      this.agent.name = data.name == null ? "" : data.name;
      this.agent.registro = data.registro == null ? "" : data.registro;
      this.agent.professional = data.professional == null ? "" : data.professional;
    });
    }
  })

    this.attendId = this.activatedRoute.snapshot.params['id'];
    if (this.attendId) {
      const subscribe = this.attendanceService.getById(this.attendId).subscribe((data: any) => {
        subscribe.unsubscribe();
        const { date, name, cartaosus, status, uId } = data;
        this.attend.name = name;
        this.attend.date = date;
        this.attend.cartaosus = cartaosus;
        const subscribeu = this.userService.getByIdPaciente(uId).subscribe((dataU: any) => {
          subscribeu.unsubscribe();
          const { name, datanascimento, tiposanguineo, sexo, celular, faixaetaria, comorbidades, cartaosus } = dataU;
          this.user.name = name;
          this.user.datanascimento = datanascimento;
          // calculando a idade
          this.dnascimento = this.yearNow - parseInt(datanascimento.substring(0, 4));
          this.user.tiposanguineo = tiposanguineo;
          this.user.sexo = sexo;
          this.user.celular = celular;
          this.user.faixaetaria = faixaetaria;
          this.user.comorbidades = comorbidades;
          this.user.cartaosus = cartaosus;

          console.log(dataU);
        })
      })
    }
    this.medicament = new Medicament();
    this.medicament.remedio = "";
    this.medicament.tipo = "";
    this.medicament.dosagem = "";
    this.medicament.horario = "";
    this.medicament.observacao = "";

  }

  async finishing(){
      // passar o id e chamar metodo de gravar no banco
    try {
      await this.medicamentService.addMedicament(this.attendId, this.medicament, this.agent);
      this.toast.showMessageBottom('Medicamento inserido com sucesso!!!','dark-green')
      this.router.navigate(['/attendance-information', this.attendId]);
    } catch (error) {
      // mensagem error
      this.toast.showMessageTop(error, 'danger');
      console.log(error);
    }
    this.attend.status = "closed";
  }

  voltar(){
    this.router.navigate(['/attendance-information', this.attendId]);
  }

  async updateStatus(){
    try {
      await this.medicamentService.addMedicament(this.attendId, this.medicament, this.agent);
      this.toast.showMessageBottom('Medicamento inserido com sucesso!!!','dark-green')
      this.router.navigate(['/attendance-information', this.attendId]);
    } catch (error) {
      // mensagem error
      this.toast.showMessageTop(error, 'danger');
      console.log(error);
    }
    // update
    try {
      await this.medicamentService.updateStatus(this.attend, this.attendId);
      // mensagem OK
      this.toast.showMessageBottom('Atendimento finalizado!!!','dark-green')
      this.router.navigate(['attendance/']);
    } catch (error) {
      // mensagem error
      this.toast.showMessageTop(error, 'danger');
      console.log(error);
    }

  }


}
