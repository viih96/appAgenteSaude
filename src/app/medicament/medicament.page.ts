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
  private medicamentId: string = '';
  title: string;
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

  //   this.medicamentId =  this.activatedRoute.snapshot.params['id'];
  //   this.medicamentId ? this.title = "Editar Medicamento" : this.title = "Cadastrar Medicamento";

  //   if(this.medicamentId){
  //     const subscribe = this.medicamentService.getById(this.medicamentId).subscribe( (data: any) =>{
  //      subscribe.unsubscribe();
  //      const { paciente, atendimento, remedio, tipo, dosagem, horario, observacao } = data;
  //      this.medicament.paciente = paciente;
  //      this.medicament.atendimento = atendimento;
  //      this.medicament.remedio = remedio;
  //      this.medicament.tipo = tipo;
  //      this.medicament.dosagem = dosagem;
  //      this.medicament.horario = horario;
  //      this.medicament.observacao = observacao;
  //    })
  //  }
  }

  async onSubmit(){
    // console.log(this.symptoms)

    if (this.medicamentId){
      // update
      try {
        await this.medicamentService.updateMedicament(this.medicament, this.medicamentId);
        // mensagem OK
        this.toast.showMessageBottom('Medicamento alterado com sucesso!!!','success')
        this.router.navigate(['/attendance']);
      } catch (error) {
        // mensagem error
        this.toast.showMessageTop(error, 'danger');
        console.log(error);
      }

    } else {
      // add
      try {
        await this.medicamentService.addMedicament(this.medicament);
        // mensagem OK
        this.toast.showMessageBottom('Medicamento inserido com sucesso!!!','success')
        this.router.navigate(['/attendance']);
      } catch (error) {
        // mensagem error
        this.toast.showMessageTop(error, 'danger');
        console.log(error);
      }

    }
  }

}
