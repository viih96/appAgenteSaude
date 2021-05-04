import { UsersAgentesaude } from './../users/shared/users-agentesaude';
import { MedicamentService } from './../medicament/medicament.service';
import { Component, OnInit } from '@angular/core';
import { Attend } from '../attendance/shared/attend';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../attendance/shared/user';
import { Symptoms } from '../attendance/shared/symptoms';
import { UsersService } from '../users/shared/users.service';
import { AttendanceService } from './../attendance/shared/attendance.service';
import { subAttend } from './../attendance/shared/subattend';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-attendance-information',
  templateUrl: './attendance-information.page.html',
  styleUrls: ['./attendance-information.page.scss'],
})
export class AttendanceInformationPage implements OnInit {
  attend: Attend;
  subAttend: subAttend;
  symptoms: Symptoms;
  user: User;
  attendId: string;
  userId: string;
  symptomsId: string;
  d = new Date(); // recuperando a data
  yearNow = this.d.getFullYear(); // pegando o ano atual
  dnascimento: number; // variável para montar a idade
  subAttends: any[] = [];
  users: any[];
  symptom: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UsersService,
    private attendanceService: AttendanceService,

    private router: Router) { }

  ngOnInit() {
    this.attend = new Attend();
    this.subAttend = new subAttend();
    this.user = new User();

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
      this.getAllSubAttend();
      this.getAllSymptoms();
    }

  }

  getAllSubAttend() {
    const subscribe = this.attendanceService.getAllSubAttend(this.attendId).subscribe((dataSub: any) => {
      subscribe.unsubscribe();
      console.log(dataSub);
      this.subAttends = dataSub;
    })

  }

  getAllSymptoms() {
    const subscribe = this.attendanceService.getAllSymptoms(this.attendId).subscribe((dataSym: any) => {
      subscribe.unsubscribe();
      console.log(dataSym);
      this.symptom = dataSym;
    })

  }

  getByUid() {
    const subscribe = this.attendanceService.getByUid(this.userId).subscribe((data: any) => {
      subscribe.unsubscribe();
      const { datanascimento, tiposanguineo, sexo } = data;
      this.user.datanascimento = this.user.datanascimento == null ? '' : datanascimento;
      this.user.tiposanguineo = tiposanguineo;
      this.user.sexo = sexo;
      console.log(data);
      this.users = data;
    })
  }


}

