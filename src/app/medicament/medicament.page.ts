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

  constructor(private activatedRoute: ActivatedRoute,
              private medicamentService: MedicamentService,
              private userService: UsersService,
              private attendanceService: AttendanceService,
              private storage: AngularFireStorage,
              private router: Router,
              private toast: ToastService) { }

  ngOnInit() {
    this.attend = new Attend();
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
    }
    this.medicament = new Medicament();
    this.medicament.remedio = "";
    this.medicament.tipo = "";
    this.medicament.dosagem = "";
    this.medicament.horario = "";
    this.medicament.observacao = "";

  }

  finishing(){
      // passar o id e chamar metodo de gravar no banco
      try {
      this.medicamentService.addMedicament(this.attendId, this.medicament);
      this.toast.showMessageBottom('Medicamento inserido com sucesso!!!','dark-green')
      this.router.navigate(['/attendance']);
    } catch (error) {
      // mensagem error
      this.toast.showMessageTop(error, 'danger');
      console.log(error);
    }
  }


}
